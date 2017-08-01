import React from 'react';

import { Modal, Select } from 'antd';

const Option = Select.Option;

export default class UserListLayer extends React.Component {
    state = {
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <a onClick={this.showModal}>分组</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href={`/userlist/${this.props.Uid}`}>分组详细</a>
                <Modal title="Title"
                       visible={visible}
                       onOk={this.handleOk}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <p>添加分组</p>
                    <Select defaultValue="1" style={{ width: 120 }}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                    </Select>
                </Modal>
            </div>
        );
    }
}
