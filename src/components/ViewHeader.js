import React, { Component } from 'react';
import './ViewHeader.css';

//This is the component that includes the workplace name
class ViewHeader extends Component {
  render() {
    return (
        <div className = "ViewHeader">
            <div className="workspace-name">
                <h2>Workspace Name</h2>
        </div>
      </div>
    );
  }
}

export default ViewHeader;
