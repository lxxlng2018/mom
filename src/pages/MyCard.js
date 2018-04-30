/**
 * @name 我的交友名片
 */
import React, {Component} from 'react';
import moment from 'moment';
import {createForm} from 'rc-form'
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

const Item = List.Item

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" />]}>我的交友名片</NavBar>
            <div className="content">
                <List>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">网名</InputItem>
                    <Flex className="am-list-item am-input-item am-list-item-middle">
                        <div className="am-input-label" style={{flex:1}}>头像上传</div>
                        <div style={{flex:2}}>
                            <Button type="primary" size="small" inline style={{margin:'0 2px'}}>上传本地照片</Button>
                            <Button type="primary" size="small" inline style={{margin:'0 5px'}}>选择推荐头像</Button>
                        </div>
                    </Flex>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">交友目的</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">年龄</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">性别</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">地区</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">行业</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">爱好</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">网名</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">学历</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        moneyKeyboardAlign="left">性格</InputItem>
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