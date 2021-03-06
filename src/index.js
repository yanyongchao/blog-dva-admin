import dva from 'dva'
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'
import './assets/css/reset.less'
import './assets/css/common.less'

// 1. Initialize
const app = dva({
  history: createHistory(),
  ...createLoading({ effects: true })
})

// 2. Plugins
app.use(createLoading())

// 3. Model
app.model(require('./models/global').default)
app.model(require('./models/user').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')

// 检查token是否过期
app._store.dispatch({ type: 'user/checkAccess' })
app._store.dispatch({ type: 'global/fetch' })

window.store = app._store

export default app._store // eslint-disable-line
