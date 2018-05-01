/**
 * @name 文章内容
 */
import React, {Component} from 'react';
import moment from 'moment';
import {createForm} from 'rc-form'
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

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" />]}>健康送爸妈</NavBar>
            <div className="content">
            </div>
        </div>

    }
}