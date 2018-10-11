import React, {Component} from 'react'
import {Input, List, Avatar, Icon} from 'antd';
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
            let data_list = success['result_list'];
            let abc = [];
            for (let i in data_list) {
                abc.push(data_list[i])
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
                      dataSource={this.state.data}
                      renderItem={item =>
                          <List.Item
                              key={item['key']}
                              extra={<img width={272} alt="logo"
                                          src={item['dish_img']}/>}
                          >
                              <List.Item.Meta
                                  avatar={<Avatar src={item['author_logo']}/>}
                                  title={<a href={item.href}>{item['author']}</a>}
                                  description={item['dish_name']}
                              />

                          </List.Item>
                      }
                />
            </div>
        )
    }
}