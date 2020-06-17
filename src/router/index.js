import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home from "@/pages/home/home";
const detail = asyncComponent(() => import("@/pages/detail"));
const list = asyncComponent(() => import("@/pages/list"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
class RouteConfig extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/list" component={list} />
          <Route path="/detail" component={detail} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouteConfig
