/**
 * @name 疑难杂症120
 */
import React, {Component} from 'react';
import moment from 'moment';
import DifficultService from '../service/DifficultService'
import UserService from '../service/UserService'
import Header from '../components/Header'
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
            btnLoading:false,
            modal:{
                visible:false,
                title:'',
                content:'',
                replay_content:'',
                anser:false,
                opration:[
                    {
                        text:'我来帮助',
                        onPress:()=>this.handleOpenAnswer()
                    },
                    {
                        text:'关闭',
                        onPress:()=>this.handleClose()
                    },
                    {
                        text:'提交',
                        onPress:()=>this.handleSubmit()
                    }
                ],
                showOpration:[]
            },
            thank:{
                visible:false,
                title:'',
                content:'',
                replay_content:'',
                anser:false,
                opration:[
                    {
                        text:'关闭',
                        onPress:()=>this.handleClose()
                    },
                    {
                        text:'提交',
                        onPress:()=>this.handleSubmitThank()
                    }
                ]
            }
        }
    }

    componentDidMount() {
        this.handleGetHelpList()
        UserService.getUserInfo().then(userinfo=>{
            this.setState({
                userinfo
            })
        })
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
        window.location.href = '#/home'
    }

    handleDetail = id=>{
        let {list,modal,userinfo} = this.state;
        let article = list.find(item=>{
            return item.id == id
        })
        this.setState({
            modal:{
                ...modal,
                ...article,
                showOpration:modal.opration.slice(0,2),
                visible:true
            }
        })
        
    }

    handleClose = ()=>{
        this.setState({
            modal:{
                visible:false,
                title:'',
                content:'',
                replay_content:'',
                anser:false,
                opration:[
                    {
                        text:'我来帮助',
                        onPress:()=>this.handleOpenAnswer()
                    },
                    {
                        text:'关闭',
                        onPress:()=>this.handleClose()
                    },
                    {
                        text:'提交',
                        onPress:()=>this.handleSubmit()
                    }
                ],
                showOpration:[]
            },
            thank:{
                visible:false,
                title:'',
                content:'',
                replay_content:'',
                anser:false,
                opration:[
                    {
                        text:'关闭',
                        onPress:()=>this.handleClose()
                    },
                    {
                        text:'提交',
                        onPress:()=>this.handleSubmitThank()
                    }
                ]
            }
        })
    }

    handleOpenAnswer = ()=>{
        let {modal} = this.state
        this.setState({
            modal:{
                ...modal,
                showOpration:modal.opration.slice(1,3),
                anser:true
            }
        })
    }

    handleSubmit = ()=> {
        const {modal,userinfo} = this.state;
        let {id,title,replay_content} = modal
        DifficultService.addXX({
            title:`${userinfo.true_name}回复说：${title}`,
            content:replay_content,
            reply_id:id
        }).then(res=>{
            Toast.info('回复成功',1)
            this.setState({
                modal:{
                    ...modal,
                    visible:false,
                    title:'',
                    content:'',
                    replay_content:'',
                    anser:false
                }
            })
        })
    }

    handleSubmitThank = ()=> {
        const {thank,userinfo} = this.state;
        let {id,title,replay_content} = thank
        DifficultService.addThank({
            title:`${userinfo.true_name}感谢：${title}`,
            content:replay_content,
            reply_id:id
        }).then(res=>{
            Toast.info('感谢成功',1)
            this.setState({
                thank:{
                    ...thank,
                    visible:false,
                    title:'',
                    content:'',
                    replay_content:'',
                    anser:false
                }
            })
        })
    }

    handleReply = value=>{
        let {modal} = this.state
        this.setState({
            modal:{
                ...modal,
                replay_content:value
            }
        })
    }


    handleThanks = ()=>{
        let {thank} = this.state
        this.setState({
            thank:{
                ...thank,
                visible:true
            }
        })
    }

    handleThank = value =>{
        let {thank} = this.state
        thank.replay_content = value
        this.setState({
            thank
        })
    }


    render() {

        return <div className="home">
            <Header back logout title="疑难杂症120" />
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
                            <List renderHeader={() => '求助列表'}>
                                {this
                                    .state
                                    .list
                                    .map((item, index) => {
                                        return <Item onClick={()=>this.handleDetail(item.id)} arrow="horizontal" key={index}>{item.title}
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
                                        return <Item key={index}>{item.title}
                                                <div className="mini-time">{item.add_time}</div>
                                                {
                                                    item.reply && item.reply.map(r=>{
                                                        return <div className="reply-content" key={r.id}><div>{r.content}</div><Button onClick={this.handleThanks} inline size="small">谢谢帮助</Button></div>
                                                    })
                                                }
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
                                        return <Item multipleLine wrap={true} key={index}>{item.title}
                                            {item.content}
                                            <Brief>{item.add_time}</Brief>
                                        </Item>
                                    })
}
                            </List>
                        </div>
                    </div>
                </Tabs>
            </div>
            <Modal
            popup
            title={this.state.modal.title}
            visible={this.state.modal.visible}
            animationType="slide"
            onClose={this.handleClose}
            footer={this.state.modal.showOpration}
            >
                <div className="qus_content">
                    <div dangerouslySetInnerHTML={{ __html: this.state.modal.content}}>
                    
                    </div>
                </div>
                {
                    this.state.modal.anser && <div className="qus_textarea">
                                                 <InputItem onChange={this.handleReply} type="text" placeholder="请输入帮助的话..." />
                                              </div>
                }
                
            </Modal>
            <Modal
            popup
            title={`感谢`}
            visible={this.state.thank.visible}
            animationType="slide"
            onClose={this.handleClose}
            footer={this.state.thank.opration}
            >
                <div className="qus_textarea">
                    <InputItem onChange={this.handleThank} type="text" placeholder="请输入感谢的话..." />
                </div>
                
            </Modal>
        </div>

    }
}