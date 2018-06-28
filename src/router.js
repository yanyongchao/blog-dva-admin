import React from 'react'
import { Route, Switch, routerRedux, Redirect } from 'dva/router'
import { notLayoutRouterMap, layoutRouterMap } from '@/router/config'
import Layout from '@/pages/common/layout'
import AuthRoute from './router/authRoute'

const { ConnectedRouter } = routerRedux

const renderRouteComponent = routes =>
  routes.map((route, index) => {
    if (route.auth) {
      return <AuthRoute key={index} {...route} />
    } else {
      return (
        // <Route key={index} {...rest} render={props => <Component {...props} />} />
        <Route key={index} {...route} />
      )
    }
    // return <Route key={index} {...route} />
  })

function RouterConfig({ history, app }) {
  const notLayoutRouter = notLayoutRouterMap(app)
  const layoutRouter = layoutRouterMap(app)
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  )
}

export default RouterConfig
