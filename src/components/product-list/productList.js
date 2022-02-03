import { React, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import DropdownList from '../Dropdown/dropdown';
import Product from './product';

const products = (state) => state.products.map((product) => product)
let catParam = 0;

const ProductList = () => {
  const productList = useSelector(products,shallowEqual)
  const [filterdProducts, setFilterdProducts] = useState([]);
  useEffect(() => {
    filterProducts()
  }, [])

  const categories = productList.map((product) => {
    return product.categoryId;
  })
  const uniqueCategories = [...new Set(categories)];
  const finalCats = [];
  function filterProducts() {
    let myFilterdProducts = productList.filter((product) => {
      return product.categoryId === Number(catParam);
    })
    setFilterdProducts(myFilterdProducts)
  }
  const prs = filterdProducts.map((product) => {
    return <Product key={product.id} product={product}/>;
  })
  for(const cat of uniqueCategories){
    let obj = {};
    if(cat === 0) {
      obj.id=cat;
      obj.name = 'Laptop'
    }else if(cat === 1){
      obj.id=cat;
      obj.name = 'Mobile'
    }
    finalCats.push(obj);
  }
  function getSelectedCategory(event){
    catParam = event.target.value;
    filterProducts();
  }
  return (
    <div className="container">
      <div className="category">
      <DropdownList
          labelProp="Select Device "
          listValues={finalCats}
          onChangeProp={getSelectedCategory}
          selectedValue={catParam}
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