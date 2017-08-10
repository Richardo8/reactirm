import React, { Component } from 'react'
const {UE} = window

class Ueditor extends Component {
    state = {}

    componentDidMount(){
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

    render(){
        return (
            <div id={this.props.id} name="content" type="text/plain">

            </div>
        )
    }
}

export default Ueditor