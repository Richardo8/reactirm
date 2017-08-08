import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './Redux/Store/Store'
import './App.css';
import Main from "./Main";

const store = configureStore()

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}

export default App;
