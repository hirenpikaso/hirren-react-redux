import { React, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { fetchCAtegories, fetchReqdata } from '../../Actions';
import store from '../../store';
import DropdownList from '../Dropdown/dropdown';
import Product from './product';

const products = (state) => state.products.map((product) => product)
const categories = (state) => state.categories.map((category) => category)
const ProductList = () => {
  const productList = useSelector(products,shallowEqual)
  const categoryList = useSelector(categories,shallowEqual)
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [filterdProducts, setFilterdProducts] = useState([]);
  useEffect(() => {
    store.dispatch(fetchReqdata())
    store.dispatch(fetchCAtegories())
  }, [])
  useEffect(() => {
    filterProducts()
  }, [productList,selectedCategory])

  function filterProducts() {
    let myFilterdProducts = productList.filter((product) => {
      return product.categoryId === Number(selectedCategory);
    })
    setFilterdProducts(myFilterdProducts)
  }
  const prs = filterdProducts.map((product) => {
    return <Product key={product.id} product={product}/>;
  })
  function getSelectedCategory(event){
    setSelectedCategory(event.target.value)
    filterProducts();
  }
  return (
    <div className="container">
      <div className="category">
      <DropdownList
          labelProp="Select Device "
          listValues={categoryList}
          onChangeProp={getSelectedCategory}
          selectedValue={selectedCategory}
          classProp="field"
          selectClass="" />
      </div>
      <div className="product-list">
        {prs}
      </div>
    </div>
  )
}

export default ProductList
