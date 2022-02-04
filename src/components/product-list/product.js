import React, { useEffect } from 'react'
import productList from './product-list.css'
import { Link } from 'react-router-dom'

function Product({product}) {

  return (
    <div className="product-box">
      <img className="image" src="https://shop.sportsclique.com.au/wp-content/uploads/2020/03/placeholder-images-product-4_large.png" alt="placeholder images"></img>
      <div className="product-details">
        <Link to={`/${ product.id }`}>{product.name}</Link>
        <p>{product.model}</p>
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default Product
