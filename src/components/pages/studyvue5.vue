<template>
    <div class="studyvue">
        <h1>{{titlemsg}}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① v-model 双向数据绑定, 绑定值和输入框的值同步变化,v-model="username" 绑定data中的username变量(username与input中的value一样)</h3>
        <p>input元素的value属性用于设置或获取输入字段的当前值。</p>
        <input type="text" v-model="username"></input>
        <p>用户名：{{username}}</p>
        <button @click="getUsername">say hi</button>
        <h3>② .lazy修饰符, 延迟输入事件的执行,使事件在change事件之后执行(input失去焦点时才执行)</h3>
        <input type="text" v-model.lazy="password1"></input>
        <p>密码1:{{password1}}</p>
        <h3>③ .trim修饰符, 自动去除输入框两端的空格</h3>
        <input type="text" v-model.trim="password2"></input>
        <p>密码2:{{password2}}</p>
        <h3>④ .number修饰符, 绑定值将自动转换为数值类型</h3>
        <input type="text" v-model.number="password3"></input>
        <p>密码3:{{password3}}</p>
    </div>
</template>

<script>
export default {
    name: "studyvue5",
    props:{
        titlemsg: String,
    },
    data(){
        return{
            username:'',
            password1:'',
            password2:'',
            password3:'',
            
        }
    },
    methods:{
        getUsername(){
            alert('hi '+this.username);
        },
    },
}
</script>

<style>

</style>