import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './Redux/Store/Store'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import ThisMenu from "./components/Menu/Menu";
import Routes from './Route/Routes'

import { Layout } from 'antd';
const { Header, Content } = Layout;

const store = configureStore()

console.log(store)

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        <Router>
          <Layout style={{height: '100%'}}>
            <Header style={{ textAlign: 'center'}}>Header</Header>
            <Layout>
              {/*<Sider>*/}
                <ThisMenu/>
              {/*</Sider>*/}
              <Content>
                <Routes/>
              </Content>
            </Layout>
          </Layout>
        </Router>

      </div>
    );
  }
}

export default App;
