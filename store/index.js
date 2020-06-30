/*
 * @Author: 张平
 * @Date: 2019-09-05 10:02:34
 * @Last Modified by:   张平
 * @Last Modified time: 2019-09-05 10:02:34
 */

export const state = () => ({
  userInfo: {},
})

export const mutations = {
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
}

export const actions = {
  setUserInfo({ commit }) {
    const userInfo = {
      id: 1,
      name: 'zp',
    }
    commit('SET_USERINFO', userInfo)
  },
}
