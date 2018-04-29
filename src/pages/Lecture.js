/**
 * @name 专家孕哺讲座
 */
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
    TextareaItem
} from 'antd-mobile';

const Item = List.Item

export default class Lecture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: Array
                .from(new Array(4))
                .map((_val, i) => ({
                    text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    date: moment().format('YYYY.MM.DD')
                }))
        }
    }

    componentDidMount() {}

    render() {

        return <div className="home">
            <NavBar mode="dark" rightContent={[< Icon key="1" type="ellipsis" />]}>专家孕哺讲座</NavBar>
            <div className="content">
                <List>
                    <Item
                        thumb={<img style={{ width: 100, height: 60 }} src="https://upload.jianshu.io/admin_banners/web_images/4300/30d9d47ea36263ee2a83b953de7230dda74e81c4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />}
                        multipleLine
                        wrap={true}
                        arrow="horizontal"
                    >
                        asdasdasdasdasdasd
                        asdasdasdasdasdasdasd
                        asdadasd
                        asdasdasd
                            </Item>
                </List>
            </div>
        </div>

    }
}