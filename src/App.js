import React, { Component } from 'react';
import SideNav from './components/SideNav';
import MainView from './components/MainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{width : "100%", display: "flex"}}>
          <SideNav />
          <MainView />
      </div>
    );
  }
}

export default App;
