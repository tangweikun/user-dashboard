import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

const menu = [
  {
    key: 'users',
    to: '/users',
    iconType: 'bars',
  },
  {
    key: 'home',
    to: '/',
    iconType: 'home',
  },
  {
    key: 'not_found',
    to: '/page-you-dont-know',
    iconType: 'frown-circle',
  },
]

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      {
        menu.map(item => (
          <Menu.Item key={item.key}>
            <Link to={item.to}>
              <Icon type={item.iconType} />
            </Link>
          </Menu.Item>
        ))
      }
    </Menu>
  )
}

export default Header
