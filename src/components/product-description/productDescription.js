import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import productDescription from './product-description.css';
const products = (state) => state.products.map((product) => product)

export default function ProductDescription() {
  const productList = useSelector(products,shallowEqual)

  let {id} = useParams();
  return (
    <div className="product-description">
      <div className="prd-img">
        <img className="image" src="https://shop.sportsclique.com.au/wp-content/uploads/2020/03/placeholder-images-product-4_large.png" alt="placeholder images"></img>
      </div>
      <div className="prd-desc">
        <p>{productList[id].name}</p>
        <p>{productList[id].price}</p>
        <p>{productList[id].description}</p>
      </div>
    </div>
  )
}
