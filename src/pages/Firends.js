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
    Radio
} from 'antd-mobile';

import FirendService from '../service/FirendService'

const Item = List.Item
const RadioItem = Radio.RadioItem

export default class Firends extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users:[
                {
                    thumb:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg',
                    name:'网名A',
                    text:'asdasdasd'
                },
                {
                    thumb:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg',
                    name:'网名B',
                    text:'asdasdasd'
                },
                {
                    thumb:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg',
                    name:'网名C',
                    text:'asdasdasd'
                },
            ],
            types:[],
            type:"age_range",
            checked:{
                jy_yx:null,
                sex:null,
                age_range:null,
                SHENGSHI:null,
                profession:null
            },
            cardShow:false,
            card:{},
            modal:false
        }
    }

    componentDidMount() {
        this.handleGetTypes()
        this.handleGetData()
    }

    handleGetData = ()=>{
        FirendService.getCardList().then(res=>{
            // this.setState({types:res})
        })
    }

    handleGetTypes = ()=>{
        FirendService.getTypes().then(res=>{
            this.setState({types:res})
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
        let {type,checked} = this.state;
        checked[type] = checkedItem
        this.setState({
            checked,
            modal:false
        })
    }

    handleMenuTab = (index)=>{
        switch (index) {
            case 0:
                break;
            case 1:
                window.location.href = '#/mycard'
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                break;
        }
    }

    render() {
        const {checked,type} = this.state
        const gridItem = (item,index)=><div key={index} className="user_item">
            <div className="head">
                <img style={{width:'100%'}} src={item.thumb} alt={item.name}/>
                <div className="name">{item.name}</div>
            </div>
            <div class="peps">
                目的：{item.text}
            </div>
        </div>

        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key="1" type="ellipsis" />]}>交友大世界</NavBar>
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
                    title="张山"
                    transparent
                    footer={[{ text: '我要邀请', onPress: () => {}}]}
                >
                    <div className="user_item">
                        <div className="head">
                            <img style={{width:'100%'}} src={`https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg`} alt={`张山`}/>
                        </div>
                        <List>
                            <Item>目的:asdasdasd</Item>
                            <Item>年龄:asdasdasd</Item>
                            <Item>性别:男</Item>
                            <Item>地区:asdasdasd</Item>
                            <Item>行业:asdasdasd</Item>
                            <Item>爱好:asdasdasd</Item>
                            <Item>学历:asdasdasd</Item>
                            <Item>性格:asdasdasd</Item>
                            <Item>学历:asdasdasd</Item>
                        </List>
                    </div>
                </Modal>
            </div>
        </div>

    }
}