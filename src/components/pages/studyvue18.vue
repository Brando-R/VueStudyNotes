<template>
    <h1>{{titlemsg}}</h1>
    <h1>{{ $route.params.titlemsg }}</h1>
    <h3>常用核心概念:State,Getter,Mutation,Action</h3>
    <h3>① Getter: getters下放入计算属性,可对vue中的数据进行计算或过滤,用于获取state中的数据,不允许修改state中的数据,只能读取</h3>
    <p>couter={{ $store.getters.getCount }}</p>
    <p>{{ getCount }}</p>
    <h3>② Mutation: mutations下放入修改state的函数,用于修改state中的数据,只可同步,可在组件的methods中调用,修改state中的数据</h3>
    <button @click="getaddCouter">点击+1</button>
    <button @click="getaddCouterPlus(15)">点击+30</button>
    <!-- 未找到合适的api操作 -->
    <h3>③ Action: actions下放入异步操作函数(有异步操作才有Action),Action爸数据提交到mutation,然后执行mutation更改数据。</h3>
    <button @click="asyncgetCouter">点击异步操作</button>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
    name: 'StudyVue18',
    props:{
        titlemsg: String,
    },
    computed: {
        //Getter在computed中的使用
        ...mapGetters(['getCount']),
    },
    methods:{
        //Mutation在methods中的使用 方法一
        //无参数
        getaddCouter(){
            this.$store.commit('addCouter')
        },
        //有参数
        getaddCouterPlus(num){
            this.$store.commit('addCouterPlus',num)
            //Mutation在methods中的使用 方法二  （先在函数外定义，再在函数中调用）
            //使用this直接调用
            this.addCouterPlus(num)
        },
        //Mutation在method中调用
        ...mapMutations(['addCouter','addCouterPlus']),

        //Action在methods中的使用 方法一
        asyncgetCouter(){
            this.$store.dispatch('asyncAddCouter')
        }   
    }
        
}
</script>