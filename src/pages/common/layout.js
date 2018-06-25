import React, { Component } from 'react'
import Header from '@/components/header'

export default class Layout extends Component {
  render() {
    console.log(this.props.children)
    return (
      <div className="layout">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
