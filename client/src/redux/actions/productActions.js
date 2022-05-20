import axios from 'axios'
import { GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants'

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST
  })

  try {
    const { data } = await axios.get('/api/products')
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: err.message
    })
  }
}

export const getProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_REQUEST
  })

  try {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}
