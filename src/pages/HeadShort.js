/**
 * @name 我的头像
 */
import React, { Component } from 'react';
import moment from 'moment';
import menu2 from '../config/menu2'
import base from '../config/base'
import $ from 'jquery'
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
    InputItem,
    Modal,
    Toast
} from 'antd-mobile';
import UserService from '../service/UserService'

const { host } = base

const Item = List.Item


var Upload = require('rc-upload');

export default class HeadShort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu2,
            list: [],
            firendsNumb: 0,
            userinfo: {},
            my_alipay: '',
            modal_xj: false,
            shareModal: false
        }
    }

    componentDidMount() {
        this.handleGetData()
    }

    handleGetData = () => {
    }

    render() {
        return <div key={1} className="home">
            <NavBar
                mode="dark"
                leftContent={[< Icon onClick={
                    this.handleBack
                }
                    key="1" type="left" />]}>我的头像</NavBar>
            <div className="content">
                <div>
                    <img src="" />
                </div>
                <Flex style={{
                    alignItems:'center'
                }}>
                    <Flex.Item style={{ flex: 1, padding: '10px' }}>
                        <Button inline type="primary">上传头像 </Button>
                    </Flex.Item>
                    <Flex.Item style={{ flex: 1, padding: '10px' }}>
                        <Button inline type="primary" style={{ flex: 1, padding: '10px' }}>上传头像</Button>
                    </Flex.Item>
                </Flex>
            </div>
        </div>

    }
}