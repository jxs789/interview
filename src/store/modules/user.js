import { decrypt, fingerPrint } from '@/service'

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
            state.phone = payload.phoneNumber
        }
    },
    actions: {
        async getDecrypt({ commit }, payload) {
            const res = await decrypt(payload);
            commit("updatePhone", res.data)
        },
        async getfinger({ commit }, payload) {
            console.log(payload, 'pay....')
            const res = await fingerPrint(payload);
            console.log(res)
            // commit("updatePhone", res.data)
        },
    }
}