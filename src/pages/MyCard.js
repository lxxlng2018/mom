/**
 * @name 我的交友名片
 */
import React, { Component } from 'react';
import moment from 'moment';
import Upload from 'rc-upload'
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
    Picker,
    InputItem,
    Toast
} from 'antd-mobile';
import FirendService from '../service/FirendService'
import Header from '../components/Header'
const Item = List.Item
const host = base.host

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: [],
            data: {
                nickName: '',
                character: "",
                degree: '',
                headshot: "",
                interest: '',
                jy_yx: '',
                phone: "",
                profession: "",
                province: "",
                qq: "",
                sex: "",
                weixin: ""
            },
            world: null,
            upload: {
                name: 'imgFile',
                action: `${host}/kindedit/php/upload_jsone.php`,
                onSuccess: res => this.handleSuccess(res)
            }
        }
    }

    componentDidMount() {
        this.handleGetTypes()
        FirendService
            .getMyCard()
            .then(res => {
                if (res[0]) {
                    this.setState({ data: res[0], world: res[1] })
                }
            })
    }
    handleGetTypes = () => {
        FirendService
            .getTypes()
            .then(res => {
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

    handleGetType = type => {
        const { types } = this.state
        return types && types
            .filter(item => {
                return item.type == type
            })
            .map(item => {
                return { label: item.name, value: item.id }
            })
    }

    handleBack = () => {
        window.location.hash = 'home'
    }

    handleField = (field, val) => {
        let { data } = this.state;
        this.setState({
            data: {
                ...data,
                [field]: val
            }
        })
    }

    handleSuccess = res => {
        let { data } = this.state
        this.setState({
            data: {
                ...data,
                headshot: res.url
            }
        })
    }

    submit = () => {
        let { data } = this.state
        FirendService
            .add(data)
            .then(res => {
                if (res.data) {
                    return Toast.fail('名片添加失败')
                }
                Toast.info('名片已保存,请点击投放')
                window.location.href = '#/mycard'
            })
    }

    handleSend = () => {
        let { data } = this.state
        FirendService
            .toFriendWord(data)
            .then(res => {
                if (res.data) {
                    return Toast.fail('名片投放失败')
                }
                Toast.info('名片已投放')
                window.location.href = '#/firends'
            })
    }

    handleCancel = () => {
        let { data } = this.state
        FirendService.delFriendWord().then(res => {
            if (!res.data) {
                return
                Toast.info('名片已撤回')
                window.location.reload()
            }
        })
    }

    render() {
        return <div className="home">
            <Header title="我的交友名片" back={true} logout={true} />
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
                    }}></Tabs>
                <List renderHeader="我的名片">
                    <InputItem
                        type="string"
                        placeholder="输入网名"
                        clear
                        value={this.state.data.nickName}
                        onChange={(e) => this.handleField('nickName', e)}
                        moneyKeyboardAlign="left">网名</InputItem>
                    <Flex className="am-list-item">
                        <div className="am-input-label" style={{
                            flex: 1
                        }}>头像上传</div>
                        <div style={{
                            flex: 1,
                            padding: 10
                        }}>
                            {this.state.data.headshot && <img
                                style={{
                                    height: 60,
                                    width: 60
                                }}
                                src={host + this.state.data.headshot}
                                alt="" />}
                        </div>
                        <div style={{
                            flex: 3
                        }}>
                            <Upload {...this.state.upload}>
                                <Button
                                    type="primary"
                                    size="small"
                                    inline
                                    style={{
                                        margin: '0 2px'
                                    }}>上传照片</Button>
                            </Upload>
                        </div>
                    </Flex>
                        <Item 
                            extra={
                                <select value={this.state.data.jy_yx} onChange={e => this.handleField('jy_yx', e.target.value)}>
                                    <option>请选择</option>
                                    {
                                        (() => this.handleGetType('jy_yx'))().map(item => {
                                            return <option key={item.value} value={item.value}>{item.label}</option>
                                        })
                                    }

                                </select>}
                        >交友目的</Item>
                        <Item 
                            extra={
                                <select value={this.state.data.age_range} onChange={e => this.handleField('age_range', e.target.value)}>
                                    <option>请选择</option>
                                    {
                                        (() => this.handleGetType('age_range'))().map(item => {
                                            return <option key={item.value} value={item.value}>{item.label}</option>
                                        })
                                    }

                                </select>}
                        >年龄段</Item>
                        <Item 
                            extra={
                                <select value={this.state.data.sex} onChange={e => this.handleField('sex', e.target.value)}>
                                    <option>请选择</option>
                                    {
                                        (() => this.handleGetType('sex'))().map(item => {
                                            return <option key={item.value} value={item.value}>{item.label}</option>
                                        })
                                    }

                                </select>}
                        >性别</Item>
                        <Item 
                            extra={
                                <select value={this.state.data.province} onChange={e => this.handleField('province', e.target.value)}>
                                    <option>请选择</option>
                                    {
                                        (() => this.handleGetType('SHENGSHI'))().map(item => {
                                            return <option key={item.value} value={item.value}>{item.label}</option>
                                        })
                                    }

                                </select>}
                        >地区</Item>
                        <Item 
                            extra={
                            <select value={this.state.data.profession} onChange={e => this.handleField('profession', e.target.value)}>
                                <option>请选择</option>
                                {
                                    (() => this.handleGetType('profession'))().map(item => {
                                        return <option key={item.value} value={item.value}>{item.label}</option>
                                    })
                                }

                            </select>}
                         >行业</Item>
                    <Item
                        extra={
                            <select value={this.state.data.interest} onChange={e => this.handleField('interest', e.target.value)}>
                                <option>请选择</option>
                                {
                                    (() => this.handleGetType('aihao'))().map(item => {
                                        return <option key={item.value} value={item.value}>{item.label}</option>
                                    })
                                }

                            </select>}
                    >爱好</Item>
                    <Item
                        extra={
                            <select value={this.state.data.degree} onChange={e => this.handleField('degree', e.target.value)}>
                                <option>请选择</option>
                                {
                                    (() => this.handleGetType('degree'))().map(item => {
                                        return <option key={item.value} value={item.value}>{item.label}</option>
                                    })
                                }

                            </select>}
                    >学历</Item>
                    <InputItem
                        type="string"
                        placeholder="输入手机"
                        clear
                        value={this.state.data.phone}
                        onChange={(e) => this.handleField('phone', e)}
                        moneyKeyboardAlign="left">手机</InputItem>
                    <InputItem
                        type="string"
                        placeholder="输入QQ"
                        clear
                        value={this.state.data.qq}
                        onChange={(e) => this.handleField('qq', e)}
                        moneyKeyboardAlign="left">QQ</InputItem>
                    <InputItem
                        type="string"
                        placeholder="输入微信"
                        clear
                        value={this.state.data.weixin}
                        onChange={(e) => this.handleField('weixin', e)}
                        moneyKeyboardAlign="left">微信</InputItem>
                    <Item
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        {!this.state.data.id && <Button
                            style={{
                                margin: '0 10px'
                            }}
                            inline
                            onClick={this.submit}
                            type="primary">提交</Button>}
                        {this.state.data.id && !this.state.world && [<Button key={1} style={{ margin: '0 10px' }} onClick={this.submit} inline type="primary">保存</Button>, <Button key={2} onClick={this.handleSend} inline type="primary">投放</Button>]}
                        {this.state.world && <Button onClick={this.handleCancel} inline type="primary">撤回</Button>}
                    </Item>
                </List>
            </div>
        </div>

    }
}