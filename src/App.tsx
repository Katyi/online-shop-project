import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import "./css/style.css";
import './App.css'
import ProductList  from './components/ProductList';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/productCard' element={<ProductCard/>}/>
          <Route path= '/shoppingCart' element={<ShoppingCart/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
