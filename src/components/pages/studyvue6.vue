<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① 单文件组件(必有template)</h3>
        <p>一个.vue文件视为一个组件,然后在其他地方引用它。它包含三个部分： template、script、style。</p>
        <ul>
            <li>template:组件的HTML模板,可以包含HTML、JavaScript表达式、数据绑定语法。</li>
            <li>script:组件的JavaScript逻辑,包含data、methods、computed、watch等属性。</li>
            <li>style:组件的CSS样式,可以包含CSS、SCSS、Less、Stylus等。</li>
        </ul>
        <h3>1-1 script中的js业务全部写入export dafault{}中，{}中包含： </h3>
        <ul>
            <li>name:"组件名"</li>
            <li>props:组件的属性,可以接收外部传入的数据,可以用this.$props.propName访问。</li>
            <li>data:组件的状态数据,可以包含任意类型的数据,可以用this.dataName访问。</li>
            <li>methods:组件的方法,可以包含任意的JavaScript函数,可以用this.methodName()调用。</li>
            <li>computed:组件的计算属性,可以包含任意的JavaScript表达式,可以用this.computedName访问。</li>
            <li>watch:组件的监听属性,可以包含任意的JavaScript表达式,当监听的属性发生变化时,会执行表达式。</li>
        </ul>
        <h3>② 加载组件</h3>
        <ul>
            <li>引入组件： import studyvue6 from './components/studyvue6.vue' </li>
            <li>注册组件： components: { studyvue6 } </li>
            <li>显示组件: 在App.vue(或其他组件)中用<>内＋组件名引用，<>内可写入传递数据， 在组件的props属性中定义。</li>
        </ul>
        <h3>③ scoped样式: 在style标签中添加scoped属性,则该样式只作用于当前组件。</h3>
    </div>
</template>

<script>
export default {
    name:"studyvue6",
    props:{
        titlemsg:String,
    },
    data(){
        return{

        }
    },
}
</script>