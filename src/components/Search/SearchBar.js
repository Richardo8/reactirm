import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd';
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
            // console.log('Received values of form: ', values);
            this.searchResult(values);
        });
        // const result = fetch('/search')
    }

    async searchResult(value){
        const result = await fetch('/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        const resultJson = await result.json();
        this.props.setCurrentContent(resultJson)
        // this.setState({ })
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
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
        };
        const selectTime = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        }

        // To generate mock Form.Item
        // const children = [];
        // for (let i = 0; i < 10; i++) {
        //     children.push(
        //         <Col span={5} key={i}>
        //             <FormItem {...formItemLayout} label={`Field ${i}`}>
        //                 {getFieldDecorator(`field-${i}`)(
        //                     <Input placeholder="placeholder" />
        //                 )}
        //             </FormItem>
        //         </Col>
        //     );
        // }

        // const expand = this.state.expand;
        // const shownCount = expand ? children.length : 6;
        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={0}>
                    {/*{children.slice(0, shownCount)}*/}
                    <Col span={4} key={`1`}>
                        <FormItem {...formItemLayout} label={`用户姓名`}>
                            {getFieldDecorator('name')(
                                <Input placeholder="用户姓名" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4} key={`2`}>
                        <FormItem {...formItemLayout} label={`用户手机号`}>
                            {getFieldDecorator('phone')(
                                <Input placeholder="用户手机号" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4} key={`3`}>
                        <FormItem {...formItemLayout} label={`用户分组`}>
                            {getFieldDecorator('group')(
                                <select style={{width: '100%'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={3} key={`4`}>
                        <FormItem {...formItemLayout} label={`用户身份`}>
                            {getFieldDecorator('identity')(
                                <select style={{width: '100%'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5} key={`5`}>
                        <FormItem {...selectTime} label={`最近访问时间`}>
                            {getFieldDecorator('latest')(
                                <RangePicker disabledDate={this.disabledDateTime} format="YYYY-MM-DD" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={3} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
                {/*<Row>*/}
                    {/*<Col span={24} style={{ textAlign: 'right' }}>*/}
                        {/*<Button type="primary" htmlType="submit">Search</Button>*/}
                        {/*<Button style={{ marginLeft: 8 }} onClick={this.handleReset}>*/}
                            {/*Clear*/}
                        {/*</Button>*/}
                    {/*</Col>*/}
                {/*</Row>*/}
            </Form>
        );
    }
}

const SearchBar = Form.create()(AdvancedSearchForm);

export default SearchBar;