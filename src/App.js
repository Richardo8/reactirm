import React, { Component } from 'react';
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
