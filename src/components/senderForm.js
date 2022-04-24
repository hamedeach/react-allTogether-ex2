import React, { Component } from "react";
import propTypes from "prop-types";


class SenderForm extends Component {
    
    state={
        NewMessage:''
    }

    isDisabled = () => {
       return (this.state.NewMessage ==='')?true : false;
    };

    handleNewMessage = event =>{
        this.setState({ NewMessage: event.target.value });
    }

    sendNewMessage =event=>{
        event.preventDefault();
        this.props.buildmessage(this.state.NewMessage);
        this.setState({ NewMessage: '' });


    }
    
    render() {
        return (
            <div>
                <form className="input-group">
                    <input type="text" 
                    className="form-control"
                     placeholder="Enter your message..."  
                     value={this.state.NewMessage} 
                     onChange={this.handleNewMessage}/>
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.sendNewMessage}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};




SenderForm.propTypes = {
    messages: propTypes.array.isRequired,
    buildmessage:propTypes.func.isRequired,



};

export default SenderForm;