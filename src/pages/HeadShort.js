/**
 * @name 我的头像
 */
import React, { Component } from 'react';
import moment from 'moment';
import menu2 from '../config/menu2'
import base from '../config/base'
import $ from 'jquery'
import Upload from 'rc-upload'
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
    Toast
} from 'antd-mobile';
import UserService from '../service/UserService'

const { host } = base

const Item = List.Item


export default class HeadShort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userinfo:{},
            upload:{
                name:'imgFile',
                action:`${host}/kindedit/php/upload_jsone.php`,
                onSuccess:res=>this.handleSuccess(res)
            }
        }
    }

    componentDidMount() {
        UserService.getUserInfo()
        .then(userinfo=>{
            this.setState({userinfo})
        })
    }

    handleChange = (file) => {
        if(file.width>200){
            return false
        }
    }

    handleSuccess = data=>{
        let {userinfo} = this.state
        if(data.url){
            UserService.updateUserInfo({
                    my_headphoto:data.url
            }).then(res=>{
                this.setState({
                    userinfo:{
                        ...userinfo,
                        my_headphoto:data.url
                    }
                })
            })
        }
    }

    handleBack = ()=>{
        window.history.back()
    }

    render() {
        return <div key={1} className="home">
            <NavBar
                mode="dark"
                leftContent={[< Icon onClick={
                    this.handleBack
                }
                    key="1" type="left" />]}>我的头像</NavBar>
            <div className="content">
                <Flex style={{
                    alignItems:'center',
                    justifyContent:'center',
                    padding:30
                }}>
                    {this.state.userinfo.my_headphoto && <img className="headshot" src={`${host+this.state.userinfo.my_headphoto}`} />}
                </Flex>
                <Flex style={{
                    alignItems:'center',
                    justifyContent:'center',
                    padding:20
                }}>
                    <Upload style={{flex:1,margin:10}} {...this.state.upload}><Button type="primary">上传头像</Button></Upload>
                    {/* <Button style={{flex:1,margin:10}} type="primary">选择头像</Button> */}
                </Flex>
            </div>
        </div>

    }
}