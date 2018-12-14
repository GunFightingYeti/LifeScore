import React, { Component } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Login from './components/Login';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Jumbotron/>
        <Login/>
      </div>
    );
  }
}

export default App;
