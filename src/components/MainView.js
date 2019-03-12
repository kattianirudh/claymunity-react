import React, { Component } from "react";
import MainViewHeader from "./MainViewHeader";
import MessagesContainer from "./MessagesContainer";
import "./MainView.css";

class MainView extends Component {
  render() {
    return (
      <div class="height-100 workspace-div">
        <div className="workspace-main">
          <MainViewHeader />
          <div className="messages-div">
            <div className="messages-box" id="messages-box" />
            <MessagesContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
