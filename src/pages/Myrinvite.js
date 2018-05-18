/**
 * @name 我收到的邀请
 */
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import moment from 'moment';
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
    Modal,
    Radio,
    Toast
} from 'antd-mobile';

import FirendService from '../service/FirendService'
import Header from '../components/Header'

const Item = List.Item
const RadioItem = Radio.RadioItem
const host = base.host

export default class Myrinvite extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            types: [],
            type: "age_range",
            checked: {
                jy_yx: null,
                sex: null,
                age_range: null,
                SHENGSHI: null,
                profession: null
            },
            cardShow: false,
            card: null,
            modal: false
        }
    }

    componentDidMount() {
        this.handleGetData()
    }

    handleGetData = () => {
        this.handleGetTypes()
        FirendService.myInvitated().then(res => {
            this.setState({
                users: res.result || []
            })
        })
    }

    handleGetTypes = () => {
        FirendService.getTypes().then(res => {
            this.setState({ types: res || [] }, () => {
                let typeMap = {}
                this.state.types.map(item => {
                    typeMap[item.id] = item.name
                })
                this.setState({
                    typeMap
                })
            })
        })
    }

    handleModal = type => {
        this.setState({
            modal: true,
            type
        })
    }

    onClose = () => {
        this.setState({
            modal: false
        })
    }

    handleCheck = checkedItem => {
        let { type, checked } = this.state;
        checked[type] = checkedItem
        this.setState({
            checked,
            modal: false
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

    handleAgree = () => {
        let { card } = this.state
        FirendService.agreeInvite(card.id).then(res => {
            Toast.info('已同意申请')
            this.setState({
                cardShow: false,
                card: null,
            })
        })
    }

    handleBack = () => {
        window.location.hash = 'home'
    }

    handleClose = () => {
        this.setState({
            cardShow: false
        })
    }

    handleDetail = item => {
        this.setState({
            cardShow: true,
            card: item
        })
    }

    render() {
        const { checked, type, card, typeMap } = this.state
        const gridItem = (item, index) => <div key={index} onClick={() => this.handleDetail(item)} className="user_item">
            <div className="head">
                <img style={{ width: '100%' }} src={item.headshot && host + item.headshot} alt={item.id} />
                <div className="name">{item.id}</div>
            </div>
            <div className="peps">
                目的：{typeMap && typeMap[item.jy_yx]}
            </div>
            <div className="peps">
                <Tag style={{ color: '#fff', background: '#f20' }}>待同意</Tag>
            </div>
        </div>

        return <div className="home">
            <Header title="我的邀请" back={true} logout={true} />
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
                    title={card && card.nickName}
                    transparent
                    footer={[
                        { text: '同意', onPress: () => this.handleAgree() },
                        { text: '关闭', onPress: () => this.handleClose() }
                    ]}
                >
                    {card && [<div key={1} className="user_item" style={{ textAlign: 'center', margin: '0 auto' }}>
                        <div className="head">
                            <img src={`${host}${card.headshot}`} alt={card.nickName} />
                        </div>
                    </div>,
                        <List key={2}>
                            <Item>目的:{card.jy_yx && typeMap[card.jy_yx]}</Item>
                            <Item>年龄:{card.age_range && typeMap[card.age_range]}</Item>
                            <Item>性别:{card.sex && typeMap[card.sex]}</Item>
                            <Item>地区:{card.province && typeMap[card.province]}</Item>
                            <Item>行业:{card.profession && typeMap[card.profession]}</Item>
                            <Item>爱好:{card.interest && typeMap[card.interest]}</Item>
                            <Item>学历:{card.degree && typeMap[card.degree]}</Item>
                            <Item>性格:{card.character && typeMap[card.character]}</Item>
                        </List>]}
                </Modal>
            </div>
        </div>

    }
}