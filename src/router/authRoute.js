import React, { Component } from 'react'
import { connect } from 'dva'
import { Route, Redirect, withRouter } from 'dva/router'

class AuthRoute extends Component {
  render() {
    let { component: Component, ...rest } = this.props
    let { jwt } = rest
    if (!jwt) {
      return (
        <Redirect
          to={{ pathname: '/login' }}
        />
      )
    }
    return <Route {...rest} component={Component} />
  }
}

export default connect(state => state.user)(withRouter(AuthRoute))

// import React, { Component } from 'react'
// import { withRouter, Redirect, Route } from 'dva/router'
// import { access } from '../services/api'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       auth: false,
//       hasAuthed: false
//     }
//   }

//   componentDidMount() {
//     access().then(res => {
//       if (res.state === 1000) {
//         this.setState({ hasAuthed: true, auth: true })
//       } else {
//         this.setState({ hasAuthed: true, auth: false })
//       }
//     })
//   }

//   render() {
//     if (!this.state.hasAuthed) return null
//     if (!this.state.auth) {
//       return <Redirect to={{ pathname: '/login' }} />
//     }
//     return <Route {...this.props} />
//   }
// }

// export default withRouter(App)
