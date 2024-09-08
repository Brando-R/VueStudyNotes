<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <!-- 1. v-if -->
        <h3> ① v-if</h3>
        <p v-if="flag"> 使用v-if指令可以根据条件判断是否渲染元素 " v-if="flag ", 条件为true时渲染元素,
            使用v-else指令可以为v-if指令提供一个else分支,条件为false时渲染元素</p>
        <p v-else> 条件为false时</p>
        <!-- 2. v-show -->
        <h3> ② v-show</h3>
        <p v-show="flag"> 使用v-show指令可以根据条件判断是否渲染元素 " v-show="flag ", 条件为true时渲染元素(单个出现)</p>
        <p>
            v-show与v-if的区别是, 
            v-show指令始终会渲染元素, 即使条件为false, 它也会保留在DOM中, 
            而v-if指令只会在条件为true时渲染元素, 条件为false时元素会被销毁
        </p>
    </div>
</template>

<script>
export default {
    name: "studyvue2",
    props:{
        titlemsg: String,
    },
    data(){
        return {
            flag: true,
        }
    }
}
</script>

<style>

</style>