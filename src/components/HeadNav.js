import React,{Component} from 'react';
import {Menu} from 'antd'
import './HeadNav.less'
import { Link } from 'react-router-dom';

export default class HeadNav extends Component {
    state= {
        current: 'home'
    }
    handleClick= (e)=>{
        console.log(e)
        this.setState({current:e.key})
    }
    render() {
        return (
            <div id="HeadNav">
                <div className="container">
                    <div className="headBox">
                        <div className="logo">
                            <img src="../../public/logo192.png" alt="暂无数据" />
                        </div>
                        <div className="linkBox">
                            <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal">
                                <Menu.Item key="mine">
                                    <Link to='/home/mine'>我的</Link>
                                </Menu.Item>
                                <Menu.Item key="file">
                                    <Link to='/home/file'>文件</Link>
                                </Menu.Item>
                                <Menu.Item key="share">
                                    <Link to='/home/Share'>共享</Link>
                                </Menu.Item>
                                <Menu.Item key="home">
                                    <Link to='/home/'>首页</Link>
                                </Menu.Item>
                                <Menu.Item key="login">
                                    <Link to='/'>登录/注册</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}