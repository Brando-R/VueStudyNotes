<template>
    <h1>{{titlemsg}}</h1>
    <h1>{{ $route.params.titlemsg }}</h1>
    <h3>① 组合式API(将内容写到setup函数中)(setup函数可以放在js中也可以放在export default中)</h3>
    <h3>② ref和reactive创建的变量</h3>
    <ul>
        <li>ref创建的简单变量</li>
        <li>reactive创建的对象(复杂变量)</li>
    </ul>
    <p>{{msg}}</p>
    <ul v-for="(item,index) in names.list" :key="index">
        <li>{{item}}</li>
    </ul>
    <h3>③ methods中的方法写到setup函数中</h3>
    <button @click="changeMsg">点击改变msg的值(方法一)</button>
    <button @click="changeMsg2">点击改变msg的值(方法二)</button>
    <h3>④ setup()中使用props和context</h3>
    <p>{{title}}</p>
    <p>setup()中没有this,context可以获取到this,setup()中定义的变量可以直接使用</p>
</template>
<script>
import { ref , reactive } from 'vue'
export default {
    name: 'StudyVue18',
    props:{
        titlemsg: {
            type: String,
            default: "setup()中使用props的内容前,必须先在props中声明,然后在setup()中使用"
        }
    },
    //组合式API
    setup(props,context){
        //ref创建的简单变量
        const msg=ref("这是一条用ref创建的消息,ref创建的简单变量");
        //reactive创建的对象（复杂变量）
        const names=reactive({
            list:['这是一条用reactive创建的消息,reactive创建的对象(复杂变量)','张三','李四','王五'],
        });
        //methods中的方法写到setup函数中(方法一)
        const changeMsg=()=>{
            msg.value="使用方法一改变msg的值";
        };
        //methods中的方法写到setup函数中(方法二)
        function changeMsg2(){
            msg.value="使用方法二改变msg的值";
        };
        //setup()中使用props和context
        //setup()中使用props的内容前，必须先在props中声明，然后在setup()中使用,之后在return中返回
        const title=props.titlemsg;
        //setup()中没有this,context可以获取到this
        console.log(context);
        return{
            msg,
            names,
            changeMsg,
            changeMsg2,
            title,
        }
    },
}
</script>