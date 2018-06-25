import dynamic from 'dva/dynamic'

// wrapper of dynamic
const dynamicWrapper = (app, models, component) =>
  dynamic({
    app,
    // eslint-disable-next-line no-underscore-dangle
    models: () =>
      models
        .filter(m => !app._models.some(({ namespace }) => namespace === m))
        .map(m => import(`../models/${m}.js`)),
    // add routerData prop
    component: () => {
      return component().then(raw => {
        const Component = raw.default || raw
        return props => <Component {...props} />
      })
    }
  })

export default dynamicWrapper
