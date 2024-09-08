<template>
    <div class="studyvue">
        <h1>{{titlemsg}}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 数据传递，在父组件中通过 props 传递数据给子组件，子组件通过 props 接收数据。(不可反向传递)</h3>
        <p>父组件的<>中写入传递的信息： titlemsg="vue学习7:props组件交互", 子组件的props中接收</p>
        <p>props:{
                titlemsg:{
                    type(数据类型):String,
                    default(默认值): "vue学习7:props组件交互"
                }
            },
        </p>
        <h3>①.1 titlemsg="titlemsg"传递字符串"titlemsg",:titlemsg="titlemsg"传递已定义的数据变量titlemsg</h3>
    </div>
</template>

<script>
export default {
    name: "studyvue7",
    props:{
        titlemsg:{
            type:String,    //数据类型
            // default: "vue学习7:props组件交互"   //默认值
        }
    },
    data() {
        return {

        }
    },
}
</script>