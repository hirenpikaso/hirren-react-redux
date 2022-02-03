import { Route, Switch } from 'react-router-dom';
import ProductDescription from './components/product-description/productDescription';
import ProductList from './components/product-list/productList';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" component={ProductList} exact />
          {/* <Route path="/add" component={AddEmployee} exact /> */}
          <Route path="/:id" component={ProductDescription} exact />
        </Switch>
    </div>
  );
}

export default App;
