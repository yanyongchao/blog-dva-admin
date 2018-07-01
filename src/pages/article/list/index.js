import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { Table, Button, Tag } from 'antd'
import { timestampFormat } from '../../../utils/utils'
import './index.less'

class ArticleList extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/fetch'
    })
  }

  articleEdit = (data) => {
    this.props.history.push(`/article/${data._id}/edit`)
  }

  render() {
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '日期',
        dataIndex: 'createAt',
        key: 'createAt',
        render: data => {
          return <span>{timestampFormat(new Date(data).getTime())}</span>
        }
      },
      {
        title: '分类',
        dataIndex: 'classification',
        key: 'classification',
        render: data => {
          const i = this.props.global.classifications.find(_ => _._id === data)
          return (
            <span>{i.name}</span>
          )
        }
      },
      {
        title: '标签',
        dataIndex: 'category',
        key: 'category',
        render: data => {
          let arr = []
          data.forEach(item => {
            const i = this.props.global.categories.find(_ => _._id === item)
            arr.push(i)
          })
          return (
            arr.map(i => <Tag key={i.name}>{i.name}</Tag>)
          )
        }
      },
      {
        title: '编辑',
        key: 'action',
        render: data => {
          return (
            <div>
              <Button type="primary" style={{ marginRight: '10px' }} onClick={() => {this.articleEdit(data)}}>
                编辑
              </Button>
              <Button type="danger">删除</Button>
            </div>
          )
        }
      }
    ]
    let { list } = this.props.article
    list.forEach((item, index) => {
      item.key = index
    })
    return (
      <div className="m-article-list">
        <Table columns={columns} dataSource={list} bordered />
      </div>
    )
  }
}

export default connect(state => state)(withRouter(ArticleList))
