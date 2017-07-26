import React from 'react';
import { Table } from 'antd';

const columns = [{
    title: '分组名称',
    dataIndex: 'groupname',
}, {
    title: '用户数量',
    dataIndex: 'usernum',
}, {
    title: '操作',
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
        let data = await fetch('/groupData/GroupData.json');
        let dataJson = await data.json();
        console.log(dataJson.data);
        this.setState({ data: dataJson.data});
    }

    render() {
        const { selectedRowKeys, data } = this.state;
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
        let index = [];
        data.map((value, index) => {
            console.log(index);
            this.index.push(index)
        })
        console.log(index);
        return (
            <Table rowKey={index} rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
        );
    }
}

export default GroupList;

