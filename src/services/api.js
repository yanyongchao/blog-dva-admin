import request from '@/utils/request'

export async function signIn(params) {
  return request('/api/user/signin', {
    method: 'POST',
    body: params
  })
}

export async function access(params) {
  return request('/api/user/access', {
    method: 'POST'
  })
}
