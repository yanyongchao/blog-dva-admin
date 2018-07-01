import request from '@/utils/request'

export async function signIn(params) {
  return request('/api/user/signin', {
    method: 'POST',
    body: params
  })
}

export async function access() {
  return request('/api/user/access')
}

export async function getArticlesRes() {
  return request('/api/article')
}

export async function getArticlesByIdRes(params) {
  return request(`/api/article/${params}`)
}

export async function getCategoriesRes() {
  return request('/api/category')
}

export async function getClassificationsRes() {
  return request('/api/classification')
}