/**
 * @name 求助内容
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

const Item = List.Item

export default class HelpContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article:''
        }
    }

    componentDidMount() {
        let {params} = this.props.match
        let {id} = params
    }

    handleBack = ()=>{
        window.history.back()
    }

    render() {
        return <div className="home">
            <NavBar mode="dark" leftContent={[< Icon onClick={this.handleBack} key = "1" type = "left" />]}>{this.state.article.title}</NavBar>
            <div className="content" style={{padding:20,fontSize:16}} dangerouslySetInnerHTML={{ __html: this.state.article.content}}>
            </div>
        </div>

    }
}