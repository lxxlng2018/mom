/**
 * @name 出生缺陷预防
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

export default class Prevention extends Component {
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
            <NavBar mode="dark" rightContent={[< Icon key = "1" type = "ellipsis" / >]}>出生缺陷预防</NavBar>
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
                        <Grid
                            data={this.state.list}
                            columnNum={3}
                            renderItem={dataItem => (
                            <div
                                style={{
                                padding: '12.5px'
                            }}>
                                <img
                                    src={dataItem.icon}
                                    style={{
                                    width: '75px',
                                    height: '75px'
                                }}
                                    alt=""/>
                                <div
                                    style={{
                                    color: '#888',
                                    fontSize: '14px',
                                    marginTop: '12px'
                                }}>
                                    <span>I am title..</span>
                                </div>
                            </div>
                        )}/>
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