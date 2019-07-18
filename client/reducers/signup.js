export default function signup (state = {}, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        loading: true
      }
    case SIGNUP_SUCCESS:
      return { 
        item: action.user 
      }

    case SIGNUP_ERROR:
      return {
          error: action.error
        }  

    default:
      return state
  }
}
