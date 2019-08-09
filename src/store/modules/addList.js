import { addlist } from '../../service'

export default {
    //命名空间
    namespaced: true,
    state: {
        current: {
            company: '',
            phone: '',
            address: '',
            description: ''
        }
    },
    mutations: {
        updateItem(state, payload) {
            // console.log('....',payload)
            state.current = { ...state.current, ...payload };
        }
    },
    actions: {
        async submitInterview({ commit }, {...params}) {
            console.log('pay...', params)
            const res = await addlist(params);
            console.log(res)
        }
    }
}