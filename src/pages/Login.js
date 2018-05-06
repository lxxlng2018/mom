import React, { Component } from 'react';
import moment from 'moment';
import menus from '../config/menu';
import UserService from '../service//UserService'
import {
    Flex,
    WhiteSpace,
    NavBar,
    Icon,
    Carousel,
    Grid,
    List,
    WingBlank,
    InputItem,
    Button,
    Toast
} from 'antd-mobile';

const Item = List.Item

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'cb1',
            password: '123456'
        }
    }

    componentDidMount() {

    }

    handleUserName = username => {
        this.setState({
            username
        })
    }

    handlePassWord = password => {
        this.setState({
            password
        })
    }

    handleLogin = () => {
        let { username, password } = this.state
        if (!username || !password) {
            return Toast.fail('请输入账号密码')
        }
        UserService
            .login({
                username,
                password
            })
            .then(res => {
                localStorage.setItem('token', res.info)
                window.location.hash = 'home'
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        return <div className="home">
            <NavBar
                mode="dark"
                rightContent={[< Icon key="0" type="search" style={{ marginRight: '16px' }} />, <Icon key="1" type="ellipsis" />]}>用户登录</NavBar>
            <div className="content">
                <List>
                    <InputItem onChange={(e) => this.handleUserName(e)}>账号</InputItem>
                    <InputItem type="password" onChange={(e) =>this.handlePassWord(e)}>密码</InputItem>
                    <Item><Button type="primary" onClick={this.handleLogin}>登录</Button></Item>
                </List>
            </div>
        </div>

    }
}