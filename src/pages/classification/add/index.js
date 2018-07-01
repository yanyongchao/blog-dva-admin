import React, { Component } from 'react'
import { Form, Button, Input } from 'antd'
import { connect } from 'dva'
const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入分类名' }]
          })(<Input placeholder="请输入分类名" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            新建分类
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

class ClassificationAdd extends Component {
  render() {
    return (
      <div className="m-classification-edit">
        <h2>新建分类</h2>
        <WrappedNormalLoginForm />
      </div>
    )
  }
}

export default connect(state => state.global)(ClassificationAdd)
