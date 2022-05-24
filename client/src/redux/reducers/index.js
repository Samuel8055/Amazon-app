import { combineReducers } from 'redux'
import { getProductReducer, productListReducer } from './productReducers'
import { addToCartReducer } from './cartReducers'

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: getProductReducer,
  cart: addToCartReducer
})

export default reducers
