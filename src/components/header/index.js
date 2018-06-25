import React, { Component } from 'react'
import { Link } from 'dva/router'

export default class Header extends Component {
  render() {
    return (
      <div className="m-header">
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/user">用户</Link>
          </li>
        </ul>
      </div>
    )
  }
}
