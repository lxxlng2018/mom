import React, {Component} from 'react';
import moment from 'moment';
import menus from '../config/menu';
import base from '../config/base';
import ReactPlayer from 'react-player'
import {
    Flex,
    WhiteSpace,
    NavBar,
    Icon,
    Carousel,
    Grid,
    List,
    WingBlank
} from 'antd-mobile';

const Item = List.Item
const {file_host} = base

export default class PublicVedio extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {

        return <div className="home">
            <NavBar
                mode="dark">出生缺陷视频</NavBar>
            <div className="content">
                <ReactPlayer 
                url='http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/%E5%87%BA%E7%94%9F%E7%BC%BA%E9%99%B7%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91MP4.MP4' 
                width="100%"
                height="100%"
                playing 
                />
            </div>
        </div>

    }
}