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
    WingBlank
} from 'antd-mobile';

const Item = List.Item
const {file_host} = base

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            userInfo:null,
            menus:menus
        }
    }

    componentDidMount() {
        UserService.getUserInfo().then(({info})=>{
            this.setState({
                userInfo:info
            })
            return UserService.getEveryDayNotice().then(res=>{
                console.log(res)
                this.setState({
                    list:res.data.result
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    handleUrl(e){
        console.log(e)
        if(e.url){
            window.location.hash = e.url
        }
    }

    render() {

        return <div className="home">
            <NavBar
                mode="dark">健康传播</NavBar>
            <div className="content">
                <Carousel autoplay={false} infinite dots={false}>
                    <div className="home-banner">
                        <div className="home-banner-text">
                            <div className="home-banner-name">{this.state.userInfo && this.state.userInfo.true_name}</div>
                            <div className="home-banner-title">健康传播室</div>
                        </div>
                        <img style={{width:'100%'}}
                        src={`${file_host}/WechatIMG108.jpeg`}
                        alt=""/>
                    </div>
                </Carousel>
                <Grid data={this.state.menus} onClick={this.handleUrl} columnNum={3} activeStyle={false} />
                <div>
                    <List renderHeader={() => <div className="block_title">每日健康提醒</div>}>
                        {
                            this.state.list.map(item=><Item key={item.id} extra={item.add_time}>{item.title}</Item>)
                        }
                    </List>
                </div>
            </div>
        </div>

    }
}