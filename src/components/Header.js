import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
        <div className="height-100 left-pane">
          <div className="name-div">
            <h1 className="names">Hello, Anirudh</h1>
            <p className="username">@kattianirudh</p>
          </div>
          <div className="details" style={{ height: "88vh" ,display:"flex"}}>
            <div className="workspace-list-div">
              <div className="workspace-list">
                <span>GN</span>
                <span>WS1</span>
                <span>WS2</span>
                <span>RN</span>
                <span>AB</span>
                <span>XZ</span>
              </div>
            </div>

            <div className="channel-details-div">
              <div className="channels">
                <h2 className="channel-header">Channels</h2>
                <div className="channel-list">
                  <div
                    target="message-iframe"
                    className="channel-name nope "
                    method="POST"
                  >
                    <p />#<p className="names">general</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
