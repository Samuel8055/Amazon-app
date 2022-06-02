import axios from 'axios'
import { USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS } from '../constants'

export const userSignin = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/users/signin`, { email, password })

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}
