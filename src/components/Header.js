import React,{Component} from 'react';
import {
    NavBar,
    Icon
} from 'antd-mobile';
import UserService from '../service/UserService'
/**
 * @name 头部
 */


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleBack = ()=>{
        window.history.back()
    }

    handleLogout = ()=>{
        UserService.logout()
    }
    
    render(){
        let {back,title,logout} = this.props
        return (
             <NavBar mode="dark" 
                leftContent={back?[< Icon onClick={this.handleBack} key = "1" type = "left" />]:[]}
                rightContent={logout?[<a key = "1" onClick={this.handleLogout}>退出</a>]:[]}
            >{title}</NavBar>
        )
           
    }
}