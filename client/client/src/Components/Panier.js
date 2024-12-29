import React from 'react'
import { useSelector } from 'react-redux'
import { createOrder } from '../redux/slices/orderSlice'

const Panier = () => {
    const {products} = useSelector((state)=> state.panier)
    console.log(products)
    const dispatch = useDispatch()
  return (
    <div>
      {products.map((el)=> <PanierCard product={product}/>)}
      <button onClick={()=> dispatch(createOrder({productList:products}))}>Add all Order</button>
    </div>
  )
}

export default Panier
