<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 嵌套路由配置</h3>
        <ul>
            <ol>① 子路由配置(在../router/index.js中配置子路由), 在父路由的 children 属性中配置子路由(详细配置见index.js)</ol>
            <ol>② 在父路由的 template 中使用 router-view 组件来渲染子路由组件</ol>
            <ol>③ 在父路由的 template 中使用 router-link 组件来渲染子路由的链接</ol>
        </ul>
        <!-- 嵌套路由配置,如果有参数传递，同样需要按照参数的顺序进行传递之后才能访问到对应的子路由 -->
        <router-link to="/sv16/vue学习16:嵌套路由配置/sv16-1">sv16-1</router-link>|
        <router-link to="/sv16/vue学习16:嵌套路由配置/sv16-2">sv16-2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'StudyVue16',
    props:{
        titlemsg: String,
    }
}
</script>