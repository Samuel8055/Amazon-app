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

  const renderProducts = products && products.length > 0 ? products.map(product => (
    <Product product={product} key={product._id} />
  )) : <Message variant="danger" message={products && products.message} />

  return (
    <div className="row center">
      {
        loading ? <Loader /> :
          error ? <Message variant="danger" message={error} /> : renderProducts
      }
    </div>
  )
}

export default HomeScreen;
