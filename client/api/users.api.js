import request from 'superagent'

export function getPotMatches (userId) {
  console.log('get potmatches')
  return request.get(`/api/v1/users/${userId}/pot`)
}

export function addUser (user) {
  return request.post('/api/v1/users')
    .send(user)
}

export function like (userId, likedId) {
  request.post(`/api/v1/users/${userId}/likes`)
    .send({ likedId })
}

export function getLanguages (id) {
  return request.get(`/api/v1/users/${id}/languages`)
}

export function updateLanguages ({ userId, languages }) {
  return request.put(`/api/v1/users/${userId}/languages`)
    .send(languages)
}

export function getMatches (id) {
  console.log('get matches')
  return request.get(`/api/v1/users/${id}/matches`)
}
