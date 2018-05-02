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

    componentDidMount() {
        let {params} = this.props.match
        let {id} = params
        this.setState({id})
    }

    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon key = "1" type = "left" />]}></NavBar>
            <div className="content">
                asdasdasd {this.state.id}
            </div>
        </div>

    }
}