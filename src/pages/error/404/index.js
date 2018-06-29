import React, { Component } from 'react'
import './index.less'

export default class NotFound extends Component {
  render () {
    return (
      <div className="error">
        <div className="error-content">
          <img src={require('../../../assets/images/404.png')} alt=""/>
          <p>
            <span>页面找不到，</span>
            <a href="/">返回首页</a>
          </p>
        </div>
      </div>
    )
  }
}
