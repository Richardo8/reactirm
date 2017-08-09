import React from 'react'
import { Route } from 'react-router-dom'
import Index from "../components/Index/Index";
import UserListPage from "../components/Page/UserListPage";
import GroupListPage from "../components/Page/GroupListPage";
import PublishComponent from "../components/Content/Article/Publish";
import ArticlePage from "../components/Page/ArticlePage";

const routes = [
    {
        path: '/',
        component: Index,
        exact: true
    },
    { path: '/userlist',
        component: UserListPage
    },
    { path: '/search',
        component: UserListPage
    },
    { path: '/grouplist',
        component: GroupListPage
    },
    { path: '/article',
        component: ArticlePage,
        routes: [
            { path: '/article/publish',
                component: PublishComponent
            },
        ]
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} exact={route.exact} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)

export default class Routes extends React.Component {
    render(){
        console.log(routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        )))
        return (
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route path="/userlist" component={UserListPage}/>
                    <Route path="/search" component={UserListPage}/>
                    <Route path="/grouplist" component={GroupListPage}/>
                    <Route exact path="/article" component={ArticlePage}>
                    </Route>
                    <Route exact path="/article/publish" component={PublishComponent}/>
                    {/*{routes.map((route, i) => (*/}
                        {/*<RouteWithSubRoutes key={i} {...route}/>*/}
                    {/*))}*/}
                </div>

        )
    }
}