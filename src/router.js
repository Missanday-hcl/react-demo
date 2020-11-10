import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefalutLayout/DefalutLayout';
import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={LoginUser}  exact /> 
                        {/* exact表示是否精准匹配 不加的话 就是广泛匹配，那么只要出现了‘/’ 无论你后面的路由怎么变 是‘/login’ 还是’/home’， '/'指向的那个组件都会出现 */}
                        <Route path="/home" component={DefaultLayout} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}