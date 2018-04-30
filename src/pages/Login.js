import React, {Component} from 'react';
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
    Button
} from 'antd-mobile';

const Item = List.Item

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            menus: menus
        }
    }

    componentDidMount() {
        UserService
            .login()
            .then(res => {
                console.log(res);
                // this.setState({     list: })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleUserName = e=>{
        console.log(e)
    }

    render() {

        return <div className="home">
            <NavBar
                mode="dark"
                rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '16px' }}/>, <Icon key="1" type="ellipsis" / >]}>用户登录</NavBar>
            <div className="content">
                <List>
                    <InputItem onChange={(e)=>{this.handleUserName(e)}}>账号</InputItem>
                    <InputItem>密码</InputItem>
                    <Item><Button>登录</Button></Item>
                </List>
            </div>
        </div>

    }
}