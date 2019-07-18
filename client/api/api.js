import request from 'superagent'

const login = 'api/v1/users'

export function login (user) {
  return request.get(`${login}/${user.id}`)
    .send(user.id)
}
