import React, { Component } from 'react';
// import WrappedNormalLoginForm from './components/Login/Login'
// import UserList from './components/List/UserList/UserList'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import ThisMenu from "./components/Menu/Menu";
import Routes from './Route/Routes'

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider width={250}>
                <ThisMenu/>
              </Sider>
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
