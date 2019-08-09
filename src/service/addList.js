import fly from '@/utils/request';
//登录接口
export let addlist = (params) => {
    console.log('params...',params)
    return fly.post('/sign', params)
}