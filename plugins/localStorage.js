/*
 * @Author: 张平
 * @Date: 2019-09-05 10:02:21
 * @Last Modified by:   张平
 * @Last Modified time: 2019-09-05 10:02:21
 */

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'userInfo',
      paths: ['userInfo'],
      storage: localStorage,
    })(store)
  })
}
