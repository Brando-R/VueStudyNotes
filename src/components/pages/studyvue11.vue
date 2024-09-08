<template>
    <div class="studyvue">
        <h1>{{titlemsg}} (具体看代码)</h1>
        <h1>{{ $route.params.titlemsg }} (具体看代码)</h1>
        <h3>① 发送axios请求,获取数据</h3>
        <p>{{chenpin.title}}</p>
        <p>{{chenpin.content}}</p>
        <h3>② 局部引入和全局引入</h3>
        <p>局部引入:在需要使用的组件中,使用import导入需要的模块.</p>
        <p>全局引入(记查看main.js的笔记):在main.js中,使用import导入需要的模块,并在Vue.use()中注册.在组件中使用时直接用模块名调用:this.$axios </p>
        
    </div>
</template>

<script>
// import axios from 'axios';
//querystring模块用于处理url参数
import querystring from 'querystring';

export default {
    name: "studyvue11",
    props:{
        titlemsg:{
            type:String,
            // default:"This is a title"
        },
    },
    data() {
        return {    
            chenpin:{},
        }
    },
    //在mounted生命周期函数中，发送axios请求，获取数据
    //axios请求要素：请求方式、请求地址、请求参数（可选）
    
    mounted(){
        //get请求方式
        this.$axios({
           method:'get',
           url:'http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php',
        }).then(res=>{
            // console.log(res.data);
            this.chenpin=res.data.chengpinDetails[0];
        }).catch(err=>{
            console.log(err);
        })
        //post请求方式(需要携带参数,data:querystring.stringify({}))
        //post请求方式需要额外处理：
        //1.安装导入querystring模块：npm install querystring；
        //2.使用querystring.stringify({})
        this.$axios({
            method:'post',
            url:'http://iwenwiki.com/api/blueberrypai/login.php',
            data: querystring.stringify({
                user_id:"iwen@qq.com",
                password:"iwen123" ,
                verification_code:"crfvw"
            }),
        }).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
        //快捷请求方式：
        //get请求方式:axios.get('url').then(res=>{console.log(res.data)})
        this.$axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(res=>{
             console.log(res.data);
        })
        //post请求方式:axios.post('url',querystring.stringify({})).then(res=>{console.log(res.data)})
        this.$axios.post('http://iwenwiki.com/api/blueberrypai/login.php',querystring.stringify({
            user_id:"iwen@qq.com",
                password:"iwen123" ,
                verification_code:"crfvw"
        })).then(res=>{
             console.log(res.data);
        })
    }
}

</script>