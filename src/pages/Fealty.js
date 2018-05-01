/**
 * @name 百行孝居先
 */
import React, {Component} from 'react';
import moment from 'moment';
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
    TextareaItem
} from 'antd-mobile';

const Item = List.Item

export default class Fealty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount() {}

    render() {

        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" / >]}>青春婚恋须知</NavBar>
            <div className="content">
                
            </div>
        </div>

    }
}