import React, { Component } from "react";
import propTypes from "prop-types";
import SenderForm from "./senderForm";

class User extends Component {

    buildMessage = (messge) => {
        const compMsg = { username:this.props.sender, text: messge };
        this.props.sendmessagefunc(compMsg);
    }

    render() {
        return (
            <div className="container">
                <div className="chat-window">
                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{this.props.sender}</div>
                    <ul className="message-list">
                        {this.props.messages.map((message, index) => (
                            <li
                                key={index}
                                className={
                                    message.username === this.props.sender ? 'message sender' : 'message recipient'
                                }
                            >
                                <p>{`${message.username}: ${message.text}`}</p>
                            </li>
                        ))}
                    </ul>
                    <SenderForm messages={this.props.messages} buildmessage={this.buildMessage}></SenderForm>

                </div>
            </div>
        )
    }
};


 



User.propTypes = {
    sender: propTypes.string.isRequired,
    messages: propTypes.array.isRequired,
    sendmessagefunc: propTypes.func.isRequired,

};

export default User;