import React, { Component } from 'react';
// import WrappedNormalLoginForm from './components/Login/Login'
import UserList from './components/List/UserList/UserList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserList />
      </div>
    );
  }
}

export default App;
