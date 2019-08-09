import { decrypt } from '@/service'

export default {
    //命名空间
    namespaced: true,
    state: {
        openid: [],
        phone: ''
    },
    mutations: {
        updateOpenid(state, payload) {
            state.openid = payload
        },
        updatePhone(state, payload) {
            // console.log(payload,'444')
            state.phone = payload.phoneNumber
            // console.log(state.phone,'777')
        }
    },
    actions: {
        async getDecrypt({ commit }, payload) {
            const res = await decrypt(payload);
            commit("updatePhone", res.data)
        }
    }
}