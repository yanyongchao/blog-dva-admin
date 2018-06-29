import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './index.less'
import menu from '../../menu'

const SubMenu = Menu.SubMenu

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = menu.map(_ => _.path)
  state = {
    openKeys: ['article']
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
  onMenuSelect = (tem, key, keyPath) => {
    console.log(tem, key, keyPath)
  }
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={this.onMenuSelect}
        style={{ width: 200 }}
        defaultOpenKeys={['sub2']}
        defaultSelectedKeys={['5']}
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
                  return <Menu.Item key={i.path}>{i.name}</Menu.Item>
                })}
              </SubMenu>
            )
          }
          return (
            <Menu.Item key={item.path}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}

export default class Navbar extends Component {
  render() {
    return (
      <div className="m-navbar">
        <div className="avatar">
          <img src={require('../../assets/images/avatar.jpg')} alt="" />
        </div>
        <Sider />
      </div>
    )
  }
}
