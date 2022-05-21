import { useParams, useSearchParams } from 'react-router-dom'

const CartScreen = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const qty = searchParams.get('qty')

  return (
    <div>
      <p>
        PRODUCT_ID: {id} || QTY: {qty}
      </p>
    </div>
  )
}

export default CartScreen;
