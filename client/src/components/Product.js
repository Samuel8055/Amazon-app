import { Link } from 'react-router-dom'
import Ratings from "./Ratings";

const Product = ({ product }) => {
  return (
    <div className="card" key={product._id}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="medium" />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>

        <Ratings rating={product.rating} numReviews={product.numReviews} />

        <div className="price">${product.price}</div>
      </div>
    </div>
  )
}

export default Product;
