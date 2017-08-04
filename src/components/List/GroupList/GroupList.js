import React from 'react';
import { Table } from 'antd';
import '../tableCSS.css'

const columns = [{
    title: '分组名称',
    width: '34%',
    className: 'column-center',
    dataIndex: 'groupname',
}, {
    title: '用户数量',
    width: '33%',
    className: 'column-center',
    dataIndex: 'usernum',
}, {
    title: '操作',
    width: '33%',
    className: 'column-center',
    render: () => (
        <span>
            <a href="/userlist">编辑</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/userlist">删除</a>
        </span>
    ),
}];

class GroupList extends React.Component {
    state = {
        data: []
    };
    componentWillMount(){
        this.getData();
    }

    async getData() {
        let data = await fetch('/groupData/GroupData.json');
        let dataJson = await data.json();
        this.setState({ data: dataJson.data});
    }

    render() {
        return (
            <Table rowKey='key' columns={columns} dataSource={this.state.data} scroll={{y: '100%'}}/>
        );
    }
}

export default GroupList;

