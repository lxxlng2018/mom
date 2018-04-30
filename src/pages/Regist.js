/**
 * @name 用户注册
 */
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
    InputItem
} from 'antd-mobile';

const Item = List.Item

export default class Regist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            menus:menus
        }
    }

    componentDidMount() {
    }

    render() {

        return <div className="home">
            <NavBar
                mode="dark"
                rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '16px' }}/>, <Icon key="1" type="ellipsis" / >]}>用户注册</NavBar>
            <div className="content">
                <div>
                    <img src="/banner/2F219399-ECE0-4749-97BB-6172B84ED580.png" alt=""/>
                </div>
                <List>
                    <InputItem
                        type="phone"
                        placeholder="input your phone"
                    >所在省（市）</InputItem>
                </List>
            </div>
        </div>

    }
}