import {request} from 'supertest'
const url = '/api/v1/users'

export const getUser = (user) => {
  return request(url)
    .get(`${url}/${user}`)
}