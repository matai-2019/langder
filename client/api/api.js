import request from 'superagent'

const url = 'api/v1/users'

export function login (user) {
  return request.post(`${url}/${user.id}`)
    .send(user)
}

export const getUser = (user) => {
  return request(url)
    .get(`${url}/${user}`)
}

export const updateUser = (user) => {
  return request.put(`${url}/${user.id}`)
    .send(user)
}
