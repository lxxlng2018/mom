/**
 * @name 我是传播人
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

export default class Spread extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu2
        }
    }

    componentDidMount() { }

    render() {
        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key="1" type="ellipsis" />]}>我的交友名片</NavBar>
            <div className="content">
                <Grid data={this.state.menu2} columnNum={3} hasLine={false} activeStyle={false} />
                <Flex className="base-center">
                    <div style={{ flex: 2 }}>我的传播朋友</div>
                    <div style={{ flex: 1 }}>共21位</div>
                </Flex>
            </div>
        </div>

    }
}