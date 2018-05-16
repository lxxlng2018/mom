/**
 * @name 交友大世界
 */
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
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
    TextareaItem,
    Tag,
    Modal,
    Radio,
    Toast
} from 'antd-mobile';
import base from '../config/base'
import FirendService from '../service/FirendService'
import UserService from '../service/UserService'

const Item = List.Item
const RadioItem = Radio.RadioItem
const host = base.host

export default class Firends extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users:[
            ],
            types:[],
            type:"age_range",
            userinfo:null,
            checked:{
                jy_yx:null,
                sex:null,
                age_range:null,
                province:null,
                profession:null
            },
            checkedId:{
                jy_yx:null,
                sex:null,
                age_range:null,
                province:null,
                profession:null
            },
            cardShow:false,
            card:{},
            modal:false,
            typeMap:null
        }
    }

    componentDidMount() {
        this.handleGetTypes()
        this.handleGetData()
        UserService.getUserInfo().then(userinfo=>{
            this.setState({
                userinfo
            })
        })
    }

    handleGetData = ()=>{
        const {checkedId} = this.state
        let data = {}
        if(checkedId.jy_yx){
            data.jy_yx = checkedId.jy_yx
        }
        if(checkedId.sex){
            data.sex = checkedId.sex
        }
        if(checkedId.age_range){
            data.age_range = checkedId.age_range
        }
        if(checkedId.profession){
            data.profession = checkedId.profession
        }
        FirendService.getCardList({
            ...data
        }).then(res=>{
            this.setState({ users:res.result||[]})
        })
    }

    handleGetTypes = ()=>{
        FirendService.getTypes().then(res=>{
            this.setState({types:res||[]},()=>{
                let typeMap = {}
                this.state.types.map(item=>{
                    typeMap[item.id] = item.name
                })
                this.setState({
                    typeMap
                })
            })
        })
    }

    handleModal = type=>{
        this.setState({
            modal:true,
            type
        })
    }

    onClose = ()=>{
        this.setState({
            modal:false
        })
    }

    handleCheck = checkedItem=>{
        let {type,checked,checkedId} = this.state;
        checked[type] = checkedItem
        checkedId[type] = checkedItem.id 
        this.setState({
            checked,
            modal:false
        },()=>{
            this.handleGetData()
        })
    }

    handleMenuTab = (index) => {
        switch (index) {
            case 0:
                window.location.href = '#/firends'
                break;
            case 1:
                window.location.href = '#/mycard'
                break;
            case 2:
                window.location.href = '#/myinvite'
                break;
            case 3:
                window.location.href = '#/myrinvite'
                break;
            default:
                break;
        }
    }

    handleBack = ()=>{
        window.location.href = '#/home'
    }

    componentDidCatch(error, info) {
        console.log(error,info);
    }

    handleDetail = item=>{
        this.setState({
           cardShow:true,
           card:item
        })
    }

    handleClose = ()=>{
        this.setState({
           cardShow:false
        })
    }

    handleInvitate = (card)=>{
        let {userinfo} = this.state
        if(card.id == userinfo.id){
            return Toast.fail('不能邀请自己')
        }
        FirendService.invitate({
            from_id:userinfo.id,
            to_id:card.id
        }).then(res=>{
            if(!res){
                Toast.info('邀请成功',2)
            }
        })
    }


    render() {
        const {checked,type,typeMap,card} = this.state
        const gridItem = (item,index)=><div key={index} onClick={()=>this.handleDetail(item)} className="user_item">
            <div className="head">
                <img src={host+item.headshot} alt={item.id}/>
                <div className="name">{item.nickName}</div>
            </div>
            <div className="peps">
                目的：{typeMap && typeMap[item.jy_yx]}
            </div>
        </div>

        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key="1" type="left" />]}>交友大世界</NavBar>
            <div className="content">
                <Tabs
                    tabs={[
                        {
                            title: '交友大世界'
                        }, {
                            title: '我的名片'
                        }, {
                            title: '我的邀请'
                        }, {
                            title: '收到的邀请'
                        }
                    ]}
                    initialPage={0}
                    onChange={(tab, index) => {
                       this.handleMenuTab(index)
                    }}>
                    <div
                        style={{
                            padding: '30px 5px',
                            backgroundColor: '#fff'
                        }}>
                        <Flex>
                            <div
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>搜索：</div>
                            <div style={{
                                flex: 4
                            }}>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    className="am-button-borderfix"
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('jy_yx')}
                                    >目的</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('sex')}
                                    className="am-button-borderfix">性别</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('age_range')}
                                    className="am-button-borderfix">年龄</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('SHENGSHI')}
                                    className="am-button-borderfix">地区</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('profession')}
                                    className="am-button-borderfix">行业</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    className="am-button-borderfix">爱好</Button>
                            </div>
                        </Flex>

                        <Flex style={{margin:'20px 0',overflow:'inherit'}}>
                            <div
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>已选择：</div>

                            <div style={{
                                flex: 4
                            }}>
                                {
                                    Object.keys(checked).map((item,index)=>{
                                        if(checked[item]){
                                            return <Tag key={checked[item]?checked[item].id:index} style={{margin:'2px 5px'}} closable>{checked[item].name}</Tag>
                                        }
                                    })
                                }
                            </div>

                        </Flex>

                        <div className="grid-user">
                            {this.state.users.map(gridItem)}
                        </div>
                    </div>
                </Tabs>
                <Modal
                    popup
                    visible={this.state.modal}
                    closable={true}
                    maskClosable={true}
                    onClose={()=>this.onClose('modal')}
                    animationType="slide-up"
                    >
                    <div style={{height:400,overflow:'auto'}}>
                        <List>
                            {
                                this.state.types && this.state.types.filter(item=>{
                                    return item.type == this.state.type
                                }).map(item=><RadioItem key={item.id} onChange={()=>this.handleCheck(item)} checked={checked[type] && checked[type].id === item.id}>{item.name}</RadioItem>)
                            }
                        </List>
                    </div>
                </Modal>

                <Modal
                    visible={this.state.cardShow}
                    title={card.nickName}
                    transparent
                    footer={[
                        { text: '我要邀请', onPress: () => this.handleInvitate(card)},
                        { text: '关闭', onPress: () => this.handleClose()}
                    ]}
                >
                    <div className="user_item">
                        <div className="head">
                            <img src={`${host}${card.headshot}`} alt={card.nickName}/>
                        </div>
                        <List>
                            <Item>目的:{card.jy_yx && typeMap[card.jy_yx]}</Item>
                            <Item>年龄:{card.age_range && typeMap[card.age_range]}</Item>
                            <Item>性别:{card.sex && typeMap[card.sex]}</Item>
                            <Item>地区:{card.province && typeMap[card.province]}</Item>
                            <Item>行业:{card.profession && typeMap[card.profession]}</Item>
                            <Item>爱好:{card.interest && typeMap[card.interest]}</Item>
                            <Item>学历:{card.degree && typeMap[card.degree]}</Item>
                            <Item>性格:{card.character && typeMap[card.character]}</Item>
                        </List>
                    </div>
                </Modal>
            </div>
        </div>

    }
}