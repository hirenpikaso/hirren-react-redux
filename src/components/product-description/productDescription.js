import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import productDescription from './product-description.css';
import { getProduct } from '../../Actions'
import store from '../../store';
const singleProduct = (state) => state.product

export default function ProductDescription(props) {
  let {id} = useParams();
  const product = useSelector(singleProduct,shallowEqual)
  useEffect(() => {
    store.dispatch(getProduct(id))
  }, [])
  function goBack(e) {
    e.preventDefault();
    props.history.push("/");
  }
  return (
    <Fragment>
      <div>
        <button onClick={goBack}>Go To Products</button>
      </div>
      <div className="product-description">
        <div className="prd-img">
          <img className="image" src="https://shop.sportsclique.com.au/wp-content/uploads/2020/03/placeholder-images-product-4_large.png" alt="placeholder images"></img>
        </div>
        <div className="prd-desc">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </Fragment>
  )
}
