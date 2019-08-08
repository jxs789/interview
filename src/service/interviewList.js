import fly from '@/utils/request';
//登录接口
export let getViewList = (params) => {
    // console.log('ser...',params)
    return fly.get('/sign',params)
}