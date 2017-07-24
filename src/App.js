import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import WrappedNormalLoginForm from './components/Login/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <WrappedNormalLoginForm/>
      </div>
    );
  }
}

export default App;
