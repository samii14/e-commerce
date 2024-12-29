import React from 'react'

const PanierCard = ({product}) => {
  return (
    <div>
      <img src={product.poster} alt='img' width="10%"/>
      <h2>Name: {product.title}</h2>
      <h2>price: {product.price}</h2>
    </div>
  )
}

export default PanierCard
