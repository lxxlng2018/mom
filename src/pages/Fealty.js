/**
 * @name 百行孝居先
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
import MomService from '../service/MomService'

const Item = List.Item

export default class Fealty extends Component {
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
        MomService.get24Xiao().then(res=>{
            this.setState({
                list:res || []
            })
        })
    }

    handleBack = ()=>{
        window.location.href = '#/home'
    }

    handleRead = id=>{
        if(id){
            window.location.href = `#/read/${id}`
        }
    }


    render() {

        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" / >]}>百行孝居先</NavBar>
            <div className="content">
                <div>
                    <Flex wrap alignContent="center">
                        <List style={{flex:1}}>
                            {
                                this.state.list.slice(0,7).map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} >{item.title}</Item>)
                            }
                        </List>

                        <List style={{flex:1}}>
                            {
                                this.state.list.slice(8,16).map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} >{item.title}</Item>)
                            }
                        </List>

                        <List style={{flex:1}}>
                            {
                                this.state.list.slice(17,23).map(item => <Item onClick={() => this.handleRead(item.id)} key={item.id} >{item.title}</Item>)
                            }
                        </List>
                    </Flex>
                </div>
            </div>
        </div>

    }
}