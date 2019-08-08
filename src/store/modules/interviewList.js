import { getViewList } from '../../service'
export default {
    //命名空间
    namespaced: true,
    state: {
        navList: [{
            title: "未开始",
            status: -1
        },
        {
            title: "已打卡",
            status: 0
        },
        {
            title: "已放弃",
            status: 1
        },
        {
            title: "全部",
            status: 2
        }],
        list: [],
        ind: 0
    },
    mutations: {
        // updateList(state, payload) {
        //     // console.log('pay...',payload)
        //     state.list = payload
        // }
    },
    actions: {
        async getList({ state }, params) {
            console.log('par...',params)
            const res = await getViewList(params);
            res.data.map(item => {
                item.address = JSON.parse(item.address);
                item.start_time = new Date(Number(item.start_time)).toLocaleString();
            })
            if (params.page === 1) {
                state.list = res.data
            } else {
                state.list = [...state.list, ...res.data];
            }
            // commit('updateList',res.data)
            // console.log(res)
            console.log('state...', state)
        },
    }
}