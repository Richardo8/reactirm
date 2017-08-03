import React from 'react';
import { Table } from 'antd';
import UserListLayer from "../../layer/userLayer/userLIstLayer";


const columns = [{
    title: 'UID',
    dataIndex: 'uid',
}, {
    title: '昵称',
    dataIndex: 'nick',
}, {
    title: '姓名',
    dataIndex: 'name',
}, {
    title: '性别',
    dataIndex: 'sex',
}, {
    title: '用户手机号',
    dataIndex: 'phone',
}, {
    title: '生日',
    dataIndex: 'birthday',
}, {
    title: '所在地',
    dataIndex: 'address',
}, {
    title: '最近访问时间',
    dataIndex: 'latest',
}, {
    title: '用户身份',
    dataIndex: 'identity',
}, {
    title: '操作',
    render: (data) => (
        <span>
            <UserListLayer Uid={data.id}/>
        </span>
    ),
}];

class UserList extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        data: []
    };
    componentWillMount(){
        this.getData();
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    async getData() {
        let data = await fetch('/userlist');
        let dataJson = await data.json();
        this.setState({ data: dataJson});
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(this.state.data.length).keys()],  // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return (
            <Table rowKey={data => data.uid} rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
        );
    }
}

export default UserList;

