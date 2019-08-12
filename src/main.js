import Vue from 'vue'
import App from './App'
//引入store
import store from './store'
import './iconfont/iconfont.css'
import MyMap from "./components/map.vue"
Vue.component("MyMap",MyMap)

Vue.config.productionTip = false
App.mpType = 'app'

//挂载store
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
