<template>
    <h1>{{titlemsg}}</h1>
    <h1>{{ $route.params.titlemsg }}</h1>
    <h3>① 在setup中使用生命周期函数:onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted</h3>
    <ul>
        <ol>✳比以前有优势，以前只能写一个生命周期函数，现在可以写多个</ol>
        <li>写在setup()内</li>
        <li>需要import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'</li>
        <li>需要在return中返回数据</li>
    </ul>
    <h3>② provide/inject实现跨组件通信:只能父组件向子组件或孙组件传递数据,或向孙组件的子组件传递数据</h3>
    <p>{{ msg }}</p>
</template>
<script>
import { onMounted } from 'vue';
import {  inject } from 'vue';
export default {
    name: "studyvue20",
    props: {
        titlemsg: {
            type: String,
        }
    },
    setup() {
        //比以前有优势，以前只能写一个生命周期函数，现在可以写多个
        onMounted(()=>{
            console.log('onMounted1');
            
        })
        onMounted(()=>{
            console.log('onMounted2');
        })
        //用inject接收父组件的msg数据
        const msg=inject('msg');
        return{
            onMounted,
            msg,
        }
    },
}
</script>