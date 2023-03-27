import {products} from "../db";
import { useState, useEffect, createContext } from 'react';
import ProductItem from '../components/ProductItem';

export interface Product {
  id: number;
  name: string;
  url: string;
  size: string;
  sizeType: string;
  barcode: string;
  producer: string;
  description: string;
  price: number;
  brand:string;
  caretype: string[];
}

interface Data {
  products:Product[]
}

export const MainContext = createContext<{getProducts: () => void}>({getProducts: () => undefined});

const Admin = () => {
  
  const [productList, setProductList] = useState(products.products);

  
  const getProducts = () => {
    localStorage.setItem("products", JSON.stringify(products));
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);
    setProductList(
      data.products
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div></div>
    // <MainContext.Provider value ={{ getProducts} }>
    //   <div className="wrapper">
    //     {productList?.map((product, index) => (
    //       // <ProductItem product={product} key={index}/>
    //     ))}
    //   </div>
    // </MainContext.Provider>
  );
}

export default Admin;