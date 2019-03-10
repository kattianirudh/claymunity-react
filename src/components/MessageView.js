import React, { Component } from 'react';
import Header from './components/Header';
import ChanelView from './components/ChanelView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{width : "100%"}}>
          <Header />
          <ChanelView />
      </div>
    );
  }
}

export default App;
