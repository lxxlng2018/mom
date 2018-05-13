/**
 * @name 出生缺陷预防
 */
import React, {Component} from 'react';
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
    Modal
} from 'antd-mobile';
import MomService from '../service/MomService'
const Item = List.Item
const alert = Modal.alert
const host = base.host

export default class Prevention extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            _height:400
        }
    }

    componentDidMount() {
        this.setState({
            _height:window.screen.height
        })

        MomService.getVedios().then(res=>{
            this.setState({
                list:res||[]
            })
        })
    }
    handleMenuTab = (index)=>{
        switch (index) {
            case 0:
                break;
            case 1:
                alert('提示',"电脑端操作体验更好",[{
                    text:'知道了',
                    onPress:()=>{
                        window.location.href = `${host}/Wap/healthuser/momtest.html`
                    }
                }])
                break;
            case 2:
                alert('提示',"电脑端操作体验更好",[{
                    text:'知道了',
                    onPress:()=>{
                        window.location.href = `${host}/Wap/healthuser/selftesthome.html`
                    }
                }])
                break;
            case 3:
                break;
            default:
                break;
        }
    }

    handleRedirect = id=>{
        window.location.href = `${host}/wap/health/vedioplay?vid=${id}`
    }
    
    handleBack = ()=>{
        window.location.href = '#/home'
    }

    render() {

        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" / >]}>出生缺陷预防</NavBar>
            <div className="content">
                <Tabs
                    tabs={[
                    {
                        title: '视频大课堂'
                    }, {
                        title: '预防知识测试'
                    }, {
                        title: '预防行为检测'
                    }
                ]}
                    initialPage={0}
                    onChange={(tab, index) =>{
                        this.handleMenuTab(index)
                    }}>
                    <div
                        style={{
                        padding: '30px 5px',
                        backgroundColor: '#fff'
                    }}>
                        <List>
                            {
                                this.state.list.map(item=>{
                                    return <Item
                                                thumb={<img style={{width:100,height:60}} src={host+item.imgsub}/>}
                                                multipleLine
                                                wrap={true}
                                                arrow="horizontal"
                                                onClick={()=>this.handleRedirect(item.id)}
                                            >
                                                {item.vexplan.slice(0,24)+`...`}
                                            </Item>
                                })
                            }
                        </List>
                    </div>
                </Tabs>
            </div>
        </div>

    }
}