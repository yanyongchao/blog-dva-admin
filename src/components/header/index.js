import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd'
import { connect } from 'dva'
import './index.less'

class Header extends Component {

  handleClick = () => {
    this.props.dispatch({
      type: 'user/logout'
    })
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={this.handleClick}>
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )

    return (
      <div className="m-header">
        <h1>yanyongchao博客后台管理系统</h1>
        <Dropdown overlay={menu}>
          <img src={require('../../assets/images/logout.jpg')} alt=""/>
        </Dropdown>
      </div>
    )
  }
}

export default connect()(Header)
