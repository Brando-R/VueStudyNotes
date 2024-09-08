<template>
    <div class="studyvue">
        <h1>{{titlemsg}}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① v-on 指令：绑定事件监听器，可以监听用户的操作，触发相应的事件。可用@代替。v-on: 或 @ 后面接事件名，冒号后面接事件处理函数。</h3>
        <button v-on:click="clickaddone">点击我count+1</button>
        <p>count: {{ count }}</p>
        <h3>② @click="clickbefore" 指令:绑定单击事件,若函数clickbefore(event) , clickbefore(event)函数中的event是button的事件对象(button中的值)。</h3>
        <button @click="clickbefore">点击我</button>
        <h3>③ 事件传递参数 @click="clicktransfer('hi')" 直接传递参数给clicktransfer函数。</h3>
        <button @click="clicktransfer('hi')">say hi</button>
        <h3>④ 案例演示: 绑定事件到列表中</h3>
        <ul v-for="(item,index) in names" :key="index">
            <li @click="clicktransfer('hi '+ item)">{{ item }}</li>
        </ul>
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
            names:['张三','李四','王五'],
        }
    },
    methods:{
        clickaddone(){
            //读取data中的元素时需要用this
            this.count++;
        },
        clickbefore(event){
            //event是button的事件对象
            if(event.target.innerText==='点击我')
                event.target.innerText = "我被点击了";
            else
                event.target.innerText = "点击我";
        },
        clicktransfer(msg){
            alert(msg);
        }
    },
}
</script>

<style>

</style>