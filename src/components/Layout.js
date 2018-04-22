import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '测试标题'
        }

    }

    handleChangeTitle = function (title) {
        this.setState({title})
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '16px' }}/>, <Icon key="1" type="ellipsis" / >]}>{this.state.title}</NavBar>
                {this
                    .props
                    .children}
}
            </div>
        )
    }
}
