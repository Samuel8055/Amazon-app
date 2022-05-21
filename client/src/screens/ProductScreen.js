import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Loader, Message, Ratings } from "../components";
import { getProduct } from "../redux/actions/productActions"

const ProductScreen = () => {
  let { id } = useParams();
  const [qty, setQty] = useState(1)
  const productDetails = useSelector(state => state.productDetails)
  const { loading, product, error } = productDetails

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProduct(id))
  }, [id, dispatch])

  if (!product) return <div>Product not found!</div>

  const addToCartHandler = () => {
    return navigate(`/cart/${id}?qty=${qty}`, { replace: true })
  }

  return (
    <div>
      {
        loading ? <Loader /> :
          error ? <Message variant="danger" message={error} /> :
            <div>
              <Link to="/">Back to result</Link>

              <div className="row top">
                <div className="col-2">
                  <img className="large" src={product.image} alt={product.name} />
                </div>

                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{product.name}</h1>
                    </li>

                    <li>
                      <Ratings rating={product.rating} numReviews={product.numReviews} />
                    </li>

                    <li>
                      Price: ${product.price}
                    </li>

                    <li>
                      Description: {product.description}
                    </li>
                  </ul>
                </div>

                <div className="col-2">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">{product.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Status</div>
                          <div>
                            {
                              product.countInStock > 0 ? <span className="success">In stock</span> : <span className="danger">Unavailable</span>
                            }
                          </div>
                        </div>
                      </li>
                      {
                        product.countInStock > 0 && (
                          <>
                            <li>
                              <div className="row">
                                Quantity:
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                  {
                                    [...Array(product.countInStock).keys()].map(item => (
                                      <option value={item + 1} key={item + 1}>{item + 1}</option>
                                    ))
                                  }
                                </select>
                              </div>
                            </li>
                            <li>
                              <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                            </li>
                          </>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      }
    </div>
  )
}

export default ProductScreen;
