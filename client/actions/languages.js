import request from 'superagent'

export const GET_ALL_LANGUAGES_SUCCESS = 'GET_ALL_LANGUAGES_SUCCESS'
export const GET_ALL_LANGUAGES_ERROR = 'GET_ALL_LANGUAGES_ERROR'

export function getAllLanguagesSuccess (languages) {
  return {
    type: GET_ALL_LANGUAGES_SUCCESS,
    languages
  }
}

export function getAllLanguagesError (err) {
  return {
    type: GET_ALL_LANGUAGES_ERROR,
    error: err
  }
}

export function getAllLanguages () {
  return dispatch => {
    request
      .get('/api/v1/languages')
      .then(res => dispatch(getAllLanguagesSuccess(res.body)))
      .catch(err => dispatch(getAllLanguagesError(err.message)))
  }
}
