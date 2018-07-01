import { getArticlesRes } from '../services/api'

export default {
  namespace: 'article',
  state: {
    list: [],
    item: {
      
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const res = yield call(getArticlesRes)
      yield put({
        type: 'save',
        payload: {
          list: res.data.articles
        }
      })
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
