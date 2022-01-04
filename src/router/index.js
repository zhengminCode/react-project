import React from 'react'
import {routeConfig} from './config' 
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from '../pages/home'


 function  MyRouter(props){
    return (
        <Switch>
       {
          routeConfig.map(route=><Route path={route.path} component={route.component} key={route.path} exact={route.exact}/>)
       }
        </Switch>
    )
}
export default MyRouter;