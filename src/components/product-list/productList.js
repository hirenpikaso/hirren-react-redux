import { React, useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { fetchReqdata } from '../../Actions';
import DropdownList from '../Dropdown/dropdown';
import Product from './product';

const products = (state) => state.products.map((product) => product)
let catParam = 0;

const ProductList = () => {
  // const [selectedCategory, setSelectedCategory] = useState(0);
  const productList = useSelector(products,shallowEqual)
  const [pList, setProductList] = useState(productList);
  const [filterdProducts, setFilterdProducts] = useState([]);
  // setProductList(productList)
  useEffect(() => {
    console.log("catParam",catParam);
    console.log("pList",pList);
    filterProducts()
    console.log("filterdProducts",filterdProducts);
    // setTimeout(() => {
    //   console.log("productList>>>>>>>>",productList);
    // }, 1000);
  }, [])
  // useEffect(()=>{
  //   dispatch(fetchReqdata());
  // }, [dispatch]);
  
  // useEffect(()=>{
  //   setCurrUser(user);
  // }, [user]);

  const categories = productList.map((product) => {
    return product.categoryId;
  })
  const uniqueCategories = [...new Set(categories)];
  const finalCats = [];
  // var filterdProducts = []
  function filterProducts() {
    let myFilterdProducts = productList.filter((product) => {
      return product.categoryId === Number(catParam);
    })
    setFilterdProducts(myFilterdProducts)
    console.log("filterdProducts",filterdProducts);
  }
  const prs = filterdProducts.map((product) => {
    return <Product key={product.id} product={product}/>;
  })
  // console.log("filterdProducts>>>",filterdProducts);
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
    console.log("cat",event.target.value);
    catParam = event.target.value;
    // setSelectedCategory(event.target.value);
    filterProducts();
    // setSelectedCategory(target);
    // console.log("selectedCategory",event.target.value);

    // Promise.resolve(event)
    // .then((event) => {
    //   console.log("event",event.target.value);
    //   setSelectedCategory(event.target.value);
    // })
    // .then(() => {
    //   console.log("selectedCategory",selectedCategory);
    // })
  }
  return (
    <div className="container">
      <div className="category">
      <DropdownList
          labelProp="Select Device "
          listValues={finalCats}
          // listId="storeId"
          // listName="storeName"
          // listKey="storeId"
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