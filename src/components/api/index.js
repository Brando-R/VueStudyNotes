// 这里导入创建好的网络请求对象axios，并导入path.js中的接口地址。
import axios from "../utils/request";
import path from "./path";

const api={
    getchengping(){
        return axios.get(path.baseusl+path.chengping);
    }
}

export default api;