import React, { Component } from 'react'
import './xiumi-ue-v5.css'
const {UE} = window

class Ueditor extends Component {
    state = {}

    componentDidMount(){
        const baseUrl = `/JS/plugins/ueditor1_4_3/dialogs`
        this.initXiuMi(baseUrl)
        this.init135(baseUrl)
        this.initEditor()
    }

    componentWillUnmount(){
        UE.delEditor(this.props.id);
    }

    initEditor(){
        const id = this.props.id;
        const ueEditor = UE.getEditor(this.props.id, {
            initialFrameWidth: 737,
            initialFrameHeight: 546,
            initialStyle:'p{line-height:1.5em; font-size: 14px; -webkit-margin-before: 0em; -webkit-margin-after: 0em;-webkit-margin-start: 0px;-webkit-margin-end: 0px} td{text-align:center;}',
            allHtmlEnabled: true
        });
        const self = this;
        ueEditor.ready((ueditor) => {
            if (!ueditor) {
                UE.delEditor(id);
                self.initEditor();
            }
            UE.dom.domUtils.setStyles(ueEditor.body, {
                'font-family' : "'微软雅黑'", 'font-size' : '14px', 'line-height' : '1.5', 'margin' : '5px 100px 5px 100px'
            });
        })
    }

    initXiuMi(baseURL) {
        UE.registerUI('dialog', (editor, uiName) => {
            return new UE.ui.Button({
                name: 'xiumi-connect',
                title: '秀米',
                onclick() {
                    const dialog = new UE.ui.Dialog({
                        iframeUrl: `${baseURL}/xiumi/xiumi-ue-dialog-v5.html`,
                        editor,
                        name: 'xiumi-connect',
                        title: '秀米图文消息助手',
                        cssRules: `width: ${window.innerWidth - 60}px; height: ${window.innerHeight - 60}px;`,
                    });

                    dialog.render();
                    dialog.open();
                },
            });
        });
    }

    init135(baseURL){
        UE.registerUI('135editor',function(editor,uiName){
            var dialog = new UE.ui.Dialog({
                iframeUrl: `${baseURL}/135/135EditorDialogPage.html`,
                editor:editor,
                name:uiName,
                title:"135编辑器",
                cssRules: `width: ${window.innerWidth - 60}px; height: ${window.innerHeight - 60}px;`,
            })
            // cssRules该属性是控制对话框宽高的
            // dialog.fullscreen = false; // 该属性设置是否全屏显示
            dialog.draggable = true; // 设置是否可拖拽
            var btn = new UE.ui.Button({
                name:'btn-dialog-' + uiName,
                className:'edui-for-135editor',
                title:'135编辑器',
                onclick:function () {
                    dialog.render();
                    dialog.open();
                }
            });
            return btn;
        },undefined);
    }

    render(){
        return (
            <div id={this.props.id} name="content" type="text/plain">

            </div>
        )
    }
}

export default Ueditor