import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'
import home from './modules/home'
import interviewList from './modules/interviewList'
import address from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        interviewList,
        address
    },
    plugins:[CreateLogger()]
})
