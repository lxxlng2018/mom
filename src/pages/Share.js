/**
 * @name 我要传播
 */
import React, { Component } from 'react';
import moment from 'moment';
import menu2 from '../config/menu2'
import { createForm } from 'rc-form'
import NativeShare from 'nativeshare'
import base from '../config/base'
import UserService from '../service/UserService'
import Header from '../components/Header'
import navigator from '../util/navigator'
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

const Item = List.Item
const host = base.host;
var nativeShare = new NativeShare({
    syncDescToTag: true,
  	syncIconToTag: true,
  	syncTitleToTag: true,
})
export default class Share extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo:null,
            sharecode:null
        }
    }

    componentDidMount() {
        let {match,location} = this.props
        let {params} = match
        if(!params.sharecode){
            UserService.getUserInfo().then(userInfo=>{
                this.setState({userInfo,sharecode:userInfo.my_cbm})
            })
        }
        this.checkBroswer()
     }

    handleBack = () => {
        window.location.hash = 'spread'
    }

    handleShare =(type)=>{
        let { userInfo} = this.state
        nativeShare.setShareData({
            icon: `${host}${userInfo.my_headphoto}`,
            link: `${host}/wap/index/app#/sharep/${this.state.sharecode}`,
            title: '做一个光荣的健康传播志愿者',
            desc: '津贴收入可达数万、数十万',
            from: '健康传播',
        })
        
        // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
        try {
            nativeShare.call(type)
            // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
            // 类似的命令下面有介绍
        } catch(err) {
        // 如果不支持，你可以在这里做降级处理
            Toast.fail('分享暂时只支持uc浏览器和qq浏览器')
        }
    }

    checkBroswer=()=>{
        // alert(navigator.getUserAgent())
    }

    render() {
        return <div className="home">
            <Header
                title="我要传播"
                back
                logout
            />
            {
                this.state.userInfo && <div className="share">
                    <a href="">分享到：</a>
                    <a onClick={()=>this.handleShare('qqFriend')}><span style={{fontSize:20,color:'#00beff'}} className="iconfont icon-qq"></span></a>
                    <a onClick={()=>this.handleShare('qZone')}><span style={{fontSize:20,color:'#00beff'}} className="iconfont icon-qunfengqqkongjian"></span></a>
                    <a onClick={()=>this.handleShare('wechatFriend')}><span style={{fontSize:20,color:'green'}} className="iconfont icon-big-WeChat"></span></a>
                    <a onClick={()=>this.handleShare('wechatTimeline')}><span style={{fontSize:20,color:'green'}} className="iconfont icon-pengyouquan"></span></a>
                </div>
            }
            <div className="content" style={{padding:20}}>
                <div>
                    <h2>做一个光荣的健康传播志愿者</h2>
                    <h4>津贴收入可达数万、数十万</h4>
                    <div style={{textIndent:'2em'}}>
                        有朋友推荐了中国妇幼保健协会、重庆红十字基金会主导的健康传播公益活动，我们试看报名体验了一下，的确不错，不但能享受来自权威专家多种形式的健康实用服务，成为一名光荣的传播健康、孝敬父母的志愿者，还能获得数千、数万或数十万的志愿者津贴。为了父母和自己的身体健康，不防报名试一试。
                        注意：报名注册时须输入传播码 <span style={{color:'#f00',fontSize:'16px'}}>{this.state.sharecode}</span>
                    </div>
                </div>
                <iframe style={{width:300,height:600,margin:'10px auto',display:'block'}} src="https://b.eqxiu.com/s/axQiOqXa?eqrcode=1&share_level=1&from_user=59fbcc00-aab9-4b07-ae77-db872730786a&from_id=0181a2b1-3919-4e68-a2ef-3f2aa5dc6bb7&share_time=1526132495004" frameborder="0"></iframe>
            </div>
        </div>

    }
}