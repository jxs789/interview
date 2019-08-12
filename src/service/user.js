import fly from '@/utils/request';
//登录接口
export let login = code => {
    // console.log(code,'login')
    return fly.post('/user/code2session', { code })
}

//解密数据
export let decrypt = (params) => {
    return fly.post('/user/decrypt', params)
}

//生物认证
export let fingerPrint = (params) => {
    console.log(params,'params...')
    return fly.post('/user/fingerPrint', params)
}
