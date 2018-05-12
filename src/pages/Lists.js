/**
 * @name 文章列表
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
    Tag,
    Picker,
    InputItem
} from 'antd-mobile';
import HealthService from '../service/HealthService'
const Item = List.Item

export default class Lists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        let {params} = this.props.match
        let {type} = params
        if(type == 'health'){
            document.title = '健康提醒'
        }
        this.handleGetData(type)
    }

    handleGetData = (type)=>{
        if(type == 'health'){
            HealthService.getList().then(res=>{
                this.setState({
                    list:res.result || []
                })
            })
        }
    }

    handleBack = ()=>{
        window.history.back()
    }

    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" />]}>健康提醒</NavBar>
            <div className="content" >
                <List>
                    {
                        this.state.list.map(item=>{
                            return <Item arrow="down">{item.title} <Item.Brief>{item.add_time}</Item.Brief></Item>
                        })
                    }
                </List>
            </div>
        </div>

    }
}