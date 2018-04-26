import React, {Component} from 'react';
import moment from 'moment';
import menus from '../config/menu';
import {
    Flex,
    WhiteSpace,
    NavBar,
    Icon,
    Carousel,
    Grid,
    List,
    WingBlank
} from 'antd-mobile';

const Item = List.Item

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[{
                title:'asdasd'
            }],
            menus:menus
        }
    }

    componentDidMount() {}

    render() {

        return <div className="home">
            <NavBar
                mode="dark"
                rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '16px' }}/>, <Icon key="1" type="ellipsis" / >]}>健康传播</NavBar>
            <div className="content">
                <Carousel autoplay={false} infinite dots={false}>
                    <div className="home-banner">
                        <div className="home-banner-text">
                            <div className="home-banner-name">XXX</div>
                            <div className="home-banner-title">健康传播室</div>
                        </div>
                        <img style={{width:'100%'}}
                        src="./banner/WechatIMG108.jpeg"
                        alt=""/>
                    </div>
                </Carousel>
                <Grid data={this.state.menus} columnNum={3} activeStyle={false} />
                <div>
                    <List renderHeader={() => <div className="block_title">每日健康提醒</div>}>
                        {
                            this.state.list.map(item=><Item extra={item.date}>{item.title}</Item>)
                        }
                    </List>
                </div>
            </div>
        </div>

    }
}