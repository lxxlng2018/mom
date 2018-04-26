/**
 * @name 青春婚恋须知
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

export default class Notes extends Component {
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
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" / >]}>疑难杂症120</NavBar>
            <div className="content">
                <Tabs
                    tabs={[
                    {
                        title: '大家来帮助'
                    }, {
                        title: '我要求助'
                    },
                    {
                        title: '谢谢帮助'
                    },
                    {
                        title: '助人有乐'
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
                        <div
                            style={{
                            padding: '20px 0'
                        }}>
                            <List>
                                {this
                                    .state
                                    .list
                                    .map((item, index) => {
                                        return <Item arrow="horizontal" key={index} extra={item.date}>{item.text}</Item>
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
                            <List renderHeader={() => '我的经验'}>
                                <TextareaItem
                                    title=""
                                    placeholder="在此输入"
                                    data-seed="logId"
                                    rows="6"
                                    ref={el => this.autoFocusInst = el}
                                    autoHeight/>
                            </List>
                            <Button type="primary">提交</Button>
                        </WingBlank>
                        <WhiteSpace size="lg"/>
                    </div>
                </Tabs>
            </div>
        </div>

    }
}