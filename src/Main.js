import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import ThisMenu from "./components/Menu/Menu";
import Routes from './Route/Routes'
import { connect } from 'react-redux'


import { Layout } from 'antd';
const { Header, Content } = Layout;

class Main extends Component {
    render() {
        return (
            <div className="App" style={{height: '100%'}}>
                <Router>
                    <Layout style={{height: '100%'}}>
                        <Header style={{ textAlign: 'center'}}>Header</Header>
                        <Layout>
                            <ThisMenu/>
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



export default connect()(Main);