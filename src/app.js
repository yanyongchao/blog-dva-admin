/**
 * 无效代码
 * 采坑用的
 * 留作纪念
 */


import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter, Redirect } from 'dva/router'
import { access } from './services/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      hasAuthed: false
    }
  }

  componentDidMount() {
    access().then(res => {
      if (res.state === 1000) {
        this.setState({ hasAuthed: true, auth: true })
      } else {
        this.setState({ hasAuthed: true, auth: false })
      }
    })
  }

  render() {
    if (!this.state.hasAuthed) return null
    if (!this.state.auth) {
      return <Redirect to={{ pathname: '/login' }} />
    }
    return (
      <div className="app" style={{ height: '100%' }}>
        {this.props.children}
      </div>
    )
  }
}

export default connect(state => state.user)(withRouter(App))
