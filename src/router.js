import React from 'react'
import { Route, Switch, routerRedux, Redirect } from 'dva/router'
import { notLayoutRouterMap, layoutRouterMap } from '@/router/config'
import App from './app'
import Layout from '@/pages/common/layout'

const { ConnectedRouter } = routerRedux

const renderRouteComponent = routes =>
  routes.map((route, index) => {
    let { component: Component, ...rest } = route
    return (
      <Route key={index} {...rest} render={props => <Component {...props} />} />
    )
  })

function RouterConfig({ history, app }) {
  const notLayoutRouter = notLayoutRouterMap(app)
  const layoutRouter = layoutRouterMap(app)
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {renderRouteComponent(notLayoutRouter)}
          <Route path="/">
            <Layout>
              <Switch>
                {renderRouteComponent(layoutRouter)}
                <Route path="/" exact render={() => <Redirect to="/home" />} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default RouterConfig
