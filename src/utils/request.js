import 'whatwg-fetch'
import {API_PATH} from './config'

const request = (options) => {
    let {api_name, params} = options;
    return new Promise(function (resolve, reject) {
        window.fetch(API_PATH + api_name, {
            method: 'post',
            body: JSON.stringify(params),
        }).then(res => res.json()).then((res) => {
            // console.log(res)
            const {code, data, error_msg} = res
            if (code === 200) {
                resolve(data);
            } else {
                reject(error_msg);
            }
        }).catch(e => {
            console.log(e)
        })
    })
}

export default request



