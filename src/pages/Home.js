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
    WingBlank
} from 'antd-mobile';

const Item = List.Item

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: Array
                .from(new Array(4))
                .map((_val, i) => ({text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', date:moment().format('YYYY.MM.DD')})),
            menus: Array
                .from(new Array(9))
                .map((_val, i) => ({icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: `name${i}`}))
        }
    }

    componentDidMount() {}

    render() {

        return <div className="home">
            <NavBar
                mode="dark"
                rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '16px' }}/>, <Icon key="1" type="ellipsis" / >]}></NavBar>
            <div className="content">
                <Carousel autoplay={false} infinite dots={false}>
                    <img
                        src="https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png"
                        alt=""/>
                </Carousel>
                <Grid data={this.state.menus} columnNum={3} activeStyle={false} />
                <div>
                    <List renderHeader={() => <div className="block_title">每日健康提醒</div>}>
                        {
                            this.state.list.map(item=><Item extra={item.date}>{item.text}</Item>)
                        }
                        
                    </List>
                </div>
            </div>
        </div>

    }
}