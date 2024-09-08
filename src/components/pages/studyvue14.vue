<template>
    <div class="studyvue">
        <h1>{{ titlemsg }} 步骤：</h1>
        <h1>{{ $route.params.titlemsg }} 步骤：</h1>
        <h3>① 安装路由插件 vue-router: npm install vue-router --save</h3>
        <h3>② 创建并配置路由文件 src/router/index.js (具体看index.js)</h3>
        <ul>
            <li>引入vue-router : import { createRouter, createWebHashHistory } from 'vue-router'</li>
            <li>创建路由实例(具体看index.js) : const router = createRouter({...})</li>
            <li>配置路径和组件映射(具体看index.js) : router.addRoute({ path: '/', component: Home }) <-其中一种</li>
        </ul>
        <h3>③ export default router</h3>
        <h3>④ 在 main.js 中引入并使用路由实例(具体看main.js): app.use(router).mount('#app')</h3>
        <h3>⑤ 在 组件 中定义路由视图</h3>
        <ul>
            <li> router-link 组件用于定义路由链接,to 属性指定目标路由</li>
            <li> router-view 组件用于渲染当前路由匹配的组件(显示当前路由匹配的组件)</li>
        </ul>
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'StudyVue14',
    props: {
        titlemsg: {
            type: String,
            // default: 'Hello Vue 14'
        }
    },
    data() {
        return {
           
        }
    },
    
}
</script>