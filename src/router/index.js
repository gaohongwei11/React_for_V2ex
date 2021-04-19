import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import Layout from "@/layout/layout";

const home = asyncComponent(() => import("@/pages/home/home"));
const friend = asyncComponent(() => import("@/pages/friend/friend"));
const koubei = asyncComponent(() => import("@/pages/koubei/koubei"));
const life = asyncComponent(() => import("@/pages/life/life"));
const my = asyncComponent(() => import("@/pages/my/my"));

const routes = [{
  path:"/home",
  component: home,
  tab: true,
},{
  path:"/friend",
  component: friend,
  tab: false,
},{
  path:"/koubei",
  component: koubei,
  tab: true,
},{
  path:"/life",
  component: life,
  tab: true,
},{
  path:"/my",
  component: my,
  tab: true,
}]
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
class RouteConfig extends Component{
  render(){
    let mainRoutes = routes.filter(item => item.tab)
    let otherRoutes = routes.filter(item => !item.tab)
    console.log(mainRoutes)
    console.log(otherRoutes)
    return(
      <BrowserRouter>
        <Switch>
          <Layout>
            {
              routes.map(route => {
                return <Route key={route.path} isTab={route.tab} path= {route.path} exact component={route.component} />
              })
            }
          </Layout>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouteConfig
