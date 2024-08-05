<template>
    <div class="studyvue4">
        <h1>{{titlemsg}}</h1>
        <h3>① v-on 指令：绑定事件监听器，可以监听用户的操作，触发相应的事件。可用@代替。v-on: 或 @ 后面接事件名，冒号后面接事件处理函数。</h3>
        <button v-on:click="clickaddone">点击我count+1</button>
        <p>count: {{ count }}</p>
    </div>
</template>


<script>
export default{
    name: "studyvue4",
    props:{
        titlemsg: String,
    },
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        clickaddone(){
            this.count++;
        }
    }
}
</script>

<style>
.studyvue4{
    text-align: left;
}
</style>