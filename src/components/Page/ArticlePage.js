import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from "antd/es/button/button";

class ArticlePage extends Component {
    render(){
        return (
            <div>
                <Button type="primary"><Link to="/article/publish">发布文章</Link></Button>

            </div>
        )
    }
}

export default ArticlePage