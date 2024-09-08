<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 在配置路径中,使用冒号(:)来表示参数,如: path:/sv15/:id1/:id2</h3>
        <h3>② 在路由中,可以通过 this.$route.params.id1 和 this.$route.params.id2 获取参数值</h3>
        <h3>③ 在父组件中,可以通过: to='/sv15/123(id1)/456(id2)'</h3>
        <h3>④ 路由参数,在子组件中可以通过双括号内写:  $route.params.id1 </h3>
    </div>
</template>

<script>
export default {
    name: 'StudyVue15',
    props:{
        titlemsg: String,
    }
}
</script>