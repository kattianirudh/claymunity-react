import React, { Component } from "react";
import "./MessageComponent.css";

class MessageComponent extends Component {
    render() {
        return (
            <div className="message-div">
                <div className="display-pic"> AK </div>
                <div className="right-pane">
                    <div className="details">
                        <h3 className="name"> kattianirudh </h3>
                        <p className="text-muted"> 6: 00 </p>
                    </div>
                    <div className="message-text">
                        <p>Hi</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageComponent;