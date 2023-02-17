import axios from 'axios';

class HttpRequest {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:7001';
    this.timeout = 3000;
    // loading 需要加
    this.queue = {};  //专门用来维护请求队列
    // 页面切换需要取消ajax

  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
      // 开启loading
      if (Object.keys(this.queue).length == 0) {
        // 开loading
      }

      // 可以记录请求的取消函数
      let CancelToken = axios.CancelToken;
      config.CancelToken = new CancelToken((c) => { //存在vuex中，页面切换的时候 组件销毁是执行
        // c就是当前取消的token
      })

      this.queue[url] = true;
      return config;  //只是扩展请求的配置
    })

    instance.interceptors.response.use((response) => {
      delete this.queue[url]; //一旦有响应了，就从队列删除

      if (Object.keys(this.queue).length == 0) {
        // close loading
      }

      if (res.data.err == 0) {
        return res.data.data; //接口配好的
      } else {
        return Promise.reject(res.data); //失败抛出异常
      }
    }, (err) => {
      delete this.queue[url];
      if (Object.keys(this.queue).length == 0) {
        // close loading
      }
      return Promise.reject(err);
    })
  }
  request(options) {  //通过request方法来进行请求操作
    //每次请求可以创建一个新的实例，如果业务不复杂你可以不创建实例，直接使用axios
    let instance = axios.create();
    let config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options
    }
    this.setInterceptor(instance, config.url);
    return instance(config);  //产生的是一个promise axios()
  }
  get(url, data = {}) { //url, {} axios.get('/xxx', {params:xxx})
    return this.request({
      url,
      method: 'get',
      ...data
    })
  }
  post(url, data = {}) { //url, {} axios.get('/xxx', {params:xxx})
    return this.request({
      url,
      method: 'post',
      data
    })
  }
}

// ab 用的是同一个实例
// a 里面的请求有独立的拦截器
// b 里面也有拦截器

export default new HttpRequest