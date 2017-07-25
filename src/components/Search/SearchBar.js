import React from 'react'
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import './SearchBar.css'
// import moment from 'moment';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    disabledDateTime = (current) => {
        return current && current.valueOf() > Date.now()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };

        // To generate mock Form.Item
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={5} key={i}>
                    <FormItem {...formItemLayout} label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`)(
                            <Input placeholder="placeholder" />
                        )}
                    </FormItem>
                </Col>
            );
        }

        const expand = this.state.expand;
        const shownCount = expand ? children.length : 6;
        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={40}>
                    {/*{children.slice(0, shownCount)}*/}
                    <Col span={4} key={`1`}>
                        <FormItem {...formItemLayout} label={`用户姓名`}>
                            <Input placeholder="用户姓名" />
                        </FormItem>
                    </Col>
                    <Col span={4} key={`2`}>
                        <FormItem {...formItemLayout} label={`用户姓名`}>
                            <Input placeholder="用户姓名" />
                        </FormItem>
                    </Col>
                    <Col span={4} key={`3`}>
                        <FormItem {...formItemLayout} label={`用户分组`}>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </FormItem>
                    </Col>
                    <Col span={4} key={`4`}>
                        <FormItem {...formItemLayout} label={`用户身份`}>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </FormItem>
                    </Col>
                    <Col span={4} key={`5`}>
                        <FormItem {...formItemLayout} label={`选择时间`}>
                            <RangePicker disabledDate={this.disabledDateTime} format="YYYY-MM-DD" />
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const SearchBar = Form.create()(AdvancedSearchForm);

export default SearchBar;