import request from 'superagent'

export function login (user) {
  return request.post('/api/v1/login')
    .send(user)
}

export function logout (user) {
  console.log('//TODO logout')
}
