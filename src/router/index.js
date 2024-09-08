import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

//配置路径和组件映射关系
const routes=[
    {
        path:'/',     //路由路径
        name:'Home',    //路由名称
        component:Home      //路由组件名称
    },
    {
        path:'/sv1/:titlemsg',
        name:'studyvue1',
        //异步加载组件
        component:()=>import('../components/pages/studyvue1.vue')
    },
    {
        path:'/sv2/:titlemsg',
        name:'studyvue2',
        component:()=>import('../components/pages/studyvue2.vue')
    },
    {
        path:'/sv3/:titlemsg',
        name:'studyvue3',
        component:()=>import('../components/pages/studyvue3.vue')
    },
    {
        path:'/sv4/:titlemsg',
        name:'studyvue4',
        component:()=>import('../components/pages/studyvue4.vue')
    },
    {
        path:'/sv5/:titlemsg',
        name:'studyvue5',
        component:()=>import('../components/pages/studyvue5.vue')
    },
    {
        path:'/sv6/:titlemsg',  
        name:'studyvue6',
        component:()=>import('../components/pages/studyvue6.vue')
    },
    {
        path:'/sv7/:titlemsg',
        name:'studyvue7',
        component:()=>import('../components/pages/studyvue7.vue')
    },
    {
        path:'/sv8/:titlemsg',
        name:'studyvue8',
        component:()=>import('../components/pages/studyvue8.vue')
    },
    {
        path:'/sv9/:titlemsg',
        name:'studyvue9',
        component:()=>import('../components/pages/studyvue9.vue')
    },
    {
        path:'/sv10/:titlemsg',
        name:'studyvue10',
        component:()=>import('../components/pages/studyvue10.vue')
    },
    {
        path:'/sv11/:titlemsg',
        name:'studyvue11',
        component:()=>import('../components/pages/studyvue11.vue')
    },
    {  
        path:'/sv12/:titlemsg',
        name:'studyvue12',
        component:()=>import('../components/pages/studyvue12.vue')
    },
    {
        path:'/sv13/:titlemsg',
        name:'studyvue13',
        component:()=>import('../components/pages/studyvue13.vue')
    },
    {
        path:'/sv14/:titlemsg',
        name:'studyvue14',
        component:()=>import('../components/pages/studyvue14.vue')
    },
    {
        path:'/sv15/:titlemsg',
        name:'studyvue15',
        component:()=>import('../components/pages/studyvue15.vue')
    },
    {
        path:'/sv16/:titlemsg',
        name:'studyvue16',
        component:()=>import('../components/pages/studyvue16.vue'),
        children:[
            {
                path:"sv16-1",  //子路由路径不需要在开头加‘/’
                component:()=>import('../views/sv16sub/sv16-1.vue'),
            },
            {
                path:"sv16-2",
                component:()=>import('../views/sv16sub/sv16-2.vue'),
            },
        ]
    },
    {
        path:'/sv17/:titlemsg',
        name:'studyvue17',
        component:()=>import('../components/pages/studyvue17.vue')
    },
    {
        path:'/sv18/:titlemsg',
        name:'studyvue18',
        component:()=>import('../components/pages/studyvue18.vue')
    },
    {
        path:'/sv19/:titlemsg',
        name:'studyvue19',
        component:()=>import('../components/pages/studyvue19.vue')
    },
    {
        path:'/sv20/:titlemsg',
        name:'studyvue20',
        component:()=>import('../components/pages/studyvue20.vue')
    },
    {
        path:'/sv21/:titlemsg',
        name:'studyvue21',
        component:()=>import('../components/pages/studyvue21.vue')
    },
    {
        path:'/about',    
        name:'About',
        component:About
    }
]
const router=createRouter({
    /**
     *      createWebHashHistory()方法：
     *          home：http://localhost:8080/#/
     *          about：http://localhost:8080/#/about
     *          这种方式的好处是：
     *              无需在服务端配置重定向，前端路由和后端路由可以共用一个路径
     *              刷新页面不会丢失当前的路由状态
     *          缺点：
     *              刷新页面后，会出现两个相同的路由，导致页面闪烁
     **/ 

     /**      
     *       createWebHistory()方法：
     *          home：http://localhost:8080/
     *          about：http://localhost:8080/about
     *          这种方式的好处是：
     *              刷新页面不会丢失当前的路由状态
     *          缺点：
     *              需要后台配置重定向，否则会出现404错误
     *              
     **/

    //统一写法
    history:createWebHashHistory(),
    routes
})

export default router