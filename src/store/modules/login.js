import { login as loginApi, logout, getUserInfo } from '@/api/auth'
import {
  getLoginStatus,
  setLoginStatus,
  removeLoginStatus,

  getToken,
  setToken,
  removeToken,

  setUserId,
  getUserId,
  removeUserId
  // getExpireIn,
  // setExpireIn,
  // removeExpireIn,
} from '@/utils/auth'

const login = {
  namespaced: true,
  state: {
    loginStatus: getLoginStatus() === 'true',
    token: getToken(),
    userId: getUserId() || 'GUEST',
    username: 'GUEST',
    userAvatar: require(`@/assets/images/profile/azjm9-rfkrb.png`)
    // expireIn: getExpireIn(),
    // doRefresh: false
    // errorCount: null
    // accountLock: {
    //   isLock: false,
    //   accountName: '',
    //   mobilePhone: ''
    // },
    // expireTime: null,
    // sendTime: null
  },
  mutations: {
    SET_LOGIN_STATUS: (state, status) => {
      state.loginStatus = status
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    SET_USER_NAME: (state, username) => {
      state.username = username
    },
    SET_USER_NICKNAME: (state, nickName) => {
      state.nickName = nickName
    }
    // SET_REFRESH_TOKEN: (state, refreshToken) => {
    //   state.refreshToken = refreshToken
    // },
    // SET_EXPIRE_IN: (state, expireIn) => {
    //   state.expireIn = expireIn
    // },
    // SET_DO_REFRESH: (state, status) => {
    //   state.doRefresh = status
    // },
    // SET_ERROR_COUNT: (state, errorCount) => {
    //   state.errorCount = errorCount
    // },
    // SET_ACCOUNT_LOCK: (state, data) => {
    //   state.accountLock = data
    // },
    // SET_EXPIRE_TIME: (state, expireTime) => {
    //   state.expireTime = expireTime === 60 ? expireTime - 1 : expireTime
    //   state.sendTime = new Date()
    // }
  },
  actions: {
    async PostLogin({ commit }, auth) {
      try {
        const data = await loginApi(auth)
        commit('SET_LOGIN_STATUS', true)
        commit('SET_TOKEN', data.token)
        commit('SET_USER_ID', data.userId)
        setToken(data.token)
        setLoginStatus(true)
        setUserId(data.userId)
        console.log('data', data)
        // setExpireIn(expireIn)
        return data
      } catch (error) {
        console.warn(error)
        return error
      }
    },
    async PostLogOut({ commit, dispatch, state }) {
      try {
        const data = await logout({ token: state.token })
        commit('SET_LOGIN_STATUS', false)
        commit('SET_TOKEN', '')
        commit('SET_USER_ID', '')
        removeLoginStatus()
        removeToken()
        removeUserId()
        return data
      } catch (error) {
        alert(error)
        throw error
      }
    },
    async GetUserInfo({ commit, dispatch, state }) {
      try {
        const data = await getUserInfo({ token: state.token })
        commit('SET_USER_NAME', data.username)
        commit('SET_USER_NICKNAME', data.nickName)
        return data
      } catch (error) {
        alert(error)
        throw error
      }
    },
    LogOut({ commit, dispatch, state }) {
      commit('SET_LOGIN_STATUS', false)
      commit('SET_TOKEN', '')
    }
  }
}

export default login
