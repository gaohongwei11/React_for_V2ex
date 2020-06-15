import React from 'react';
import { Router, Route, Redirect, IndexRoute, BrowserRouter, hashHistory } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';


import index from '../pages/index';
import List from '../pages/list';
import Detail from '../pages/detail';

const route = (
    <BrowserRouter>
        <Route path="/" exact component={index} />
        <Route path="/list" component={List}></Route>
        <Route path="/detail" component={Detail}></Route>
    </BrowserRouter>
);

export default route;