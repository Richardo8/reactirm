import React from 'react'
import { Link } from 'react-router-dom'
// import UserList from "../List/UserList/UserList";

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class ThisMenu extends React.Component {
    state = {
        current: '1',
        openKeys: [],
    }

    componentDidMount(){
        switch (window.location.pathname){
            case '/userlist':
                this.setState({ current: '1', openKeys: ['sub1'] });
                break;
            case '/grouplist':
                this.setState({ current: '2', openKeys: ['sub1'] });
                break;
            default:
                break;
        }
    }
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
        };
        return map[key] || [];
    }
    render() {
        return (
                <div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        openKeys={this.state.openKeys}
                        selectedKeys={[this.state.current]}
                        style={{ width: 240 }}
                        onOpenChange={this.onOpenChange}
                        onClick={this.handleClick}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
                            <Menu.Item key="1"><Link to="/userlist">用户管理</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/grouplist">分组管理</Link></Menu.Item>
                            <Menu.Item key="3">违章查询</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>微信管理</span></span>}>
                            <Menu.Item key="4">群发消息</Menu.Item>
                            <Menu.Item key="5">群发消息记录</Menu.Item>
                            <Menu.Item key="6">素材管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>文章管理</span></span>}>
                            <Menu.Item key="7">文章管理</Menu.Item>
                            <Menu.Item key="8">原文管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>标签管理</span></span>}>
                            <Menu.Item key="9">标签管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="setting" /><span>渠道管理</span></span>}>
                            <Menu.Item key="10">渠道管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>车型管理</span></span>}>
                            <Menu.Item key="11">所有车型</Menu.Item>
                            <Menu.Item key="12">试驾报告</Menu.Item>
                            <Menu.Item key="13">优惠促销</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" title={<span><Icon type="setting" /><span>活动管理</span></span>}>
                            <Menu.Item key="14">活动招募</Menu.Item>
                            <Menu.Item key="15">活动模板</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8" title={<span><Icon type="setting" /><span>维修保养</span></span>}>
                            <Menu.Item key="16">服务套餐</Menu.Item>
                            <Menu.Item key="17">服务优惠套餐</Menu.Item>
                            <Menu.Item key="18">预约信息</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub9" title={<span><Icon type="setting" /><span>人员管理</span></span>}>
                            <Menu.Item key="19">销售顾问</Menu.Item>
                            <Menu.Item key="20">服务顾问</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub10" title={<span><Icon type="setting" /><span>权限管理</span></span>}>
                            <Menu.Item key="21">大区</Menu.Item>
                            <Menu.Item key="22">经销商集团</Menu.Item>
                            <Menu.Item key="23">4S店管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
        );
    }
}

export default ThisMenu;
