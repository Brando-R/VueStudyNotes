<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>① Swiper 触摸滑动切换插件</h3>
        <ul>
            <ol>1. 安装swiper插件:npm install --save swiper@8.1.6 </ol>
            <ol>2. 导入swiper插件:import {Swiper, SwiperSlide} from'swiper/vue' <br>import 'swiper/css'</ol>
            <ol>3. 在components中注册Swiper组件:components: {Swiper, SwiperSlide} </ol>
            <ol>4. 在template中使用Swiper组件: <br>&lt;swiper&gt; <br>&nbsp;&nbsp;&lt;swiper-slide&gt;slide1&lt;/swiper-slide&gt; <br>&nbsp;&nbsp;&lt;swiper-slide&gt;slide2&lt;/swiper-slide&gt; <br>&nbsp;&nbsp;&lt;swiper-slide&gt;slide3&lt;/swiper-slide&gt; <br>&lt;/swiper&gt; </ol>
        </ul>
        <Swiper >
            <swiper-slide>slide1</swiper-slide>
            <swiper-slide>slide2</swiper-slide>
            <swiper-slide>slide3</swiper-slide>
        </Swiper>
        <h3>② 指示器的添加(大问题，还没解决)</h3>
        <ul>
            <ol>1. 导入pagination组件:import {pagination} from 'swiper'  &nbsp;&nbsp;import 'swiper/css/pagination'</ol>
            <ol>2. 在data中返回modules: modules: [pagination] </ol>
            <ol>3. 在swiper组件中添加 </ol>
            
        </ul>
        <h3>③ 怎么寻找插件, 在github上搜,或者官网,或者vue2的资源市场</h3>

    </div>
</template>

<script>
import {pagination} from 'swiper'
import {Swiper, SwiperSlide} from'swiper/vue' 
import 'swiper/css'
import 'swiper/css/pagination'

export default {
    name: "studyvue10",
    props:{
        titlemsg: {
            type: String,
            // default: "Hello Vue ",
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data(){
        return{
            modules: [pagination],
        }
    },
}
</script>