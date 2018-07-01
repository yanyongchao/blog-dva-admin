import React, { Component } from 'react'
import { Table, Button, Modal, Form, Input } from 'antd'
import { connect } from 'dva'
import './index.less'

const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit = () => {
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
            rules: [{ required: true, message: '请输入分类名' }],
            initialValue: this.props.name
          })(<Input placeholder="请输入分类名" />)}
        </FormItem>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

class CategoryAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      category: {}
    }
  }

  showModal = data => {
    console.log(data)
    this.setState({
      visible: true,
      category: {
        name: data.name,
        id: data._id
      }
    })
  }

  handleOk = e => {
    this.form.handleSubmit()
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  render() {
    const columns = [
      {
        title: '标签',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '编辑',
        width: '200px',
        align: 'center',
        key: 'action',
        render: data => {
          return (
            <div>
              <Button
                type="primary"
                onClick={() => {
                  this.showModal(data)
                }}
                style={{ marginRight: '10px' }}
              >
                编辑
              </Button>
              <Button type="danger">删除</Button>
            </div>
          )
        }
      }
    ]
    let { categories } = this.props
    categories.forEach((item, index) => {
      item.key = index
    })
    return (
      <div className="m-category-all">
        <h2>全部分类</h2>
        <Table bordered columns={columns} dataSource={categories} />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <WrappedNormalLoginForm
            { ...this.state.category }
            wrappedComponentRef={form => (this.form = form)}
          />
        </Modal>
      </div>
    )
  }
}

export default connect(state => state.global)(CategoryAll)
