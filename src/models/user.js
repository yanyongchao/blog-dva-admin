import { routerRedux } from 'dva/router'
import { signIn } from '@/services/api'
import { DVA_ADMIN_BLOG } from '../constants'

export default {
  namespace: 'user',

  state: {
    jwt: localStorage.getItem(DVA_ADMIN_BLOG)
  },

  effects: {
    *login({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(signIn, payload)
      let { token } = response.data
      localStorage.setItem(DVA_ADMIN_BLOG, token)
      yield put({
        type: 'save',
        payload: { jwt: token }
      })
      yield put(routerRedux.push('/article/list'))
    },
    *logout ({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          jwt: ''
        }
      })
      yield put(routerRedux.push('/login'))
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
