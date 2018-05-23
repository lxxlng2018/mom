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
export default class Sharep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sharecode:null
        }
    }

    componentDidMount() {
        let {match,location} = this.props
        let {params} = match
        this.setState({
            sharecode:params.sharecode
        })
        
     }

    handleBack = () => {
        window.location.hash = 'spread'
    }

    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key="1" type="left" />]}>我要传播</NavBar>
            
            <div className="content" style={{padding:20}}>
                <div>
                    <h2>做一个光荣的健康传播志愿者</h2>
                    <h4>津贴收入可达数万、数十万</h4>
                    <div style={{textIndent:'2em'}}>
                        有朋友推荐了中国妇幼保健协会、重庆红十字基金会主导的健康传播公益活动，我们试着报名体验了一下，的确不错，不但能享受来自权威专家多种形式的健康实用服务，成为一名光荣的传播健康、孝敬父母的志愿者，还能获得数千、数万或数十万的志愿者津贴。为了父母和自己的身体健康，不妨登陆健康传播（<a href="http://www.669669669.com">www.669669669.com</a>）报名试一试。
                        注意：报名注册时须输入传播码 <span style={{color:'#f00',fontSize:'16px'}}>{this.state.sharecode}</span>
                    </div>
                </div>
                <iframe style={{width:300,height:600,margin:'10px auto',display:'block'}} src="https://b.eqxiu.com/s/axQiOqXa?eqrcode=1&share_level=1&from_user=59fbcc00-aab9-4b07-ae77-db872730786a&from_id=0181a2b1-3919-4e68-a2ef-3f2aa5dc6bb7&share_time=1526132495004" frameborder="0"></iframe>
            </div>
        </div>

    }
}