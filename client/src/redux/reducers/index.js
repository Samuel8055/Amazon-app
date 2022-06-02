import { combineReducers } from 'redux'
import { getProductReducer, productListReducer } from './productReducers'
import { addToCartReducer } from './cartReducers'
import { userSigninReducer } from './signinReducers'

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: getProductReducer,
  cart: addToCartReducer,
  user: userSigninReducer
})

export default reducers
