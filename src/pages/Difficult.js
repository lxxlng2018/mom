/**
 * @name 疑难杂症120
 */
import React, {Component} from 'react';
import moment from 'moment';
import DifficultService from '../service/DifficultService'
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
    Toast,
    Modal
} from 'antd-mobile';

const Item = List.Item
const Brief = List.Item.Brief
const alert = Modal.alert

export default class Difficult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            listMy:[],
            listZr:[],
            btnLoading:false
        }
    }

    componentDidMount() {
        this.handleGetHelpList()
    }

    handleGetHelpList = ()=>{
        DifficultService
            .getList()
            .then(res => {
                this.setState({
                    list: res.result || []
                })
            })
    }

    handleGetMyHelpList = ()=>{
        DifficultService
            .getMyList()
            .then(res => {
                this.setState({
                    listMy: res.result || []
                })
            })
    }

    handleGetZrylList = ()=>{
        DifficultService
            .getzurl()
            .then(res => {
                this.setState({
                    listZr: res.result || []
                })
            })
    }

    handleMenuTab = (index)=>{
        console.log(index)
        switch (index) {
            case 0:
                this.handleGetHelpList()
                break;
            case 1:
                break;
            case 2:
                this.handleGetMyHelpList()
                break;
            case 3:
                this.handleGetZrylList()
                break;
            default:
                break;
        }
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
        alert('发送', '你确定发送吗？', [
          {
            text: '确定',
            onPress: () =>{
                DifficultService.add({title,content}).then(res=>{
                    if(res){
                        Toast.success('添加成功', 1,()=>{
                            window.location.reload()
                        });
                    }
                })
            }
          },
        ])
        
    }

    handleValue(key,value){
        this.setState({
            [key]:value
        })
    }

    handleBack = ()=>{
        window.location.hash = 'home'
    }


    render() {

        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" / >]}>疑难杂症120</NavBar>
            <div className="content">
                <Tabs
                    tabs={[
                    {
                        title: '大家来帮助'
                    }, {
                        title: '我要求助'
                    }, {
                        title: '谢谢帮助'
                    }, {
                        title: '助人有乐'
                    }
                ]}
                    initialPage={0}
                    onChange={(tab, index) =>{
                        this.handleMenuTab(index)
                    }}>
                    <div
                        style={{
                        padding: '10px 5px',
                        backgroundColor: '#fff'
                    }}>
                        <SearchBar placeholder="搜索" maxLength={8} />
                        <div
                            style={{
                            padding: '10px 0'
                        }}>
                            <List renderHeader={() => '帮助列表'}>
                                {this
                                    .state
                                    .list
                                    .map((item, index) => {
                                        return <Item arrow="horizontal" key={index}>{item.title}
                                        <Brief>{item.add_time}</Brief>
                                        </Item>
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
                            <Button onClick={this.handleAdd} disabled={this.state.btnLoading} loading={this.state.btnLoading} type="primary">提交</Button>
                        </WingBlank>
                        <WhiteSpace size="lg"/>
                    </div>
                    <div
                        style={{
                        padding: '10px 5px',
                        backgroundColor: '#fff'
                    }}>
                        <div
                            style={{
                            padding: '10px 0'
                        }}>
                            <List>
                                {this
                                    .state
                                    .listMy
                                    .map((item, index) => {
                                        return <Item arrow="horizontal" key={index}>{item.title}
                                        <Brief>{item.add_time}</Brief>
                                        </Item>
                                    })
}
                            </List>
                        </div>
                    </div>
                    <div
                        style={{
                        padding: '10px 5px',
                        backgroundColor: '#fff'
                    }}>
                        <div
                            style={{
                            padding: '10px 0'
                        }}>
                            <List>
                                {this
                                    .state
                                    .listZr
                                    .map((item, index) => {
                                        return <Item arrow="horizontal" key={index}>{item.title}
                                            <Brief>{item.add_time}</Brief>
                                        </Item>
                                    })
}
                            </List>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>

    }
}