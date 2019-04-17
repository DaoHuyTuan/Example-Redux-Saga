import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Containers/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">
              <span>Refresh All</span>
          </div>  
          <div className="content">
              <Content />
          </div>
      </div>
    );
  }
}

export default App;
