import axios from 'axios';
import router from './guard';
axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token');
        if (token) {
            // config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    err => {
        return Promise.reject(err);
    }    
)
axios.interceptors.response.use(
    response => {
        console.log(response)
        return response;
    },
    err => {
        // 如果返回码为401，则跳转到登录页
        if (err.response.status == 401) {
            router.push('/login');
        }
        return Promise.reject(err);
    }
)
export default axios;