<template>
  <div class="studyvue">
    <h1>{{ titlemsg }}</h1>
    <h1>{{ $route.params.titlemsg }}</h1>
    <!-- 1.双大括号的用处 -->
    <h3>①双大括号的用处:massage: {{ massage }}</h3>
    <!-- 2.使用v-html渲染的方法 -->
    <h3>②使用v-html渲染的方法(把rawhtml写到v-html中):</h3>
    <p>2.1 直接把rawhtml直接写到双大括号中: {{ rawhtml }}</p>
    <div>2.2 使用v-html渲染的方法(把rawhtml写到v-html中):<span v-html="rawhtml"></span></div>
    <!-- 3.使用v-bind绑定属性 -->
    <h3 v-bind:id="idstyle">③使用v-bind给元素绑定属性: v-bind:id="idstyle" (v-bind:可以用:代替) => :id="idstyle"</h3>
    <!-- 3.1 属性对象绑定-->
    <p v-bind="dataobj">3.1 使用v-bind绑定属性对象: v-bind="dataobj"</p>
    <!-- 4.使用单个JavaScript表达式 -->
    <h3>④使用单个JavaScript表达式(表达式非语句)</h3>
    <p>num:{{ num }}</p>
    <p>num+10:{{ num+10 }}</p>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'studyvue1',
  props:{
    titlemsg: String,
  },
  data(){
    return{
      massage: 'hello world',
      rawhtml: '<p style="color:blue">使用v-html渲染的方法</p>',
      idstyle: 1001,
      num: 10,
      dataobj:{
        id: 1001,
        class: 'vuestudy1',
        style: 'color:purple'
      }
    }
  }
}
</script>
<style>

</style>

