import React, { Component } from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import './layout.less'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
