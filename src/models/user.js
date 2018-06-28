import { routerRedux } from 'dva/router'
import { signIn, access } from '@/services/api'
import { DVA_ADMIN_BLOG } from '../constants'

export default {
  namespace: 'user',

  state: {
    jwt: localStorage.getItem(DVA_ADMIN_BLOG)
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(signIn, payload)
      let { token } = response.data
      localStorage.setItem(DVA_ADMIN_BLOG, token)
      yield put({
        type: 'setUserInfo',
        payload: { jwt: token }
      })
      yield put(routerRedux.push('/home'))
    },
    *checkAccess({ payload }, { call }) {
      yield call(access)
    }
  },

  reducers: {
    setUserInfo(state, action) {
      return { ...state, ...action.payload }
    },
    logout(state, action) {
      localStorage.setItem(DVA_ADMIN_BLOG, '')
      return { ...state, jwt: '' }
    }
  }
}
