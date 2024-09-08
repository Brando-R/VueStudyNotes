import { createApp } from 'vue'
import App from './APPtoo.vue'
import './registerServiceWorker'
import axios from 'axios'
//导入路由
import router from './router'
//导入store
import store from './store'
//引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element-ui的图标
import elementIcon from './plugins/icons'

const app = createApp(App)
//挂载store
app.use(store)
//挂载element-ui
app.use(ElementPlus)
app.use(elementIcon)
//$axios挂载到全局上，可以直接在组件中使用this.$axios来调用axios
app.config.globalProperties.$axios = axios
//use(router) 注册路由
app.use(router).mount('#app')



