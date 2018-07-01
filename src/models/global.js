import { access, getCategoriesRes, getClassificationsRes } from '@/services/api'

export default {
  namespace: 'global',

  state: {
    categories: [],
    classifications: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      const categoriesRes = yield call(getCategoriesRes)
      const classificationsRes = yield call(getClassificationsRes)
      yield put({
        type: 'save',
        payload: {
          categories: categoriesRes.data.categories,
          classifications: classificationsRes.data.classifications
        }
      })
    },
    *checkAccess({ payload }, { call }) {
      yield call(access)
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
