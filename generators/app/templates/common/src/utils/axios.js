import axios from 'axios';
// import { message } from 'ant-design-vue';

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
    };
    return config;
  }

  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        // 进行登录错误拦截
        const { data, status } = res;
        //   if (status === 200) {
        // 未登录或token过期
        // if (data.code === '002') {
        //   // message.error(res.data.respHead.respMsg);
        //   setTimeout(() => {
        //     localStorage.removeItem('token')
        //     window.location.replace(process.env.VUE_APP_PUBLICPATH)
        //   }, 1000);
        // }
        return { data, status };
      },
      () => {
        // message.error('请求失败，服务器异常');
        const text = '请求失败，服务器异常'
        return Promise.reject(text);
      }
    );
  }

  request(options) {
    let intTemp = '';
    if (options.headers) {
      intTemp = axios.create();
    } else {
      intTemp = axios.create();
      options.headers = {
        token: localStorage.getItem('token'),
      };
    }
    const instance = intTemp;
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;