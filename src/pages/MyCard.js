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
const Item = List.Item
const host = base.host

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types:[],
            data:{},
            upload:{
                name:'imgFile',
                action:`${host}/kindedit/php/upload_jsone.php`,
                onSuccess:res=>this.handleSuccess(res)
            }
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

    handleField = (field,val)=>{
        if(!val){
            return Toast.fail(`请选择内容`)
        }
        let {data} = this.state;
        this.setState({
            data:{
                ...data,
                [field]:val
            }
        })
    }

    handleUpload = file=>{
        console.log(file)
    }


    submit = ()=>{
        let {data} = this.state
        FirendService.add(data).then(res=>{
            if(res.data){
                return Toast.fail('名片添加失败')
            }
            window.location.href = '#/firends'
        })
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
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div style={{ flex: 2 }}>
                            <Upload {...this.state.upload}><Button type="primary" size="small" inline style={{ margin: '0 2px' }}>上传本地照片</Button></Upload>
                            <Button type="primary" size="small" inline style={{ margin: '0 5px' }}>选择推荐头像</Button>
                        </div>
                    </Flex>
                    <Picker cols={1} 
                        data={(()=>this.handleGetType('jy_yx'))()}
                        onOk={(val)=>this.handleField('jx_yx',val[0])}
                        value={[this.state.data.jx_yx]}
                        >
                        <Item >交友目的</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('age_range'))()}
                        onOk={(val)=>this.handleField('age_range',val[0])}
                        value={[this.state.data.age_range]}
                    >
                        <Item >年龄段</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('sex'))()}
                        onOk={(val)=>this.handleField('sex',val[0])}
                        value={[this.state.data.sex]}
                    >
                        <Item >性别</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('SHENGSHI'))()}
                        onOk={(val)=>this.handleField('province',val[0])}
                        value={[this.state.data.province]}
                    >
                        <Item >地区</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('profession'))()}
                        onOk={(val)=>this.handleField('profession',val[0])}
                        value={[this.state.data.profession]}
                    >
                        <Item >行业</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('character'))()}
                        onOk={(val)=>this.handleField('character',val[0])}
                        value={[this.state.data.character]}
                    >
                        <Item >爱好</Item>
                    </Picker>
                    <Picker cols={1} data={(() => this.handleGetType('degree'))()}
                        onOk={(val)=>this.handleField('degree',val[0])}
                    >
                        <Item >学历</Item>
                    </Picker>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        onChange={(e)=>this.handleField('phone',e)}
                        moneyKeyboardAlign="left">手机</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        onChange={(e)=>this.handleField('qq',e)}
                        moneyKeyboardAlign="left">QQ</InputItem>
                    <InputItem
                        type="string"
                        placeholder=""
                        clear
                        onChange={(e)=>this.handleField('weixin',e)}
                        moneyKeyboardAlign="left">微信</InputItem>
                    <Item><Button onClick={this.submit} type="primary">提交</Button></Item>
                </List>
            </div>
        </div>

    }
}