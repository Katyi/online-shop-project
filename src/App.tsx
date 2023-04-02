import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path='/' element={<ProductList/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/productCard/:id' element={<ProductCard/>}/>
          <Route path='/shoppingCart' element={<ShoppingCart/>}/>
          <Route path='/createProduct' element={<AddProduct/>}/>
          <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
