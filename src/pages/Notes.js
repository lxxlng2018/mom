/**
 * @name 青春婚恋须知
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

export default class Notes extends Component {
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
                <iframe frameBorder={0} style={{width:'100%',height:800}} src="http://www.669669669.com/wap/index/hlxz"></iframe>
            </div>
        </div>

    }
}