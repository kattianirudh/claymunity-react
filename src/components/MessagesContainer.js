import React, { Component } from "react";
import "./MessagesContainer.css";
import MessageComponent from "./MessageComponent";

class MessagesContainer extends Component {
  render() {
    return (
      <div className="messagess-div">
        <div className="messagess-box" id="messages-box">
          <MessageComponent />
        </div>
      </div>
    );
  }
}

export default MessagesContainer;
