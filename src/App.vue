<template>
  <studyvue1 titlemsg="vue学习1:模板语法"/>
  <studyvue2 titlemsg="vue学习2:条件渲染"/>
  <studyvue3 titlemsg="vue学习3:列表渲染"/>
  <studyvue4 titlemsg="vue学习4:事件处理"/>
</template>

<script>
import studyvue1 from './components/studyvue1.vue'
import studyvue2 from './components/studyvue2.vue'
import studyvue3 from './components/studyvue3.vue'
import studyvue4 from './components/studyvue4.vue'
export default {
  name: 'App',
  components: {
    studyvue1,
    studyvue2,
    studyvue3,
    studyvue4,
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
</style>
