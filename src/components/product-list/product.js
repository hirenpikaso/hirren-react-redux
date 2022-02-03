import React from 'react'
import productList from './product-list.css'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Link to={`/${ product.id }`} className="product-box">
      <img className="image" src="https://shop.sportsclique.com.au/wp-content/uploads/2020/03/placeholder-images-product-4_large.png" alt="placeholder images"></img>
      <div className="product-details">
        <p>{product.name}</p>
        <p>{product.model}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  )
}

export default Product
