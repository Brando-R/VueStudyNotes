<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 自定义事件实现$emit(子组件向父组件传递数据)</h3>
        <p>父组件中绑定自定义事件，子组件中触发自定义事件，父组件接收到子组件传递的数据。(具体笔记看代码)</p>
        <!-- 子组件中触发自定义事件 -->
        <button @click="sendclickdata">点击触发子组件自定义事件</button>
    </div>
</template>

<script>
export default {
    name: "studyvue8",
    props: {
      titlemsg:{
        type:String,
        // default: "Hello Vue",
        },
    },
    data() {
        return {
            vuename: "studyvue8传递给父组件的数据",
        };
    },
    methods:{
        sendclickdata(){
            //第一个参数是自定义事件名称，在父组件中绑定自定义事件时，需要使用v-on:onevent(@onevent)来监听
            //第二个参数是传递的数据
            this.$emit("onevent",this.vuename);
        }
    }
}
</script>
<!-- scoped表示只对当前组件有效，不会影响全局样式 -->
<style scoped>

</style>
