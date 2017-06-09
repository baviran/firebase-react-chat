import React, {Component} from 'react';
import ChatRoom from './ChatRoom'

class LogIn extends Component {

    constructor(props, context) {
        super(props, context)
        this.updateUsername = this.updateUsername.bind(this)

        this.state = {
            username: ""
        }
    }

    updateUsername(event) {
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="form-group ">
                    <label className="">Please enter your user name:</label>
                    <div className="">
                        <input className="form-control-blue1" onChange={this.updateUsername} type="text"
                               placeholder="User name"/>
                    </div>
                </div>
                <ChatRoom currentUsername={this.state.username}/>
            </div>

        )
    }
}

export default LogIn