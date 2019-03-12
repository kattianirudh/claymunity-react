import React, { Component } from 'react';
import './MainViewHeader.css';

//This is the component that includes the workplace name
class MainViewHeader extends Component {
  render() {
    return (
        <div className = "MainViewHeader">
            <div className="workspace-name">
                <h2>Workspace Name</h2>
        </div>
      </div>
    );
  }
}

export default MainViewHeader;
