import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ProductList  from './components/ProductList';
import Admin from './pages';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/online-shop-project' element={<ProductList/>}/>
          <Route path='/online-shop-project/admin' element={<Admin/>}/>
          <Route path='/online-shop-project/productCard/:id' element={<ProductCard/>}/>
          <Route path='/online-shop-project/shoppingCart' element={<ShoppingCart/>}/>
          <Route path='/online-shop-project/createProduct' element={<AddProduct/>}/>
          <Route path='/online-shop-project/updateProduct/:id' element={<UpdateProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
