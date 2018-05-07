import React, {Component} from 'react';
import moment from 'moment';
import menus from '../config/menu';
import base from '../config/base';
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
    Button
} from 'antd-mobile';

const Item = List.Item
const {file_host} = base

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            userInfo:null,
            menus:menus
        }
    }

    componentDidMount() {
        UserService.getUserInfo().then((info)=>{
            this.setState({
                userInfo:info
            })
            return UserService.getEveryDayNotice().then(res=>{
                this.setState({
                    list:res.data.result
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    handleUrl(url){
        if(url){
            window.location.hash = url
        }
    }

    handleRead = id=>{
        if(id){
            window.location.hash = `read/${id}`
        }
    }

    render() {

        return <div className="home">
            <Flex className="top_index_header">
                <div className="logo">
                    <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/logo/1525666485856.jpg" alt=""/>
                </div>
                <div className="time">
                    {moment().format('YYYY年MM月DD日')}
                </div>
                <div className="buttons">
                    <Button onClick={()=>this.handleUrl('regist')} inline size="small">报名</Button>
                    <Button onClick={()=>this.handleUrl('login')} inline size="small">登录</Button>
                </div>
            </Flex>
            <div className="home-menu">
                <Flex wrap="wrap">
                    <a href="">每日健康提醒</a>
                    <a href="">百行孝居先</a>
                    <a href="">我的治病经验</a>
                    <a href="">出生缺陷预防</a>
                    <a href="">健康送爸妈</a>
                    <a href="">专家孕哺讲座</a>
                    <a href="">青春婚恋须知</a>
                    <a href="">交友大世界</a>
                    <a href="">疑难杂症120</a>
                </Flex>
            </div>
            <Carousel className="home-carouel">
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图一.jpg" alt=""/>
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图二.jpg" alt=""/>
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图三.jpg" alt=""/>
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图五.png" alt=""/>
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图六.png" alt=""/>
            </Carousel>
            <div className="content">
                <div>
                    <List>
                        {
                            this.state.list.map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} extra={item.add_time}>{item.title}</Item>)
                        }
                    </List>
                </div>
            </div>
        </div>

    }
}