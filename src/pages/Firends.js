/**
 * @name 交友大世界
 */
import React, { Component } from 'react';
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
    Tag,
    Picker
} from 'antd-mobile';

const Item = List.Item

export default class Firends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[
                {
                    thumb:'/icons/1.png',
                    name:'adsd',
                    text:'asdasdasd'
                },
                {
                    thumb:'/icons/2.png',
                    name:'adsd',
                    text:'asdasdasd'
                },
                {
                    thumb:'/icons/2.png',
                    name:'adsd',
                    text:'asdasdasd'
                }
            ]
        }
    }

    componentDidMount() { }

    render() {
        const gridItem = (item,index)=><div key={index} className="user_item">
            <div className="head">
                <img style={{width:'100%'}} src={item.thumb} alt={item.name}/>
                <div className="name">{item.name}</div>
            </div>
            <div>
                目的：{item.text}
            </div>
        </div>

        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key="1" type="ellipsis" />]}>交友大世界</NavBar>
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
                    initialPage={0}
                    onChange={(tab, index) => {
                        console.log('onChange', index, tab);
                    }}
                    onTabClick={(tab, index) => {
                        console.log('onTabClick', index, tab);
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
                                    >目的</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    className="am-button-borderfix">性别</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    className="am-button-borderfix">年龄</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
                                    className="am-button-borderfix">地区</Button>
                                <Button
                                    type="ghost"
                                    inline
                                    style={{
                                        margin: '4px'
                                    }}
                                    icon="down"
                                    size="small"
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

                        <Flex style={{margin:'20px 0',overflow:'inherit'}}>
                            <div
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>已选择：</div>

                            <div style={{
                                flex: 4
                            }}>
                                <Tag style={{margin:'0 2px'}} closable>年龄</Tag>
                                <Tag style={{margin:'0 2px'}} closable>重庆</Tag>
                            </div>

                        </Flex>

                        <div className="grid-user">
                            {this.state.users.map(gridItem)}
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>

    }
}