import { Link } from 'react-router-dom'

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
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  )
}

export default Product;
