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
