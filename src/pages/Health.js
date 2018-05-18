/**
 * @name 健康送爸妈
 */
import React, {Component} from 'react';
import moment from 'moment';
import NativeShare from 'nativeshare'
import base from '../config/base'
import Header from '../components/Header'
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
var nativeShare = new NativeShare({
     syncDescToTag: true,
  	syncIconToTag: true,
  	syncTitleToTag: true,
})
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
        let {match} = this.props
        let {parmas} = match
        this.handleGetData()
        UserService.getUserInfo().then(userinfo=>{
            this.setState({
                userinfo
            })
        })
    }

    handleGetData = ()=>{
        HealthService.getHealth().then(res=>{
            const {result} = res
            this.setState({
                list:result||[]
            })
        })
    }

    handleShare =(title,id)=>{
        let {userinfo} = this.state
        nativeShare.setShareData({
            icon: `${host}${userinfo.my_headphoto}`,
            link: `${host}/wap/index/app#/read/${id}`,
            title: `请您关注今天的中老年疾病防治专家提示`,
            desc: title,
            from: '健康传播',
        })
        
        // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
        try {
            nativeShare.call()
            // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
            // 类似的命令下面有介绍
        } catch(err) {
        // 如果不支持，你可以在这里做降级处理
            Toast.fail('分享暂时只支持uc浏览器和qq浏览器')
        }
    }

    handleBack = ()=>{
        window.location.href = '#/home'
    }

    handleRead = id=>{
        if(id){
            window.location.hash = `read/${id}`
        }
    }

    render() {
        return <div className="home">
            <Header
                title="健康送爸妈"
                back
                logout
            />
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
                                      <img src={this.state.userinfo && this.state.userinfo.my_headphoto && host+this.state.userinfo.my_headphoto || "./icons/1.png"} alt=""/>
                                    </div>
                                  <div className="tips">请您关注今天的中老年疾病防治专家提示</div>
                                  <div className="share-btn"><a onClick={()=>this.handleShare(item.title,item.id)} className="am-button am-button-primary am-button-small am-button-inline">送爸妈</a></div>
                                </div>
                              <div onClick={()=>this.handleRead(item.id)} className="buttom-title">今日提示：{item.title} </div>
                            </div>
                        })
                    }
                </List>
            </div>
        </div>

    }
}