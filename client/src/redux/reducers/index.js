import { combineReducers } from 'redux'
import { getProductReducer, productListReducer } from './productReducers'

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: getProductReducer
})

export default reducers
