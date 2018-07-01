import React, { Component } from 'react'
import { connect } from 'dva'
import { Form, Input, Select, Button } from 'antd'
import {
  MarkDownEditor,
  getContent
} from '@/components/markdown/markdown'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

class RegistrationForm extends React.Component {

  validateContent = (rule, value, callback) => {
    let content = getContent()
    if (!content) {
      callback('请输入文章内容')
    }
    callback()
  }

  onChange = content => {
    this.setState({ content })
    return content
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(getContent())
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { classifications, categories } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: '请输入文章标题'
              }
            ]
          })(<Input placeholder="请输入文章标题" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('classification', {
            rules: [
              {
                required: true,
                message: '请选择文章分类'
              }
            ]
          })(
            <Select placeholder="请选择文章分类">
              {classifications.map((item, index) => (
                <Option key={index} value={item._id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('desc', {
            rules: [
              {
                required: true,
                message: '请输入文章描述'
              }
            ]
          })(<TextArea placeholder="请输入文章描述" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('category', {
            rules: [
              {
                required: true,
                message: '请选择文章标签'
              }
            ]
          })(
            <Select mode="multiple" placeholder="请选择文章标签">
              {categories.map((item, index) => (
                <Option key={index} value={item._id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('content', {
            rules: [
              {
                validator: this.validateContent
              }
            ]
          })(<MarkDownEditor content="123"/>)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm)

class ArticleAdd extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="m-article-add">
        <h2>新增文章</h2>
        <WrappedRegistrationForm {...this.props} />
      </div>
    )
  }
}

export default connect(state => state.global)(ArticleAdd)
