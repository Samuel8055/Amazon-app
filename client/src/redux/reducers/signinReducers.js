import { USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS } from '../constants'

export const userSigninReducer = (state = { userDetails: {} }, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        userDetails: action.payload
      }

    case USER_SIGNIN_FAIL: {
      return {
        error: action.payload
      }
    }

    default:
      return state
  }
}
