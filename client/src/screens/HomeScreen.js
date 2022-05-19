import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader, Message, Product } from '../components';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('/api/products')
        setLoading(false)
        setProducts(data)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="row center">
      {
        loading ? <Loader /> :
          error ? <Message variant="danger" message={error} /> :
            products.map(product => (
              <Product product={product} key={product._id} />
            ))
      }
    </div>
  )
}

export default HomeScreen;
