import QQMapWX from '@/utils/qqMapwx.js'
// 实例化API核心类
var qqMapSdk = new QQMapWX({
    key: 'M54BZ-MBORV-CPCPG-UKZD2-XBJPZ-ZQFVX' // 必填
});

export default {
    //命名空间
    namespaced: true,
    state: {
        addressData:[]
    },
    mutations: {
        updateAddress(){
            
        }
    },
    actions: {
        getSuggestion({ commit }, payload) {
            qqMapSdk.getSuggestion({
                keyword: payload,
                success: res => {
                    console.log('res...', res);
                }
            })
        }
    }
}