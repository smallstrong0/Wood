import 'whatwg-fetch'
import {API_PATH} from './config'

const request = (options) => {
    let {api_name, params} = options;
    return window.fetch(API_PATH + api_name, {
        method: 'post',
        body: JSON.stringify(params),
    }).then(res => res.json()).then((res) => {
        console.log(res)
        const {code, data, error_msg} = res
        if (code === 0) {
            return Promise.resolve({
                success: true,
                data,
            })
        }
        return Promise.resolve({
            success: false,
            message: error_msg,
        })
    })
}

export default request
