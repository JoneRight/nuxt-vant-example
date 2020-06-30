/*
 * @Author: 张平
 * @Date: 2019-03-11 13:55:34
 * @Last Modified by: 张平
 * @Last Modified time: 2020-06-12 11:13:45
 */

// eslint-disable-next-line import/no-mutable-exports
let baseUrl

if (process.env.NODE_ENV === 'production') {
  // 生产环境
  baseUrl = '/'
} else {
  // 测试环境
  baseUrl = ''
}

export { baseUrl }
