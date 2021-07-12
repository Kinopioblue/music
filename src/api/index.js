import axios from 'axios'
import qs from 'qs'




// axios.defaults.baseURL = 'https://localhost:8080';

//请求拦截
axios.interceptors.request.use(
    config => {
        if (config.method == 'post') {
            config.data = {
                    ...config.data,
                    withCredentials: true
                }
                // 需要将数据格式化，否则传到后台就错了
            config.data = qs.stringify(config.data)
        } else if (config.method == 'get') {
            config.params = {
                withCredentials: true,
                ...config.params
            }
        }
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)


//post请求
export function postRequest(url, data) {
    return axios.post(url, data);
}


//get请求
export function getRequest(url) {
    return axios.get(url);
}