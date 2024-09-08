import axios from 'axios'
import querystring from 'querystring'


// 用create方法创建axios实例
const instance = axios.create({
    //网络请求的公共配置
    timeout:5000     //超时时间
})

//一个函数，对各种错误信息进行响应
const errorHandle=(Status,info)=>{
    switch(Status){
        case 400:
            console.log('请求参数错误');
            break;
        case 401:
            console.log('未授权');
            break;  
        case 403:
            console.log('禁止访问');      
            break;
        case 404:
            console.log('请求的资源不存在');
            break;
        case 408:
            console.log('请求超时');
            break;
        case 500:
            console.log('服务器内部错误');
            break;
        case 501:
            console.log('服务未实现');
            break;
        case 502:
            console.log('网关错误');
            break;
        case 503:
            console.log('服务不可用');
            break;
        case 504:
            console.log('网关超时');
            break;
        default:
            console.log(info);
            break;
    }
}


//请求拦截器例子
//发送请求之前的处理(判断是不是post请求,对data进行处理)
instance.interceptors.request.use(
    //成功函数
    //config是axios的配置对象.包含了网络请求的所有数据
    config=>{
        //如果请求方式为post,则对config.data进行处理
        if(config.method==='post'){
            config.data=querystring.stringify(config.data);
        }
        return config;
    },
    //失败函数
    error=>{
        //返回失败信息
        return Promise.reject(error);
    },
)
//获取数据之前
instance.interceptors.response.use(
    //成功函数
    response=>{
        //判断返回状态码是否为200
        return response.status===200? Promise.resolve(response):Promise.reject(response);
    },
    //失败函数
    error=>{
        //response是服务器返回的错误信息
        const {response}=error;
        //错误信息的处理是最关键的,根据服务器返回的错误信息来做不同的处理
        errorHandle(response.status,response.info);

    }
)

//导出axios实例
export default instance;
