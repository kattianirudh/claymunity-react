import React, { Component } from "react";
import ViewHeader from "./ViewHeader";
import "./ViewTop.css";

class ViewTop extends Component {
  render() {
    return (
      <div class="height-100 workspace-div">
        <div className="workspace-main">
          <ViewHeader />
          <div className="messages-div">
            <div className="messages-box" id="messages-box" />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTop;
