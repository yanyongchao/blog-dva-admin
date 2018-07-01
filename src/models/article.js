import { getArticlesRes, getArticlesByIdRes } from '../services/api'

export default {
  namespace: 'article',
  state: {
    list: [],
    item: {
      category: [],
      classification: '',
      content: '',
      desc: '',
      title: ''
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
    },
    *fetchOne({ payload }, { call, put }) {
      const res = yield call(getArticlesByIdRes, payload.id)
      let { category, classification, content, desc, title } = res.data.article
      yield put({
        type: 'save',
        payload: {
          item: {
            category,
            classification,
            content,
            desc,
            title
          }
        }
      })
    },
    *resetOne({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          item: {
            category: [],
            classification: '',
            content: '',
            desc: '',
            title: ''
          }
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
