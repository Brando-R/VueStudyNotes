<template>
    <div class="studyvue">
    <router-link to="/">Home</router-link><br>
    <router-link to="/sv1/vue学习1:模板语法">学习vue1:模板语法</router-link>&nbsp;
    <router-link to="/sv2/vue学习2:条件渲染">学习vue2:条件渲染</router-link>&nbsp;
    <router-link to="/sv3/vue学习3:列表渲染">学习vue3:列表渲染</router-link>&nbsp;
    <router-link to="/sv4/vue学习4:事件处理">学习vue4:事件处理</router-link>&nbsp;
    <router-link to="/sv5/vue学习5:表单输入绑定">学习vue5:表单输入绑定</router-link>&nbsp;
    <router-link to="/sv6/vue学习6:组件通信">学习vue6:组件通信</router-link>&nbsp;
    <router-link to="/sv7/vue学习7:props组件交互">学习vue7:props组件交互</router-link>&nbsp;
    <router-link to="/sv8/vue学习8:自定义事件组件交互">学习vue8:自定义事件组件交互</router-link>&nbsp;
    <router-link to="/sv9/vue学习9:组件生命周期">学习vue9:组件生命周期</router-link><br>
    <router-link to="/sv10/vue学习10:Vue引入第三方">学习vue10:Vue引入第三方</router-link>&nbsp;
    <router-link to="/sv11/vue学习11:Axios网络请求">学习vue11:Axios网络请求</router-link>&nbsp;
    <router-link to="/sv12/vue学习12:axios网络请求封装">学习vue12:axios网络请求封装</router-link>&nbsp;
    <router-link to="/sv13/vue学习13:网络请求跨域解决方案">学习vue13:网络请求跨域解决方案</router-link>&nbsp;
    <router-link to="/sv14/vue学习14:Vue引入路由配置">学习vue14:Vue引入路由配置</router-link>&nbsp;
    <router-link to="/sv15/vue学习15:路由传递参数">学习vue15:路由传递参数</router-link>&nbsp;
    <router-link to="/sv16/vue学习16:嵌套路由配置">学习vue16:嵌套路由配置</router-link><br>
    <router-link to="/sv17/vue学习17:Vue状态管理">学习vue17:Vue状态管理</router-link>&nbsp;
    <router-link to="/sv18/vue学习18:Vue状态管理核心">学习vue18:Vue状态管理核心</router-link>&nbsp;
    <router-link to="/sv19/vue学习19:Vue3新特性1">学习vue19:Vue3新特性1</router-link>&nbsp;
    <router-link to="/sv20/vue学习20:Vue3新特性2">学习vue20:Vue3新特性2</router-link>&nbsp;
    <router-link to="/sv21/vue学习21:Vue3加载Element-plus">学习vue21:Vue3加载Element-plus</router-link>&nbsp;
    
    <router-view></router-view>
  </div>
  </template>

  <script>
  import { provide } from 'vue'
  export default {
    name: 'Apptoo',
    setup(){
      //用provide方法向所有子孙组件提供一个msg变量
      provide('msg','这是一段从父组件传递给子组件的消息')
      return {

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
  