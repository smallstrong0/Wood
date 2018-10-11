import React, {Component} from 'react'
import {Input, List} from 'antd';
import styles from './index.less'
import request from '../../utils/request'


export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data: [],
        };

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
            api_name: 'search/list',
            params: {}
        }).then(success => {
            var data_list = success['result_list'];
            let abc = [];
            for (var i in data_list) {
                abc.push(data_list[i]['dish_name'])
            }
            this.setState({
                data: abc,
            });

        }, error => {
            console.log(error)
        });


    }


    render() {
        return (
            <div className="div">
                <Input className='search' placeholder="吃什么？"
                       onChange={this.changeText.bind(this)}
                       onPressEnter={this.search.bind(this)}
                />
                <List className="list"
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    // bordered
                      dataSource={this.state.data}
                      renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}