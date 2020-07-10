import axios from "taro-axios";
const baseURL = `https://www.fastmock.site/mock/74f04962d54f11993a52b7c2a25c3ff7/blog/`
const service = axios.create({
    baseURL: baseURL,
    withCredentials: true, 
    timeout: 300000,
    contentType: 'application/json'
});
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
