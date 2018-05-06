/**
 * @name 我要传播
 */
import React, { Component } from 'react';
import moment from 'moment';
import menu2 from '../config/menu2'
import { createForm } from 'rc-form'
import {
    Flex,
    WhiteSpace,
    NavBar,
    Icon,
    Carousel,
    Grid,
    List,
    WingBlank,
    Tabs,
    SearchBar,
    Button,
    Popover,
    TextareaItem,
    Tag,
    Picker,
    InputItem
} from 'antd-mobile';

const Item = List.Item

export default class Share extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() { }

    handleBack = () => {
        window.location.hash = 'spread'
    }

    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key="1" type="left" />]}>我要传播</NavBar>
            <div className="content" style={{padding:20}}>
                <div className="social-share" data-disabled="google" data-description="Share.js - 一键分享到微博，QQ空间，腾讯微博，人人，豆瓣"></div>
            </div>
        </div>

    }
}