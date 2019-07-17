export default function signup (state = {}, action) {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return action.user

    default:
      return state
  }
}
