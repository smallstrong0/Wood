import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './index.less'
import {Input} from 'antd';
import {API_PATH } from '../../utils/config'

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Input.Search
                placeholder="input search text"
                onSearch={value => console.log(value+API_PATH)}
                style={{ width: 200 }}
            />
        )
    }
}