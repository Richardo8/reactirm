import React, { Component } from 'react'
import { Form, Input, Icon, Cascader, Button, Upload, message } from 'antd';
import './publish.css'
import Ueditor from "../../Editor/Ueditor";
// import '../../plugins/ueditor1_4_3/ueditor.all2.min'
// import '../../plugins/ueditor1_4_3/ueditor.config'
// import '../../plugins/ueditor1_4_3/lang/zh-cn/zh-cn'
// require('../../plugins/ueditor1_4_3/ueditor.config');
// require('../../plugins/ueditor1_4_3/ueditor.all2.min');
// require('../../plugins/ueditor1_4_3/lang/zh-cn/zh-cn');

const { TextArea } = Input
const FormItem = Form.Item;

const residences = [{
    value: 'a',
    label: 'a',
}, {
    value: 'b',
    label: 'b',
}, {
    value: 'c',
    label: 'c',
}, {
    value: 'd',
    label: 'd',
}, {
    value: 'e',
    label: 'e',
}];

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}


class Publish extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    handleChange = (info) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const imageUrl = this.state.imageUrl;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (
            <Form className="FormMaxWidth" onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="文章标题"
                    hasFeedback
                >
                    {getFieldDecorator('文章标题', {
                        rules: [{
                            required: true, message: '请输入文章标题!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="频道栏目"
                >
                    {getFieldDecorator('频道栏目', {
                        initialValue: ['a'],
                        rules: [{ type: 'array', required: true, message: '请选择频道栏目！' }],
                    })(
                        <Cascader options={residences} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="作者来源"
                    hasFeedback
                >
                    {getFieldDecorator('作者来源', {
                        rules: [{
                            required: true, message: '请输入作者来源!',
                        }],
                    })(
                        <Input type="text"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="封面图上传"
                    hasFeedback
                >
                    {getFieldDecorator('封面图上传', {
                        rules: [{
                            required: true, message: '请上传封面图!',
                        }],
                    })(
                        <Upload
                            className="avatar-uploader"
                            name="avatar"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {
                                imageUrl ?
                                    <img src={imageUrl} alt="" className="avatar" /> :
                                    <Icon type="plus" className="avatar-uploader-trigger" />
                            }
                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="摘要"
                    hasFeedback
                >
                    {getFieldDecorator('摘要', {
                        rules: [{
                            required: true, message: '请输入摘要!',
                        }],
                    })(
                        <TextArea rows={4} onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="正文"
                    hasFeedback
                >
                    {getFieldDecorator('正文', {
                        rules: [{
                            required: true, message: '请输入正文!',
                        }],
                    })(
                        <Ueditor id="content" />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">发布</Button>
                </FormItem>
            </Form>
        );
    }
}

const PublishComponent = Form.create()(Publish);

export default PublishComponent

