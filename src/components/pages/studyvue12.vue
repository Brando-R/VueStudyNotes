<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 在src目录下创建utils目录,并创建request.js文件,存储网络请求对象axios(在requets.js代码中查看笔记)</h3>
        <h3>② 在src目录下创建api目录,在api目录中存储所有网络请求的api文件</h3>
        <ul>
            <li>index.js文件中引入request.js文件,并创建api对象,对象中存储网络请求方法(在index.js代码中查看笔记)</li>
            <li>path.js文件中存储所有api的路径</li>
        </ul>
        <h3>③ 在组件中导入api对象,并调用api对象中的方法,获取数据,并将数据赋值给data中的变量(查看代码中的笔记)</h3>
        <p>{{ chengping.title }}</p>
        
    </div>
</template>

<script>
import api from '../api/index'

export default {
    name: 'StudyVue12',
    data() {
        return {
            chengping: {}
        }
    },
    props: {
        titlemsg: {
            type: String,
            // default: 'Hello Vue 12'
        }
    },
    mounted(){
        // 调用api对象中的方法,获取数据
        api.getchengping().then(res=>{
            console.log(res.data);
            this.chengping = res.data.chengpinDetails[0];
        })
    }
}
</script>