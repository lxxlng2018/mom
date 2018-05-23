import React,{Component} from 'react';
import {
    NavBar,
    Icon,
    Modal,
    Toast
} from 'antd-mobile';
import UserService from '../service/UserService'
const md5 = require('md5')
const prompt = Modal.prompt
/**
 * @name 头部
 */


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleBack = ()=>{
        if(window.history.length>3){
            window.location.href="#/home"
        }else{
            window.history.back()
        }
    }

    handleLogout = ()=>{
        UserService.logout()
    }

    handlePassword = ()=>{
        let m = prompt('修改密码', '请输入新密码',[
            {
                text:'确认修改',
                onPress:(res)=>{
                    UserService.updateUserInfo({
                        login_pwd:md5(res)
                    }).then(res=>{
                        Toast.success('修改成功')
                    })
                }
            },
            {
                text:'取消',
                onPress:()=>m.close()
            }
        ])
    }
    
    render(){
        let {back,title,logout} = this.props
        return (
             <NavBar mode="dark" 
                leftContent={back?[< Icon onClick={this.handleBack} key = "1" type = "left" />]:[]}
                rightContent={logout?[<a key={1} onClick={this.handlePassword} style={{padding:'0 10px',fontSize:'14px'}}>修改密码</a>,<a key = {2} onClick={this.handleLogout}>退出</a>]:[]}
            >{title}</NavBar>
        )
           
    }
}