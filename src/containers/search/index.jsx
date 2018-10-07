import React, {Component} from 'react'
import {Input} from 'antd';
import styles from './index.less'
import request from '../../utils/request'

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    changeText(e) {
        this.setState({
            text: e.currentTarget.value
        })
    }

    search(e) {
        if (!this.state.text) {
            alert('请输入搜索内容')
            return
        }
        console.log('搜索内容为：' + this.state.text)

        request({
            api_name: 'search/ts',
            params: {}
        })
    }

    render() {
        return (
            <div className="div">
                <Input className='search' placeholder="吃什么？"
                       onChange={this.changeText.bind(this)}
                       onPressEnter={this.search.bind(this)}
                />
            </div>
        )
    }
}