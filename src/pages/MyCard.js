/**
 * @name 我的交友名片
 */
import React, { Component } from 'react';
import moment from 'moment';
import { createForm } from 'rc-form'
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
    InputItem
} from 'antd-mobile';
import FirendService from '../service/FirendService'
const Item = List.Item

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types:[]
        }
    }

    componentDidMount() {
        this.handleGetTypes()
    }
    handleGetTypes = () => {
        FirendService.getTypes().then(res => {
            this.setState({ types: res })
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

    handleGetType = type=>{
        const {types} = this.state
        return types && types.filter(item => {
            return item.type == type
        }).map(item => {
            return {
                label:item.name,
                value:item.id
            }
        })
    }

    handleBack = ()=>{
        window.location.hash = 'home'
    }


    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon key="1" onClick={this.handleBack} type="left" />]}>我的交友名片</NavBar>
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
                    initialPage={1}
                    onChange={(tab, index) => {
                        this.handleMenuTab(index)
                    }}
                >
                </Tabs>
                <List>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">网名</InputItem>
                    <Flex className="am-list-item am-input-item am-list-item-middle">
                        <div className="am-input-label" style={{ flex: 1 }}>头像上传</div>
                        <div style={{ flex: 2 }}>
                            <Button type="primary" size="small" inline style={{ margin: '0 2px' }}>上传本地照片</Button>
                            <Button type="primary" size="small" inline style={{ margin: '0 5px' }}>选择推荐头像</Button>
                        </div>
                    </Flex>
                    <Picker cols={1} data={(()=>this.handleGetType('jy_yx'))()}>
                        <Item >交友目的</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('age_range'))()}>
                        <Item >年龄段</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('sex'))()}>
                        <Item >性别</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('SHENGSHI'))()}>
                        <Item >地区</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('profession'))()}>
                        <Item >行业</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('character'))()}>
                        <Item >爱好</Item>
                    </Picker>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">网名</InputItem>
                    <Picker cols={1} data={(() => this.handleGetType('degree'))()}>
                        <Item >学历</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('character'))()}>
                        <Item >学历</Item>
                    </Picker>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">手机</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">QQ</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">微信</InputItem>
                    <Item><Button type="primary">提交</Button></Item>
                </List>
            </div>
        </div>

    }
}