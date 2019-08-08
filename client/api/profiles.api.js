import request from 'superagent'

const url = '/api/v1/profiles/'

export function getProfile (id) {
  return request.get(url + id)
}

export function updateProfile ({ userId, name, description }) {
  return request.put(url + userId)
    .send({ name, description })
}
