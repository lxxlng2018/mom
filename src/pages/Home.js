import React, {Component} from 'react';
import moment from 'moment';
import menus from '../config/menu';
import base from '../config/base';
import UserService from '../service//UserService'
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
    Modal
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
        UserService.getUserInfo().then((info)=>{
            this.setState({
                userInfo:info
            },()=>{
                if(!this.state.userInfo.my_alipay){
                    Modal.alert("绑定支付宝账户","请先绑定支付宝账号，否则将影响奖励金的收取",[{
                        text:'确定',
                        onPress:()=>{window.location.href=`#/spread`}
                    }])
                }
            })
            return UserService.getEveryDayNotice().then(res=>{
                this.setState({
                    list:res.data.result || []
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    handleUrl(e){
        if(e.url){
            window.location.href = e.url
        }
    }

    handleRead = id=>{
        if(id){
            window.location.hash = `read/${id}`
        }
    }


    componentWillReceiveProps(nextProps) {
        let {userInfo} = this.state
        console.log(userInfo)
    }
    

    render() {

        return <div className="home">
            <Header title="健康传播" back={false} logout={true} />
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
                            this.state.list.map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} extra={item.add_time}>{item.title}</Item>)
                        }
                    </List>
                </div>
            </div>
        </div>

    }
}