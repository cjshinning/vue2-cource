import axios from '@/utils/axios';


// 登录接口
export const toLogin = (data) => axios.post('/user/login', data);

// 验证是否登陆过
export const validate = () => axios.get('/user/validate');