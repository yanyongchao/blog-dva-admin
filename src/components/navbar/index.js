import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { withRouter } from 'dva/router'
import './index.less'
import menu from '../../menu'

const SubMenu = Menu.SubMenu

class Sider extends React.Component {
  constructor(props) {
    super(props)
    const arr = props.location.pathname.split('/')
    this.defaultOpenKeys = [arr[1]]
    this.defaultSelectedKeys = [props.location.pathname]
    this.rootSubmenuKeys = menu.map(_ => _.path)
    this.state = {
      openKeys: [this.rootSubmenuKeys[0]]
    }
  }
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  onMenuSelect = tem => {
    this.props.history.push(`${tem.key}`)
  }
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={this.onMenuSelect}
        style={{ width: 200 }}
        defaultOpenKeys={this.defaultOpenKeys}
        defaultSelectedKeys={this.defaultSelectedKeys}
      >
        {menu.map(item => {
          if (item.children) {
            return (
              <SubMenu
                key={item.path}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </span>
                }
              >
                {item.children.map(i => {
                  return (
                    <Menu.Item key={`/${item.path}/${i.path}`}>
                      {i.name}
                    </Menu.Item>
                  )
                })}
              </SubMenu>
            )
          }
          return (
            <Menu.Item key={`/${item.path}`}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="m-navbar">
        <div className="avatar">
          <img src={require('../../assets/images/avatar.jpg')} alt="" />
        </div>
        <Sider {...this.props} />
      </div>
    )
  }
}

export default withRouter(Navbar)
