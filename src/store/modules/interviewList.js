import { getViewList, getDetail, putsignDetail } from '../../service'
const moment = require('moment');

function formatTime(start_time) {
    return moment(start_time * 1).format('YYYY-MM-DD HH:mm');
};

export default {
    //命名空间
    namespaced: true,
    state: {
        status: 1,
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
        obj: {},
        id: 0
    },
    mutations: {
        updateList(state, payload) {
            // console.log(',,,,',payload)
            state.list = payload

        },
        updateDetail(state, payload) {
            state.obj = { ...state.obj, ...payload };
            state.id = payload.id
        },
    },
    actions: {
        async getList({ commit }, params) {
            // console.log('p...',params)
            const res = await getViewList(params);
            //数据中的字符串转成对象
            res.data.map(item => {
                item.address = JSON.parse(item.address);
                item.start_time = formatTime(item.start_time);
            })
            if (params.page === 1) {
                commit('updateList', res.data)
            } else {
                commit('updateList', [...state.list, ...res.data])
            }
        },
        //详情
        async getDetail({ commit }, params) {
            const res = await getDetail(params);
            commit('updateDetail', res.data)
        },
        //更新面试信息接口
        async putDetail({ commit }, params) {
            const res = await putsignDetail(params.id, params.params);
            if (res.data.code === 0) {
                dispatch('getDetail', params.id)
            }
            resolve(data);
        }
    },
}