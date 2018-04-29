/**
 * @name 健康送爸妈
 */
import React, {Component} from 'react';
import moment from 'moment';
import {createForm} from 'rc-form'
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
    InputItem
} from 'antd-mobile';

const Item = List.Item

export default class MyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" />]}>健康送爸妈</NavBar>
            <div className="content">
                <div>
                    温馨提示：百行孝居先。健康，是送给爸妈的最好礼物。无论您多忙，都要在周三、周六将“中老年疾病防治专家提示”转发分享给爸妈，作为最真情的问候，即使爸妈不会手机或您在爸妈身边，也要口头告诉。
                </div>
                <List>
                    <div className="doctor-notice">
                        <div className="time"></div>
                        <div>
                            <div className="doc-thumb">
                                <img src="./icons/1.png" alt=""/>
                            </div>
                            <div className="">今日提示：请您关注今天的中老年疾病防治专家提示</div>
                            <div><Button>送给爸妈</Button></div>
                        </div>
                    </div>
                </List>
            </div>
        </div>

    }
}