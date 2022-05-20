import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Loader, Message, Ratings } from "../components";
import { getProduct } from "../redux/actions/productActions"

const ProductScreen = () => {
  let { id } = useParams();
  const productDetails = useSelector(state => state.productDetails)
  const { loading, product, error } = productDetails

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(id))
  }, [id, dispatch])

  if (!product) return <div>Product not found!</div>

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
                      <li>
                        <button className="primary block">Add to Cart</button>
                      </li>
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
