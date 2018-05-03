/**
 * @name 我收到的邀请
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

export default class Myrinvite extends Component {

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

    handleMenuTab = (index) => {
        switch (index) {
            case 0:
                window.location.hash = 'firends'
                break;
            case 1:
                window.location.hash = 'mycard'
                break;
            case 2:
                window.location.hash = 'myinvite'
                break;
            case 3:
                window.location.hash = 'myrinvite'
                break;
            default:
                break;
        }
    }

    handleBack = ()=>{
        window.location.hash = 'home'
    }


    render() {
        const { checked, type } = this.state
        const gridItem = (item, index) => <div key={index} className="user_item">
            <div className="head">
                <img style={{ width: '100%' }} src={item.thumb} alt={item.name} />
                <div className="name">{item.name}</div>
            </div>
            <div className="peps">
                交友目的：奥术大师大所大所多
            </div>
            <div className="peps">
                <Tag style={{ color: '#fff', background: '#f20' }}>待同意</Tag>
            </div>
        </div>

        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon key="1" onClick={this.handleBack} type="left" />]}>交友大世界</NavBar>
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
                    initialPage={3}
                    onChange={(tab, index) => {
                        this.handleMenuTab(index)
                    }}>
                    <div
                        style={{
                            padding: '30px 5px',
                            backgroundColor: '#fff'
                        }}>
                        <div className="grid-user">
                            {this.state.users.map(gridItem)}
                        </div>
                    </div>
                </Tabs>

                <Modal
                    visible={this.state.cardShow}
                    title="张山"
                    transparent
                    footer={[{ text: '我要邀请', onPress: () => { } }]}
                >
                    <div className="user_item">
                        <div className="head">
                            <img style={{ width: '100%' }} src={`https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg`} alt={`张山`} />
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