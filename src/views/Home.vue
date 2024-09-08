<template>
    <studyvue1 titlemsg="vue学习1:模板语法"/>
    <studyvue2 titlemsg="vue学习2:条件渲染"/>
    <studyvue3 titlemsg="vue学习3:列表渲染"/>
    <studyvue4 titlemsg="vue学习4:事件处理"/>
    <studyvue5 titlemsg="vue学习5:表单输入绑定"/>
    <studyvue6 titlemsg="vue学习6:组件通信"/>
    <studyvue7 :titlemsg="titlemsg"/>
    <!-- 子组件中触发事件时，父组件通过@onevent绑定事件，并接收子组件的data数据 -->
    <!-- @onevent="handleEvent" 事件处理函数，接收子组件的data数据,把数据传递给handleEvent函数 -->
    <studyvue8 titlemsg="vue学习8:自定义事件组件交互" @onevent="handleEvent"/>
    <p>{{msg}}</p>
    <studyvue9 titlemsg="vue学习9:组件生命周期"/>
    <studyvue10 titlemsg="vue学习10:Vue引入第三方"/>
    <studyvue11 titlemsg="vue学习11:Axios网络请求"/>
    <studyvue12 titlemsg="vue学习12:axios网络请求封装 "/>
    <studyvue13 titlemsg="vue学习13:网络请求跨域解决方案"/>
    <studyvue14 titlemsg="vue学习14:Vue引入路由配置"/>
    <studyvue15 titlemsg="vue学习15:路由传递参数"/>
    <studyvue16 titlemsg="vue学习16:嵌套路由配置"/>
    <studyvue17 titlemsg="vue学习17:Vue状态管理"/>
    <studyvue18 titlemsg="vue学习18:Vue状态管理"/>
    <studyvue19 titlemsg="vue学习19:Vue3新特性"/>
    <studyvue20 titlemsg="vue学习20:Vue3新特性2"/>
    <studyvue21 titlemsg="vue学习21:Vue3加载Element-plus"/>
    
  </template>
  
  <script>
  import studyvue1 from '../components/pages/studyvue1.vue'
  import studyvue2 from '../components/pages/studyvue2.vue'
  import studyvue3 from '../components/pages/studyvue3.vue'
  import studyvue4 from '../components/pages/studyvue4.vue'
  import studyvue5 from '../components/pages/studyvue5.vue' 
  import studyvue6 from '../components/pages/studyvue6.vue'
  import studyvue7 from '../components/pages/studyvue7.vue'
  import studyvue8 from '../components/pages/studyvue8.vue'
  import studyvue9 from '../components/pages/studyvue9.vue'
  import studyvue10 from '../components/pages/studyvue10.vue'
  import studyvue11 from '../components/pages/studyvue11.vue'
  import studyvue12 from '../components/pages/studyvue12.vue'
  import studyvue13 from '../components/pages/studyvue13.vue'
  import studyvue14 from '../components/pages/studyvue14.vue'
  import studyvue15 from '../components/pages/studyvue15.vue'
  import studyvue16 from '../components/pages/studyvue16.vue'
  import studyvue17 from '../components/pages/studyvue17.vue'
  import studyvue18 from '../components/pages/studyvue18.vue'
  import studyvue19 from '../components/pages/studyvue19.vue'
  import studyvue20 from '../components/pages/studyvue20.vue'
  import studyvue21 from '../components/pages/studyvue21.vue'
  
  
  export default {
    name: 'App',
    components: {
      studyvue1,studyvue2,studyvue3,studyvue4,studyvue5,studyvue6,studyvue7,studyvue8,studyvue9,studyvue10,
      studyvue11,studyvue12,studyvue13,studyvue14,studyvue15,studyvue16,studyvue17,studyvue18,studyvue19,studyvue20,
      studyvue21,
    },
    data(){
      return{
        titlemsg:'vue学习7:props组件交互',
        msg:'kkk',
      }
    },
    methods:{
      //handleEvent函数接收子组件的data数据，并把数据传递给父组件的msg变量
      handleEvent(msg){
        this.msg = msg;
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .studyvue{
      text-align: left;
  }
  </style>
  