import React, { Component } from "react";
import ViewHeader from "./ViewHeader";
import Messages from "./Messages";
import "./ViewTop.css";

class ViewTop extends Component {
  render() {
    return (
      <div class="height-100 workspace-div">
        <div className="workspace-main">
          <ViewHeader />
          <div className="messages-div">
            <div className="messages-box" id="messages-box" />
            <Messages />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTop;
