import {createStore} from 'vuex'
import axios from 'axios'
const store = createStore({
    // state下放入数据，在main.js中引入Vuex后，作为项目全局数据，可以用$store.state.count获取，
    state:{
        count:0
    },
    //getters下放入计算属性，可对vue中的数据进行计算或过滤
    getters:{
        getCount(state){
            return state.count>0 ? state.count: "count is zero"
        }
    },
    //mutations下放入修改state的函数（唯一可以修改state的地方）,可在组件的methods中调用，修改state中的数据
    mutations:{
        addCouter(state){
            state.count++
        },
        addCouterPlus(state,num){
            state.count+=num
        },
    },
    //actions下放入异步操作，可在组件的methods中调用，修改state中的数据，但不直接修改，而是触发mutations中的函数
    actions:{
        asyncAddCouter({commit}){
            axios.get('http://iwenwiki.com/api/generator/list.php')
            .then(res=>{
                commit('addCouterPlus',res.data[0])
            })
        }
    }
})  

export default store;