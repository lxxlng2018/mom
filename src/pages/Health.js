/**
 * @name 健康送爸妈
 */
import React, {Component} from 'react';
import moment from 'moment';
import NativeShare from 'nativeshare'
import base from '../config/base'
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
    Toast
} from 'antd-mobile';
import HealthService from '../service/HealthService'
import UserService from '../service/UserService'

const Item = List.Item
var nativeShare = new NativeShare()
let host = base.host

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            userinfo:null
        }
    }

    componentDidMount() {
        this.handleGetData()
        UserService.getUserInfo().then(userinfo=>{
            this.setState({
                userinfo
            })
        })
    }

    handleGetData = ()=>{
        HealthService.getList().then(res=>{
            const {result} = res
            this.setState({
                list:result||[]
            })
        })
    }

    handleShare = ()=>{
        try {
            nativeShare.call()
        } catch (error) {
           Toast.fail('暂不支持分享功能')
        }
    }

    handleBack = ()=>{
        window.location.href = '#/home'
    }

    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" />]}>健康送爸妈</NavBar>
            <div className="content">
                <div className="top-notice">
                    温馨提示：百行孝居先。健康，是送给爸妈的最好礼物。无论您多忙，都要在周三、周六将“中老年疾病防治专家提示”转发分享给爸妈，作为最真情的问候，即使爸妈不会手机或您在爸妈身边，也要口头告诉。
                </div>
                <List>
                    {
                        this.state.list.map(item=>{
                          return <div key={item.id} className="doctor-notice">
                              <div className="time">{item.add_time}</div>
                                <div className="doctor-notice-content">
                                    <div className="doc-thumb">
                                        <img src={this.state.userinfo && host+this.state.userinfo.my_headphoto || "./icons/1.png"} alt=""/>
                                    </div>
                                  <div className="tips">请您关注今天的中老年疾病防治专家提示</div>
                                  <div className="share-btn"><a onClick={this.handleShare} className="am-button am-button-primary am-button-small am-button-inline">送爸妈</a></div>
                                </div>
                              <div className="buttom-title">今日提示：{item.title} </div>
                            </div>
                        })
                    }
                </List>
            </div>
        </div>

    }
}