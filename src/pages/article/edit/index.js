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
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { classifications, categories } = this.props.global
    const { item } = this.props.article

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: '请输入文章标题'
              }
            ],
            initialValue: item.title
          })(<Input placeholder="请输入文章标题" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('classification', {
            rules: [
              {
                required: true,
                message: '请选择文章分类'
              }
            ],
            initialValue: item.classification
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
            ],
            initialValue: item.desc
          })(<TextArea placeholder="请输入文章描述" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('category', {
            rules: [
              {
                required: true,
                message: '请选择文章标签'
              }
            ],
            initialValue: item.category
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
          })(<MarkDownEditor content={item.content}/>)}
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
  constructor (props) {
    super(props)
    let id = props.match.params.id
    if (id) {
      this.props.dispatch({
        type: 'article/fetchOne',
        payload: {
          id
        }
      })
    } else {
      this.props.dispatch({
        type: 'article/resetOne'
      })
    }
  }
  render() {
    return (
      <div className="m-article-add">
        <h2>{this.props.match.params.id ? '编辑文章' : '新增文章'}</h2>
        <WrappedRegistrationForm {...this.props} />
      </div>
    )
  }
}

export default connect(state => state)(ArticleAdd)
