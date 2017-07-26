import React, { Component } from 'react';
// import WrappedNormalLoginForm from './components/Login/Login'
// import UserList from './components/List/UserList/UserList'
import './App.css';
import ThisMenu from "./components/Menu/Menu";
import Routes from './Route/Routes'

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
