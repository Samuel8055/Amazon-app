import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions'
import { Loader, Message, Product } from '../components';

const HomeScreen = () => {
  const productList = useSelector(state => state.productList);
  const { loading, products, error } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

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
