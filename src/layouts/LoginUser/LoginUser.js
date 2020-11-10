import React,{Component} from 'react';
import './LoginUser.less'
import { message } from 'antd';
export default class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password:""
        }
    }
    changePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    changeUserName = (e)=>{
        this.setState({userName: e.target.value})
    }
    loginMethod = ()=>{
        if (this.state.userName.trim()!==""&&this.state.password.trim()!=="") {
            message.success('登录成功');
            this.props.history.push({pathname:"/home"})
        }else {
            message.error('用户名或密码不能为空');
        }
    }
    render() {
        return (
            <div id="LoginLayout">
                <input type="text" value={this.state.userName} onChange={this.changeUserName} placeholder="username" />
                <input type="text" value={this.state.password} onChange={this.changePassword} placeholder="password" />
                <button type="button" onClick={this.loginMethod}>login</button>
            </div>
        )
    }
}