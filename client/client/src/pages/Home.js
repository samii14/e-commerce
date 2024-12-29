import React, { useEffect } from 'react'

const Home = () => {
  const {products, isLoading,error}= useSelector(state=> state.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetProduct())
  },[dispatch])
  return (
    <div>
      {isLoading && <h1>isLoading</h1>}
      <ProductList products={products}/>
      {console.log(error)}
      <Panier/>
      
    </div>
  )
}

export default Home
