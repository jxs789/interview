import fly from '@/utils/request';
//登录接口
export let getViewList = (params) => {
    if (params.status === 2) {
        return fly.get('/sign', { page: params.page, pageSize: params.pageSize })
    } else {
        return fly.get('/sign', params)
    }
}

//详情
export let getDetail = (id) => {
    return fly.get(`/sign/${id}`)
}

//更新面试信息接口
export let putsignDetail = (id, params) => {
    console.log('9999', id, params)
    return fly.put('/sign/' + id, params);
}