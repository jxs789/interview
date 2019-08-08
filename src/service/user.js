import fly from '@/utils/request';
//登录接口
export let login = code => {
    return fly.post('/user/code2session', { code })
}