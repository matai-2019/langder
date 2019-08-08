import request from 'superagent'

export function getPotMatches (userId) {
  return request.get(`/api/v1/users/${userId}/pot`)
}

export function like (userId, likedId) {
  request.post(`/api/v1/users/${userId}/likes`)
    .send({ likedId })
}

export function getLanguages (id) {
  return request.get(`/api/v1/users/${id}/languages`)
}
