import { routerRedux } from 'dva/router'
import { signIn } from '@/services/api'

export default {
  namespace: 'user',

  state: {
    jwt: ''
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
      localStorage.setItem('dva.admin.blog', token)
      yield put({
        type: 'setUserInfo',
        payload: { jwt: token }
      })
      yield put(routerRedux.push())
    }
  },

  reducers: {
    setUserInfo(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
