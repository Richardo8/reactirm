import React from 'react'
import { Link } from 'react-router-dom'
// import UserList from "../List/UserList/UserList";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;


// import {  } from 'antd';
const SubMenu = Menu.SubMenu;

class ThisMenu extends React.Component {
    state = {
        collapsed: false,
        current: '1',
        openKeys: [],
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
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
        if(!this.state.collapsed){
            console.log(openKeys)
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
        }else{
            if(openKeys.length > 1){
                openKeys.shift();
            }
            console.log(openKeys)
            this.setState({ openKeys: openKeys });
        }
    }
    getAncestorKeys = (key) => {
        const map = {
        };
        return map[key] || [];
    }
    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={200}>
                <div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[this.state.current]}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        onClick={this.handleClick}
                    >
                        {/*<SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>*/}
                            {/*<Menu.Item key="1"><Link to="/userlist">用户管理</Link></Menu.Item>*/}
                            {/*<Menu.Item key="2"><Link to="/grouplist">分组管理</Link></Menu.Item>*/}
                            {/*<Menu.Item key="3">违章查询</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub2" title={<span><Icon type="mail" /><span>微信管理</span></span>}>*/}
                            {/*<Menu.Item key="4">群发消息</Menu.Item>*/}
                            {/*<Menu.Item key="5">群发消息记录</Menu.Item>*/}
                            {/*<Menu.Item key="6">素材管理</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub3" title={<span><Icon type="mail" /><span>文章管理</span></span>}>*/}
                            {/*<Menu.Item key="7">文章管理</Menu.Item>*/}
                            {/*<Menu.Item key="8">原文管理</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub4" title={<span><Icon type="setting" /><span>标签管理</span></span>}>*/}
                            {/*<Menu.Item key="9">标签管理</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub5" title={<span><Icon type="setting" /><span>渠道管理</span></span>}>*/}
                            {/*<Menu.Item key="10">渠道管理</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub6" title={<span><Icon type="setting" /><span>车型管理</span></span>}>*/}
                            {/*<Menu.Item key="11">所有车型</Menu.Item>*/}
                            {/*<Menu.Item key="12">试驾报告</Menu.Item>*/}
                            {/*<Menu.Item key="13">优惠促销</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub7" title={<span><Icon type="setting" /><span>活动管理</span></span>}>*/}
                            {/*<Menu.Item key="14">活动招募</Menu.Item>*/}
                            {/*<Menu.Item key="15">活动模板</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub8" title={<span><Icon type="setting" /><span>维修保养</span></span>}>*/}
                            {/*<Menu.Item key="16">服务套餐</Menu.Item>*/}
                            {/*<Menu.Item key="17">服务优惠套餐</Menu.Item>*/}
                            {/*<Menu.Item key="18">预约信息</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub9" title={<span><Icon type="setting" /><span>人员管理</span></span>}>*/}
                            {/*<Menu.Item key="19">销售顾问</Menu.Item>*/}
                            {/*<Menu.Item key="20">服务顾问</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub10" title={<span><Icon type="setting" /><span>权限管理</span></span>}>*/}
                            {/*<Menu.Item key="21">大区</Menu.Item>*/}
                            {/*<Menu.Item key="22">经销商集团</Menu.Item>*/}
                            {/*<Menu.Item key="23">4S店管理</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        <SubMenu key="sub1" title={<span><Icon type="pie-chart" /><span>概览</span></span>}>
                            <Menu.Item key="1"><Link to="/userlist">新增用户</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/grouplist">新增回复</Link></Menu.Item>
                            <Menu.Item key="3">场景数据</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>消息</span></span>}>
                            <Menu.Item key="4">全部消息</Menu.Item>
                            <Menu.Item key="5">群发消息</Menu.Item>
                            <Menu.Item key="6">模板消息</Menu.Item>
                            <Menu.Item key="7">消息收藏</Menu.Item>
                            <Menu.Item key="8">消息搜索</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="desktop" /><span>文章管理</span></span>}>
                            <Menu.Item key="9">用户列表</Menu.Item>
                            <Menu.Item key="10">用户互动明细</Menu.Item>
                            <Menu.Item key="11">用户标签管理</Menu.Item>
                            <Menu.Item key="12">用户分组管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>数据</span></span>}>
                            <Menu.Item key="13">用户数据</Menu.Item>
                            <Menu.Item key="14">消息数据</Menu.Item>
                            <Menu.Item key="15">内容数据</Menu.Item>
                            <Menu.Item key="16">场景数据</Menu.Item>
                            <Menu.Item key="17">应用数据</Menu.Item>
                            <Menu.Item key="18">交互数据</Menu.Item>
                            <Menu.Item key="19">转化数据</Menu.Item>
                            <Menu.Item key="20">高级模式</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="file" /><span>内容</span></span>}>
                            <Menu.Item key="21">素材库</Menu.Item>
                            <Menu.Item key="22">微页面</Menu.Item>
                            <Menu.Item key="23">文章</Menu.Item>
                            <Menu.Item key="24">H5</Menu.Item>
                            <Menu.Item key="25">二维码</Menu.Item>
                            <Menu.Item key="26">表单</Menu.Item>
                            <Menu.Item key="27">投票</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="area-chart" /><span>高级</span></span>}>
                            <Menu.Item key="28">微信互动</Menu.Item>
                            <Menu.Item key="29">会员系统</Menu.Item>
                            <Menu.Item key="30">大屏幕</Menu.Item>
                            <Menu.Item key="31">摇一摇周边</Menu.Item>
                            <Menu.Item key="32">卡券管理</Menu.Item>
                            <Menu.Item key="33">门店管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" title={<span><Icon type="cloud" /><span>应用</span></span>}>
                            <Menu.Item key="34">我的应用</Menu.Item>
                            <Menu.Item key="35">应用商店</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8" title={<span><Icon type="code" /><span>设置</span></span>}>
                            <Menu.Item key="36">公众号设置</Menu.Item>
                            <Menu.Item key="37">团队协作</Menu.Item>
                            <Menu.Item key="38">账单管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </Sider>
        );
    }
}

ThisMenu.__ANT_LAYOUT_SIDER = true;

export default ThisMenu;
