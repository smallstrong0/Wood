import React, { Component } from 'react'
import styles from './index.less'
import { Router,Route,hashHistory} from 'react-router';
export default class Search extends React.Component {
    render(){
        return(
            <h1>1112</h1>
            // <div className={styles.login_modal}>
            //      <div className={styles.user_name_div}>
            //         <span className={styles.title}>用户名：</span>
            //         <Input className={styles.user_name}  onChange={this.userNameChange.bind(this)} onPressEnter={this.login.bind(this)}/>
            //     </div>
            //     <div className={styles.pwd_div}>
            //         <span className={styles.title}>密&nbsp;&nbsp;&nbsp;码：</span>
            //         <Input className={styles.pwd}  type="password" onChange={this.pwdChange.bind(this)} onPressEnter={this.login.bind(this)}/>
            //     </div>
            //     <Button type='primary' className={styles.login_btn} onClick={this.login.bind(this)}>登录</Button>
            // </div>

        )
    }
}