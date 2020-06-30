/*
 * @Author: 张平
 * @Date: 2019-03-11 13:58:00
 * @Last Modified by: 张平
 * @Last Modified time: 2019-09-05 17:19:15
 */

import { baseUrl } from '@/config/env.js'
import { Toast } from 'vant'

export default function({ $axios, redirect }) {
  $axios.defaults.baseURL = baseUrl
  $axios.defaults.withCredentials = true
  // $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('timeout', 5000)

  // 拦截器
  $axios.interceptors.request.use(
    config => {
      // config.headers['token'] = getToken() // 请求头带上token
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )

  $axios.interceptors.response.use(
    response => {
      const res = response.data
      console.log('res: ', res)
      if (res.isSuccess === false || res.isSuccess === 'false') {
        // res 回包失败时包装成一个 Error 对象
        const err = new Error(res.msg)
        err.res = res
        return Promise.reject(err)
      }
      return res
    },
    error => {
      Toast(error.message)
      return Promise.reject(error)
    },
  )

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
