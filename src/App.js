import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import ViewTop from './components/ViewTop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{width : "100%"}}>
          <Header />
          <ViewTop />
      </div>
    );
  }
}

export default App;
