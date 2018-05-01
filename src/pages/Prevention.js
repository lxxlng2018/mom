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
    TextareaItem,
    Modal
} from 'antd-mobile';

const Item = List.Item
const alert = Modal.alert

export default class Prevention extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: Array
                .from(new Array(4))
                .map((_val, i) => ({
                    text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    date: moment().format('YYYY.MM.DD')
                })),
            _height:400
        }
    }

    componentDidMount() {
        this.setState({
            _height:window.screen.height
        })
    }
    handleMenuTab = (index)=>{
        console.log(index)
        switch (index) {
            case 0:
                this.handleGetHelpList()
                break;
            case 1:
                alert('提示',"电脑端操作体验更好",[{
                    text:'知道了',
                    onPress:()=>{}
                }])
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                break;
        }
    }
    
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
                    onChange={(tab, index) =>{
                        this.handleMenuTab(index)
                    }}>
                    <div
                        style={{
                        padding: '30px 5px',
                        backgroundColor: '#fff'
                    }}>
                        <List>
                            <Item
                                thumb={<img style={{width:100,height:60}} src="https://upload.jianshu.io/admin_banners/web_images/4300/30d9d47ea36263ee2a83b953de7230dda74e81c4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>}
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
                    <div
                        style={{
                        backgroundColor: '#fff'
                    }}>
                        <iframe style={{width:'100%',height:this.state._height}} src="http://www.669669669.com/index/momtest"></iframe>
                    </div>
                </Tabs>
            </div>
        </div>

    }
}