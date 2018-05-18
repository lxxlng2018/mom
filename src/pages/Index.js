import React, {Component} from 'react';
import moment from 'moment';
import menus from '../config/menu';
import menu2 from '../config/menu2';
import base from '../config/base';
import MomServcie from '../service/MomService'
import NativeShare from 'nativeshare'
import {
    Flex,
    WhiteSpace,
    NavBar,
    Icon,
    Carousel,
    Grid,
    List,
    WingBlank,
    Button,
    Tabs,
    Toast,
    Modal
} from 'antd-mobile';

const Item = List.Item
const {file_host,host} = base
var nativeShare = new NativeShare()

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            list1:[],
            list2:[],
            list3:[],
            list4:[],
            userInfo:null,
            menus:menus,
            list5:[],
            list6:[],
            list7:[],
            list8:[],
            modal_xj: false,
            touxiang:false
        }
    }

    componentDidMount() {
        this.handleGetData()
    }

    handleClose = () => {
        this.setState({
            modal_xj: false,
            touxiang:false
        })
    }

    handleGetData = ()=>{
        return Promise.all([
            MomServcie.getPublicList(7),
            MomServcie.getPublicList(8),
            MomServcie.getPublicList(9),
            MomServcie.getPublicList(10),
            MomServcie.getPublicList(11),
            MomServcie.getHomeSpeech(),
            MomServcie.getPublicList(1),
            MomServcie.getHomePhotos(),
            MomServcie.getHomeFirends()
        ]).then(res=>{
            this.setState({
                list:res[0],
                list1:res[1],
                list2:res[2],
                list3:res[3],
                list4:res[4],
                list5:res[5],
                list6:res[6],
                list7:res[7],
                list8:res[8]
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    handleUrl(url){
        if(url){
            window.location.hash = url
        }
    }

    handleRead = id=>{
        if(id){
            window.location.hash = `read/${id}`
        }
    }

    handleAlert = (msg)=>{
        Toast.fail(msg?msg:`请登录后查看更多`)
    }

    handleModal = ()=>{
        Toast.fail('请登录后查看更多')
    }

    handleOpen = (item)=>{
        switch (item.text) {
            case `我的传播朋友`:
                break;
            case `我的传播码`:
                Modal.alert('我的传播码', `123131231312`, [{ text: '确认', onPress: () => { } }])
                break;
            case `我的账户`:
                Modal.alert('提示', `您还未绑定账户，请绑定账户`, [{ text: '确认', onPress: () => { } }])
                break;
            case `我的孝敬卡`:
               this.setState({
                    modal_xj: true
                })
                break;
            case `我的头像`:
               this.setState({
                    touxiang: true
                })
                break;
            case `我要传播`:
               Modal.alert(`温馨提示`,`
               传播健康，慈善吉祥。请将接下来的页面转发分享给您所有的朋友，
               用您的传播码报名注册的第一轮志愿者，每注册一个，您的账户里将收到10元津贴，
               第二轮、第三轮、第四轮报名注册的志愿者每注册一个，您的账户里将到1元津贴。
               `,[{
                   text:'我要分享',
                   onPress:()=>this.handleAlert(`请登录`)
               }])
                break;
            default:
                break;
        }
    }

    render() {
        const gridItem = (item,index)=><div key={index} style={{width:'60px'}} className="user_item">
            <div className="head">
                <img src={item.headshot||'http://p1.qzone.la/upload/20150102/a3zs6l69.jpg'} alt={item.nickName}/>
                <div className="name">{item.nickName}</div>
            </div>
        </div>
        return <div className="home">
            <Flex className="top_index_header">
                <div className="logo">
                    <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/logo/1525666485856.jpg" alt=""/>
                </div>
                <div className="time">
                    {moment().format('YYYY年MM月DD日')}
                </div>
                <div className="buttons">
                    <Button type="warning" onClick={()=>{window.location.href=`${host}/wap/health/regist`}} inline size="small">报名</Button>
                    <Button type="warning" onClick={()=>this.handleUrl('login')} inline size="small">登录</Button>
                </div>
            </Flex>
            <div className="home-menu">
                <Flex wrap="wrap">
                    <a href="#/">每日健康提醒</a>
                    <a href="#/">百行孝居先</a>
                    <a href="#/">我的治病经验</a>
                    <a href="#/">出生缺陷预防</a>
                    <a href="#/">健康送爸妈</a>
                    <a href="#/">专家孕哺讲座</a>
                    <a href="#/">青春婚恋须知</a>
                    <a href="#/">交友大世界</a>
                    <a href="#/">疑难杂症120</a>
                </Flex>
            </div>
            <Carousel autoplay infinite className="home-carouel">
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图一.jpg" alt=""/>
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图二.jpg" alt=""/>
                <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图三.jpg" alt=""/>
            </Carousel>
            <div className="content">
                <div>
                     <div className="block_title_l">每日健康提醒</div>
                    <List>
                        {
                            this.state.list.map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} >{item.title}</Item>)
                        }
                        <Item extra={<a onClick={()=>this.handleAlert()}>更多</a>}>&nbsp;</Item>
                    </List>
                </div>
                <div>
                    <div className="block_title_l">我的治病经验</div>
                    <Tabs tabs={[
                        {
                            title: '我们的经验'
                        }, {
                            title: '我要谈经验'
                        }
                    ]}
                        onChange={(key)=>{
                            if(key.title == '我要谈经验'){
                                return Toast.fail('请登录')
                            }
                        }}
                    >
                    </Tabs>
                    <List>
                        {
                            this.state.list1.map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} >{item.title}</Item>)
                        }
                        <Item extra={<a onClick={()=>this.handleAlert()}>更多</a>}>&nbsp;</Item>
                    </List>
                </div>
                <div>
                    <div className="block_title_l">疑难杂症120</div>
                    <Tabs tabs={[
                        {
                            title: '大家来帮助'
                        }, {
                            title: '我要求助'
                        }, {
                            title: '谢谢帮助'
                        },
                        {
                            title:'助人有乐'
                        }
                    ]}
                        onChange={(key)=>{
                            if(key.title != '大家来帮助'){
                                return Toast.fail('请登录')
                            }
                        }}
                    >
                    </Tabs>
                    <List>
                        {
                            this.state.list2.map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} >{item.title}</Item>)
                        }
                        <Item extra={<a onClick={()=>this.handleAlert()}>更多</a>}>&nbsp;</Item>
                    </List>
                </div>
                <div>
                    <a href="#/public_vedio"><img style={{width:'100%'}} src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/%E8%AD%A6%E9%92%9F%E9%95%BF%E9%B8%A3%E5%9B%BE%E7%89%87.jpg" alt=""/></a> 
                </div>
                <div>
                    <div className="block_title_l">健康送爸妈</div>
                    <div className="top-notice">
                        温馨提示：百行孝居先。健康，是送给爸妈的最好礼物。无论您多忙，都要在周三、周六将“中老年疾病防治专家提示”转发分享给爸妈，作为最真情的问候，即使爸妈不会手机或您在爸妈身边，也要口头告诉。
                    </div>
                    <List>
                        {
                            this.state.list3.map(item=>{
                            return <div key={item.id} className="doctor-notice">
                                <div className="time">{item.add_time}</div>
                                    <div className="doctor-notice-content">
                                        <div className="doc-thumb">
                                            <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/headshot/WechatIMG1438.png" alt=""/>
                                        </div>
                                        <div className="tips">请您关注今天的中老年疾病防治专家提示</div>
                                        <div className="share-btn">
                                            <a onClick={()=>this.handleAlert()} className="am-button am-button-primary am-button-small am-button-inline">送爸妈</a>
                                        </div>
                                    </div>
                                    <div onClick={()=>this.handleRead(item.id)} className="buttom-title">今日提示：{item.title}</div>
                                </div>
                            })
                        }
                        <Item extra={<a onClick={()=>this.handleAlert()}>更多</a>}>&nbsp;</Item>
                    </List>
                </div>
                <div>
                    <div id="list4" className="block_title_l">百行孝居先</div>
                    <Flex wrap={true} alignContent="center">
                        <List style={{flex:1}}>
                            {
                                this.state.list4.slice(0,5).map(item=>{
                                return <Item onClick={()=>this.handleRead(item.id)} key={item.id}>{item.title}</Item>
                                })
                            }
                        </List>
                        <List style={{flex:1}}>
                            {
                                this.state.list4.slice(6,10).map(item=>{
                                return <Item onClick={()=>this.handleRead(item.id)} key={item.id}>{item.title}</Item>
                                })
                            }
                        </List>
                        <List style={{flex:1}}>
                            {
                                this.state.list4.slice(11,15).map(item=>{
                                return <Item onClick={()=>this.handleRead(item.id)} key={item.id}>{item.title}</Item>
                                })
                            }
                        </List>
                    </Flex>
                     <div className="am-list-b"><a onClick={()=>this.handleAlert()}>更多</a></div>
                </div>
                <Carousel autoplay infinite className="home-carouel">
                    <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图五.png" alt=""/>
                    <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/wap/图六.png" alt=""/>
                </Carousel>
                <div>
                    <div className="block_title_l">出生缺陷预防</div>
                    <a href="http://www.669669669.com/wap/index/vediolist">
                        <img style={{width:'100%'}} src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/%E5%87%BA%E7%94%9F%E7%BC%BA%E9%99%B7%E9%A2%84%E9%98%B2%E6%95%99%E8%82%B2%E8%A7%86%E9%A2%91%E8%AF%BE%E5%A0%82.jpg" alt=""/>
                    </a>
                </div>
                <div>
                    <div className="block_title_l">预防知识测试</div>
                    <div style={{padding:'28px 0',textAlign:'center'}}>
                            <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/20170513183527.png" alt=""/>
                            <div style={{marginTop:'30px'}}>
                                    <a href="http://www.669669669.com/index/momtest" className="momtest">
                                        <img src="http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/www.png" alt=""/>
                                    </a>                            
                            </div>
                    </div>
                </div>
                <div>
                    <div className="block_title_l">预防行为检测</div>
                    <div>
                        <div className="panel-body">
                            <Flex wrap='wrap' style={{textAlign:'center',alignItems:'center'}}>
                                <div style={{width:'43%',padding:'10px'}} onClick={()=>alert('报名注册为学员后登录后检测')} className="test-block">
                                    <Button type="warning">婚前预防行为检测</Button>
                                </div>
                                <div style={{width:'43%',padding:'10px'}} onClick={()=>alert('报名注册为学员后登录后检测')} className="test-block">
                                    <Button type="warning">孕前预防行为检测</Button>
                                </div>
                                <div style={{width:'43%',padding:'10px'}} onClick={()=>alert('报名注册为学员后登录后检测')} className="test-block">
                                    <Button type="warning">孕早期预防行为检测</Button>
                                </div>
                                <div style={{width:'43%',padding:'10px'}}onClick={()=>alert('报名注册为学员后登录后检测')} className="test-block">
                                    <Button type="warning">产前预防行为检测</Button>
                                </div> 
                            </Flex>
                            <div>
                                <div className="yf-test">
                                    您还未进行婚前预防行为检测
                                </div>
                                <div className="qusetuo">
                                    <ul className="list-unstyled">
                                        <li>①.每个阶段危害行为全部为“无”，则预防状态为A。</li>
                                        <li>②.每个阶段高危行为全部为“无”，若低危行为有一种为“有”，则预防状态为B1，两种为“有”，则预防状态为B2，以此类推。</li>
                                        <li>③.每个阶段高危行为有一种为“有”，则预防状态为C1，两种为“有”则为C2，以此类推。</li>
                                        <li>④.状态字母越靠后和相同字母数字越靠后则表示预防行为越差，出生缺陷的可能性越大。</li>
                                    </ul>
                                </div>
                            </div>  
                            
                        </div>
                    </div>
                </div>

                <div>
                    <div className="block_title_l">专家孕哺讲座</div>
                    <Carousel 
                        autoplay
                        slideWidth={0.3}
                        dots={false}
                        infinite
                        selectedIndex={1}
                    >
                        {
                            this.state.list5.map(item=>{
                             return <div key={item.uid}>
                                 <a href={`${host}/wap/index/expdetail?uid=${item.uid}`}><img style={{height:100}} src={host+'/uploads/avatar/'+item.photo} alt=""/></a>
                             </div>
                            })
                        }
                    </Carousel>
                </div>
                <div>
                    <div className="block_title_l">青春婚恋须知</div>
                    <List>
                        {
                            this.state.list6.map(item=>{
                            return <Item onClick={()=>{window.location.href=`${host}/wap/index/aread/id/${item.id}`}} key={item.id} >{item.title}</Item>
                            })
                        }
                        <Item extra={<a onClick={()=>this.handleAlert()}>更多</a>}>&nbsp;</Item>
                    </List>
                </div>
                <div>
                    <div className="block_title_l">我是传播人</div>
                    <Grid data={menu2} columnNum={3} onClick={this.handleOpen} hasLine={false} activeStyle={false} />
                    <Flex className="base-center">
                        <div style={{ flex: 2 }}>我的传播朋友</div>
                        <div style={{ flex: 1 }}>共15784位</div>
                    </Flex>
                    <div className="grid-user">
                            {[...this.state.list8].splice(0,8).reverse().map(gridItem)}
                    </div>
                </div>
                <div>
                    <div className="block_title_l">交友大世界</div>
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
                    initialPage={0}
                    onChange={(tab, index) => {
                        if(tab.title != '交友大世界'){
                            return Toast.fail('请登录后查看')
                        }
                    }}>
                    <div
                        style={{
                            padding: '30px 5px',
                            backgroundColor: '#fff'
                        }}>
                        <Flex>
                            <div
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>搜索：</div>
                            <div style={{
                                flex: 4
                            }}>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    className="am-button-borderfix"
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('jy_yx')}
                                    >目的</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('sex')}
                                    className="am-button-borderfix">性别</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('age_range')}
                                    className="am-button-borderfix">年龄</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('SHENGSHI')}
                                    className="am-button-borderfix">地区</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    onClick={()=>this.handleModal('profession')}
                                    className="am-button-borderfix">行业</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    className="am-button-borderfix">爱好</Button>
                            </div>
                        </Flex>

                        <div className="grid-user">
                            {this.state.list8.slice(6,26).map(gridItem)}
                        </div>
                    </div>
                    <div>

                    </div>
                </Tabs>
                </div>
                <div>
                    <div className="block_title_l">幸福天使</div>
                    <Carousel 
                       autoplay
                       infinite
                    >
                        {
                            this.state.list7.map(item=>{
                             return <img key={item.ID} style={{height:300}} src={host+'/uploads/album/image/'+item.Annex_Name} alt=""/>
                            })
                        }
                    </Carousel>
                </div>
            </div>
            <Modal key={2} transparent={true} maskClosable={true} onClose={this.handleClose} visible={this.state.modal_xj} title="我的孝敬卡">
                <img style={{ maxWidth: '200px' }} src={`${host}/uploads/xiaojingka/20180506/15255958463705.jpg`} />
            </Modal>
            <Modal key={3} transparent={true} maskClosable={true} onClose={this.handleClose} visible={this.state.touxiang} title="我的头像">
                <img style={{ maxWidth: '200px' }} src={`http://txqg.oss-cn-shenzhen.aliyuncs.com/669mom/headshot/14075_100.png`} />
            </Modal>
        </div>

    }
}