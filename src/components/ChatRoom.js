import React, {Component} from 'react'
import Row from './Row'
class ChatRoom extends Component {
    constructor(props, context) {
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        firebase.database().ref('messages/').on('value', (snapshot) => {

            const currentMessages = snapshot.val()

            if (currentMessages != null) {
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    submitMessage(event) {
        if (!this.state.message || !this.props.currentUsername) {
            alert("Enter username and message first!");
            return;
        }

        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message,
            user: this.props.currentUsername
        }

        firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)

    }

    render() {
        const currentMessages = this.state.messages.map((message, i) => {
            return (
                <Row key={message.id} msg={message}/>
            )
        })
        return (
            <div className="col-xs-12 padding0">
                <div className="col-xs-12 padding0 bottom5 ">
                    {currentMessages}
                </div>
                <div className="col-xs-12 padding0">
                    <div className="col-xs-8 padding0">
                        <input className="form-control-blue1" onChange={this.updateMessage} type="text"
                               placeholder="Message"/>
                    </div>
                    <div className="col-xs-4 padding0">
                        <button className="btn btn-blue1 col-xs-12" onClick={this.submitMessage}>Submit Message</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatRoom