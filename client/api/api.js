import request from 'superagent'

const url = 'api/v1/users'

export function login (user) {
  return request.post(`${url}/${user.id}`)
    .send(user)
}


import {request} from 'supertest'
const url = '/api/v1/users'

export const getUser = (user) => {
  return request(url)
    .get(`${url}/${user}`)
}
