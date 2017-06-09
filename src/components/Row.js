import React, {Component} from 'react';

class Row extends Component {
    constructor(){
        super()
        const randomColor = require('random-color');
        this.state={
            color:randomColor().hexString()
        }

    }
    render() {
        const headerStyle ={
            color:this.state.color,
        };
        const message = this.props.msg;
        return (
            <div className="top5 bg-gray4 min-height30 padding6">
                <span> <span style={headerStyle} >{message.user} </span>: {message.text}</span>
            </div>
        )
    }
}

export default Row