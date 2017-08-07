import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './Redux/Store/Store'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import ThisMenu from "./components/Menu/Menu";
import Routes from './Route/Routes'

import { Layout } from 'antd';
import Main from "./Main";
const { Header, Content } = Layout;

const store = configureStore()

console.log(store)

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
