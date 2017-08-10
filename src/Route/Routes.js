import React from 'react'
import { Route } from 'react-router-dom'
import Index from "../components/Index/Index";
import UserListPage from "../components/Page/UserListPage";
import GroupListPage from "../components/Page/GroupListPage";
import PublishComponent from "../components/Content/Article/Publish";
import ArticlePage from "../components/Page/ArticlePage";

export default class Routes extends React.Component {
    render(){
        return (
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route path="/userlist" component={UserListPage}/>
                    <Route path="/search" component={UserListPage}/>
                    <Route path="/grouplist" component={GroupListPage}/>
                    <Route exact path="/article" component={ArticlePage}/>
                    <Route exact path="/article/publish" component={PublishComponent}/>
                    {/*{routes.map((route, i) => (*/}
                        {/*<RouteWithSubRoutes key={i} {...route}/>*/}
                    {/*))}*/}
                </div>

        )
    }
}