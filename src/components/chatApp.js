import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import User from './user.js'



class ChatApp extends Component {

    users = [{ username: 'Amy' }, { username: 'John' }];
    state = {
        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ],

    }

    sendNewMessage = (message) => {


        try {
            var audio = new Audio('note.mp3');
            audio.play();
        } catch (error) {
            console.error(error);
            alert(error);
        }

        this.setState(prevState =>
            ({ messages: [...prevState.messages, message] }));
    }


    render() {
        return (
            <div className='app'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <User sender={this.users[0].username} messages={this.state.messages} sendmessagefunc={this.sendNewMessage} />
                    <User sender={this.users[1].username} messages={this.state.messages} sendmessagefunc={this.sendNewMessage} />
                </div>
            </div>
        )
    }

}
export default ChatApp;