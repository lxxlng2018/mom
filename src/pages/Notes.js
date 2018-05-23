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
    TextareaItem,
} from 'antd-mobile';

import MomService from '../service/MomService'

const Item = List.Item

export default class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        this.handleGetData()
    }

    handleGetData = ()=>{
        MomService.getPublicList(1,2).then(res=>{
            this.setState({
                list:res || []
            })
        })
    }

    handleRead = id=>{
        if(id){
            window.location.hash = `read/${id}`
        }
    }

    handleBack = ()=>{
        window.location.href = '#/home'
    }


    render() {

        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" / >]}>青春婚恋须知</NavBar>
            <div className="content">
                 <List>
                        {
                            this.state.list.map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id}>{item.title}</Item>)
                        }
                    </List>
            </div>
        </div>

    }
}