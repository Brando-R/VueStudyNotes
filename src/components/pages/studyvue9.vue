<template>
    <div class="studyvue">
        <h1>{{titlemsg}}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 八个生命周期函数</h3>
        <ul>
            <li>创建时:beforeCreate、created</li>
            <li>渲染时:beforeMount、mounted</li>
            <li>更新时:beforeUpdate、updated</li>
            <li>销毁时:beforeUnmount、unmounted</li>
        </ul>
        <p>具体笔记看代码</p>
    </div>
</template>

<script>
export default {
    name:"studyvue9",
    props:{
        titlemsg:{
            type:String,
            // default:"Hello Vue",
        }
    },
    data(){
        return {

        }
    },
    // 八个生命周期函数
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
        // 这里可以做一些初始化操作(比如请求数据,网络请求等)
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeUnmount(){    
        console.log("beforeUnmount");
        // 这里可以做一些销毁操作(比如清除定时器,取消网络请求等)
    },
    unmounted(){
        console.log("unmounted");
    }
}
</script>