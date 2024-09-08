<template>
    <h1>{{titlemsg}}</h1>
    <h1>{{ $route.params.titlemsg }}</h1>
    <h3>① 使用集中式管理方案,将资源单独放在一个文件中.方便进行读取和管理数据</h3>
    <h4>第一步: 安装vuex: npm install --save vuex</h4>
    <h4>第二步: 创建../src/store目录,并在其中创建index.js文件(具体看index.js文件内容)</h4>
    <h4>第三步: 在main.js中引入store并挂载到Vue实例上</h4>
    <h4>第四步: 在组件中获取数据</h4>
    <ul>
        <li>① count: {{this.$store.state.count}}</li>
        <!-- 之后在代码中可直接双括号用 -->
        <li>② 见代码 count: {{count}}</li>
    </ul>
</template>
<script>
// 导入mapState辅助函数
import { mapState } from 'vuex';

export default {
    name: 'StudyVue17',
    props:{
        titlemsg: String,
    },
    //专门用于读取vuex的数据
    computed:{
        ...mapState(['count'])
    }
}
</script>