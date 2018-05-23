/**
 * @name 我是传播人
 */
import React, { Component } from 'react';
import moment from 'moment';
import menu2 from '../config/menu2'
import base from '../config/base'
import $ from 'jquery'
import NativeShare from 'nativeshare'
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
    Modal,
    Toast,
    Steps
} from 'antd-mobile';
import FirendService from '../service/FirendService'
import UserService from '../service/UserService'

const { host } = base
const _find = [
    'first_id',
    'second_id',
    'third_id',
    'fourth_id'
]

const Item = List.Item
const Step = Steps.Step
var nativeShare = new NativeShare()
export default class Spread extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu2,
            list: [],
            firendsNumb: 0,
            userinfo: {},
            my_alipay: '',
            modal_xj: false,
            shareModal: false,
            step:[]
        }
    }

    componentDidMount() {
        this.handleGetData()
        this.handleGetUserInfo()
    }

    handleGetData = (con) => {
        let first_id = con?con.first_id : null,
            {step} = this.state
        Promise.all([
            FirendService.getMyFriends(con),
            FirendService.getMyFriendsNumb(con)
        ]).then(([res1,res2])=>{
            this.setState({
                list:res1||[],
                firendsNumb:res2||0
            })
        })
    }

    handleUrl = item => {
        if (item.text == '我的传播码') {
            return this.handleMyCb()
        }
        if (item.text == '我的账户') {
            return this.handleGetMyAccount()
        }
        if (item.text == '我的孝敬卡') {
            return this.handleGetXjk()
        }
        if (item.text == '我要传播') {
            this.setState({
                shareModal: true
            })
        }
        
        if(item.url){
            window.location.href = item.url
        }
    }

    handleGetUserInfo = () => {
        UserService.getUserInfo().then(userinfo => {
            this.setState({
                userinfo,
                my_alipay:userinfo.my_alipay
            })
        })
    }

    handleMyCb = () => {
        let { userinfo } = this.state
        let m = Modal.alert('我的传播码', `${userinfo.my_cbm}`, [{ text: '确认',onPress:()=>m.close() }])
    }

    handleGetMyAccount = () => {
        let { my_alipay, userinfo } = this.state
        return new Promise((reslove, rejcet) => {
            UserService.getMyAccount().then(res => {
                reslove(res.my_acc)
            })
        }).then(my_alipay => {
           let m = Modal.prompt('我的账户', '输入支付宝账户', [
                { text: '取消',onPress:()=>m.close() },
                { text: '保存', onPress: value => this.handleUpdateMyAccount(value) },
            ], 'default', `${my_alipay || ''}`)
        })
    }

    handleUpdateMyAccount = my_alipay => {
        if (!my_alipay) {
            return Toast.fail('账号不能为空')
        }
        UserService.updateAlipay({ my_alipay }).then(info => {
            Toast.success(info)
        })
    }

    handleGetXjk = () => {
        let { userinfo } = this.state
        return new Promise((reslove, rejcet) => {
            if (userinfo.xiaojingka_url) {
                reslove(userinfo.xiaojingka_url)
            } else {
                return UserService.getXjk().then(res => {
                    this.setState({
                        userinfo: {
                            ...userinfo,
                            xiaojingka_url:res
                        }
                    })
                    reslove(res)
                })
            }
        }).then(xiaojingka_url => {
            this.setState({
                modal_xj: true
            })
        })
    }


    handleClose = () => {
        this.setState({
            modal_xj: false,
            shareModal:false
        })
    }

    handleOpenShare = () => {
       window.location.href="#/share"
    }

    handleBack = () => {
        window.location.hash = 'home'
    }

    handleStep = item=>{
        let {step} = this.state
        if(step.length<4){
            step = step.concat(item)
            this.setState({
                step
            },()=>{
                this.handleGetData({
                    first_id:item.id
                })
            })
        }
    }

    handleStepBack = item=>{
        let {step} = this.state
        if(step.length>0){
            step.pop()
            this.setState({
                step
            },()=>{
                this.handleGetData({
                    first_id:item.first_id
                })
            })
        }
    }
    render() {
        return [<div key={1} className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key="1" type="left" />]}>我是传播人</NavBar>
            <div className="content">
                <Grid data={this.state.menu2} columnNum={3} onClick={this.handleUrl} hasLine={false} activeStyle={false} />
                <Flex className="base-center">
                    <div style={{ flex: 2 }}>我的传播朋友</div>
                    <div style={{ flex: 1 }}>共{this.state.firendsNumb}位</div>
                </Flex>
                <div style={{padding:10}}>
                        {
                            this.state.step.map(item=>{
                                return <a key={item.id} onClick={()=>this.handleStepBack(item)}>{item.true_name}</a>
                            })
                        }
                </div>
                <List renderHeader={`姓名`}>
                    {
                        this.state.list.map(item => {
                            return <Item onClick={()=>this.handleStep(item)} arrow="horizontal" key={item.id}>{item.true_name}</Item>
                        })
                    }
                </List>
            </div>
        </div>,
        <Modal key={2} transparent={true} maskClosable={true} onClose={this.handleClose} visible={this.state.modal_xj} title="我的孝敬卡">
            <img style={{ maxWidth: '200px' }} src={`${host}${this.state.userinfo.xiaojingka_url}` || ''} />
        </Modal>,
        <Modal key={3} transparent={true} maskClosable={true} onClose={this.handleClose} visible={this.state.shareModal} title="我要分享"
            footer={[
                {
                    text: '我要分享',
                    onPress: () => this.handleOpenShare()
                }
            ]}
        >
            <div>
                传播健康，慈善吉祥。请将接下来的页面转发分享给您所有的朋友，用您的传播码报名注册的第一轮志愿者，每注册一个，您的账户里将收到10元津贴，第二轮、第三轮、第四轮报名注册的志愿者每注册一个，您的账户里将到1元津贴。
            </div>
        </Modal>
        ]

    }
}