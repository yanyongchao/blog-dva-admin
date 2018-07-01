import request from '@/utils/request'

export async function signIn(params) {
  return request('/api/user/signin', {
    method: 'POST',
    body: params
  })
}

export async function access() {
  return request('/api/user/access', {
    method: 'POST'
  })
}

export async function getArticlesRes() {
  return request('/api/article', {
    method: 'GET'
  })
}

export async function getCategoriesRes() {
  return request('/api/category', {
    method: 'GET'
  })
}

export async function getClassificationsRes() {
  return request('/api/classification', {
    method: 'GET'
  })
}