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
            state.current = { ...state.current, ...payload };
        }
    },
    actions: {
        async submitInterview({ commit }, {...params}) {
            return new Promise(async (resolve)=>{
                // 填充经纬度
               params.latitude = params.address.location.lat;
               params.longitude = params.address.location.lng;
               // 序列号地址
               params.address = JSON.stringify(params.address);
               let result = await addlist(params);
               console.log('result',result)
               resolve(result);
             })
        }
    }
}