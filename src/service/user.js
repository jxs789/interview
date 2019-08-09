import fly from '@/utils/request';
//登录接口
export let login = code => {
    console.log(code,'login')
    return fly.post('/user/code2session', { code })
}

//解密数据
export let decrypt = (params) => {
    console.log(params,'p....')
    return fly.post('/user/decrypt',params )
}