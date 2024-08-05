<template>
    <div class="studyvue3">
        <h1>{{ titlemsg }}</h1>
        <!-- 1. v-for 循环 -->
        <h3>① v-for 循环</h3>
        <p>v-for 指令可以遍历数组或对象，并对每个元素进行渲染。" v-for="item in items" ", :key="item.id" 用来给每个元素添加一个唯一标识，以便 Vue 能跟踪每个节点的变化。</p>
        <ul v-for="item in items" :key="item.id">
            <li>{{ item.id }} - {{ item.name }}</li>
        </ul>
    </div>
    
</template>

<script>
export default{
    name: "studyvue3",
    props:{
        titlemsg: String,
    },
    data(){
        return{
            items:[
                {id: 1001,name: "apple"},
                {id: 1002,name: "banana"},
                {id: 1003,name: "orange"}
            ]
        }
    }
}
</script>

<style>
.studyvue3{
    text-align: left;
}
</style>