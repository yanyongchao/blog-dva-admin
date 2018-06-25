import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div className="app" style={{ height: '100%' }}>
        { this.props.children }
      </div>
    )
  }
}