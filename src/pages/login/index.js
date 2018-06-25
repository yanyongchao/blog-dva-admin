import React, { Component } from 'react'
import { connect } from 'dva'
import { Form, Icon, Input, Button } from 'antd'
import './index.less'

const FormItem = Form.Item

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/login',
          payload: values
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="请输入用户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="请输入密码"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm)

class Login extends Component {
  render() {
    return (
      <div className="m-admin-login">
        <div className="login-wrapper">
          <div className="login-logo-wrapper text--center">
            <img
              src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
              className="login-logo"
              alt=""
            />
            <span className="website-name">Ant Design</span>
          </div>
          <WrappedNormalLoginForm {...this.props} />
        </div>
      </div>
    )
  }
}

export default connect()(Login)
