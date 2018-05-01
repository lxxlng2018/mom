import React, {Component} from 'react';
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
    InputItem,
    Toast
} from 'antd-mobile';

import ExpriceService from '../service/ExpriceService'

const Item = List.Item

export default class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            btnLoading:false
        }
    }

    componentDidMount() {
        ExpriceService.getList().then(res=>{
            this.setState({
                list:res.result
            })
        })
    }

    handleAdd =()=>{
        const {title,content}=this.state
        if(!title){
            return Toast.fail('请输入标题', 1);
        }
        if(!content){
            return Toast.fail('请输入内容', 1);
        }
        this.setState({
            btnLoading:true
        })
        ExpriceService.add({title,content}).then(res=>{
            if(res){
                Toast.success('添加成功', 1,()=>{
                    window.location.reload()
                });
            }
        })
    }

    handleValue(key,value){
        console.log()
        this.setState({
            [key]:value
        })
    }

    render() {

        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" / >]}>我的治病经验</NavBar>
            <div className="content">
                <Tabs
                    tabs={[
                    {
                        title: '我们的经验'
                    }, {
                        title: '我要谈经验'
                    }
                ]}
                    initialPage={0}
                    onChange={(tab, index) => {
                    console.log('onChange', index, tab);
                }}
                    onTabClick={(tab, index) => {}}>
                    <div
                        style={{
                        padding: '30px 5px',
                        backgroundColor: '#fff'
                    }}>
                        <Flex
                            style={{
                            width: '100%'
                        }}>
                            <Flex.Item
                                style={{
                                flex: 2
                            }}>
                                <div
                                    style={{
                                    height: '100%',
                                    padding: '10px 5px',
                                    marginRight: '-15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px #ddd solid'
                                }}>
                                    <div>选择分类</div>
                                    <Icon type="down"/>
                                </div>
                            </Flex.Item>
                            <Flex.Item
                                style={{
                                flex: 6
                            }}>
                                <SearchBar placeholder="搜索" maxLength={8}/>
                            </Flex.Item>
                        </Flex>
                        <div
                            style={{
                            padding: '20px 0'
                        }}>
                            <List>
                                {this
                                    .state
                                    .list
                                    .map((item, index) => {
                                        return <Item key={item.id} extra={item.add_time}>{item.title}</Item>
                                    })
}
                            </List>
                        </div>
                    </div>
                    <div
                        style={{
                        backgroundColor: '#fff'
                    }}>
                        <WhiteSpace size="lg"/>
                        <WingBlank>
                            <List>
                                <InputItem
                                placeholder="在此输入标题"
                                onChange={(value)=>{this.handleValue('title',value)}}
                                >标题</InputItem>
                                <TextareaItem
                                    title="内容"
                                    placeholder="在此输入我的经验"
                                    data-seed="logId"
                                    rows="6"
                                    onChange={(value)=>{this.handleValue('content',value)}}
                                    autoHeight/>
                            </List>
                            <Button loading={this.state.btnLoading} disabled={this.state.btnLoading} onClick={this.handleAdd} type="primary">提交</Button>
                        </WingBlank>
                        <WhiteSpace size="lg"/>
                    </div>
                </Tabs>
            </div>
        </div>

    }
}