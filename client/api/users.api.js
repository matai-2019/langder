import request from 'superagent'

const uri = '/api/v1/users'

export function getPotMatches (userId) {
  console.log('get potmatches')
  return request.get(`${uri}/${userId}/pot`)
}

export function addUser (user) {
  return request.post(uri)
    .send(user)
}

export function like (userId, likedId) {
  return request.post(`${uri}/${userId}/likes`)
    .send({ likedId })
}

export function getLanguages (id) {
  return request.get(`${uri}/${id}/languages`)
}

export function updateLanguages ({ userId, languages }) {
  return request.put(`${uri}/${userId}/languages`)
    .send(languages)
}

export function getMatches (id) {
  console.log('get matches')
  return request.get(`${uri}/${id}/matches`)
}
