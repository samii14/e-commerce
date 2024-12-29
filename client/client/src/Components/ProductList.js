import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
      {products.map((product)=> <ProductCard product={product}/>)}

    </div>
  )
}

export default ProductList
