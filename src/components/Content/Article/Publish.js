import React, { Component } from 'react'
import { Form, Input, Icon, Cascader, Button, Upload, message, Row, Col } from 'antd';
import './publish.css'
import Ueditor from "../../Editor/Ueditor";
import classNames from 'classnames'
const { UE } = window

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
        editorErr: false,
    };
    componentDidMount(){
        // 在组件全部绑定之后，添加监听器，监听编辑器输入事件，获取到数据之后直接使用setFieldsValue方法设置输入框内的值，不要使用value，会失效
        UE.getEditor('content').addListener("contentChange", () => {
            let editorContent = UE.getEditor('content').getContent()
            console.log(editorContent)
            this.props.form.setFieldsValue({
                正文: editorContent,
            });
            if(editorContent === ''){
                this.props.form.setFields({
                    正文: {
                        errors: [
                            new Error('请输入正文！')
                        ]
                    }
                })
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const content = UE.getEditor('content').getContent();
        this.props.form.setFieldsValue({
            正文: content,
        });
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({ editorErr: false })
            } else {
                console.log(err)
                if(err.正文 && err.正文.errors){
                    console.log('err')
                    this.setState({ editorErr: true })
                }else {
                    this.setState({ editorErr: false })
                }
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

    handleClick = () => {
        this.props.form.setFieldsValue({
            摘要: '',
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const imageUrl = this.state.imageUrl;
        const editorErr = this.state.editorErr;
        const editorContent = this.state.editorContent
        const editorClass = classNames({
            'editor-icon-height': true,
            'editor-error': editorErr
        })

        // 样式使用方法：labelCol是左侧名称的宽度，wrapperCol是右侧输入框的宽度，xs，sm，xl是根据屏幕宽度设置占块数量来确定宽度
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 15 },
            },
        };
        const formPicLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const formEditorLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
                xl: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
                xl: { span: 21 }
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
                <Row>
                    <Col span={11} offset={1}>
                        <FormItem
                            {...formItemLayout}
                            // label="文章标题"
                            hasFeedback
                        >
                            {getFieldDecorator('文章标题', {
                                rules: [{
                                    required: true, message: '请输入文章标题!',
                                }],
                            })(
                                <Input placeholder="请输入文章标题"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            // label="频道栏目"
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
                            // label="作者来源"
                            hasFeedback
                        >
                            {getFieldDecorator('作者来源', {
                                rules: [{
                                    required: true, message: '请输入作者来源!',
                                }],
                            })(
                                <Input type="text" placeholder="请输入作者来源"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formPicLayout}
                            // label="封面图上传"
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
                            // label="摘要"
                            hasFeedback
                        >
                            {getFieldDecorator('摘要', {
                                rules: [{
                                    required: true, message: '请输入摘要!',
                                }],
                            })(
                                <TextArea rows={4} onBlur={this.handleConfirmBlur} placeholder="请输入摘要"/>
                            )}
                            <Button onClick={this.handleClick}/>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            {...formEditorLayout}
                            // label="正文"
                            hasFeedback
                        >
                            {getFieldDecorator('正文', {
                                rules: [{
                                    required: true, message: '请输入正文!',
                                }],
                            })(
                                    <TextArea onBlur={this.handleConfirmBlur}/>
                            )}
                            <div className={editorClass}>
                                <Ueditor id="content" />
                            </div>
                        </FormItem>
                    </Col>
                </Row>

                {/*<Row>*/}
                    {/*<Col span={12} offset={6}>*/}
                        {/*<Ueditor id="content" />*/}

                    {/*</Col>*/}
                {/*</Row>*/}
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">发布</Button>
                </FormItem>
            </Form>
        );
    }
}

const PublishComponent = Form.create()(Publish);

export default PublishComponent

