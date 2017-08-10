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
                        <Header style={{ textAlign: 'center', position: 'fixed', width: '100%', zIndex: '2' }}>Header</Header>
                        <Layout style={{ marginTop: 64}}>
                            <ThisMenu/>
                            <Content style={{ overflowY: 'scroll' }}>
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
