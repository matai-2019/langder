import request from 'superagent'

export function getProfile (id) {
  return request.get('/api/v1/profiles/' + id)
}