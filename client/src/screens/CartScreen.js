import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import { Message } from '../components'

const CartScreen = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const qty = searchParams.get('qty')

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const dispatch = useDispatch()

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const checkoutHandler = () => {
    console.log('checkout handler running')
  }

  return (
    <div className="row top">
      <div className="col-2">
        <h2>Shopping Cart</h2>
        <ul>
          {
            cartItems.length > 0 ? cartItems.map(product => (
              <li key={product.productId}>
                <div className="row">
                  <div>
                    <img src={product.image} alt={product.name} className="small" />
                  </div>

                  <div className="min-30">
                    <Link to={`/product/${product.productId}`}>
                      {product.name}
                    </Link>
                  </div>

                  <div>
                    <select value={product.qty} onChange={(e) => dispatch(addToCart(product.productId, Number(e.target.value)))}>
                      {
                        [...Array(product.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div>${product.price}</div>

                  <div>
                    <button type="button" onClick={() => removeFromCartHandler(product.productId)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )) : (
              <>
                <Message variant="danger" message="Your cart is empty!" />
                <p><Link to="/">Go shopping</Link></p>
              </>
            )}
        </ul>
      </div>

      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>

            <li>
              <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                Proceed to checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default CartScreen;
