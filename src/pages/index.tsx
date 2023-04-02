import {products} from "../db";
import { Product as Product, Data as Data } from '../components/ProductList';
import { useState, useEffect, createContext } from 'react';
import {Container, Wrapper, Part1, Text1, Text2, MainPart, ProductListPart, CreateButton}from "./admin.style";
import ProductItemForAdmin from "../components/ProductItemForAdmin";
import { Link } from "react-router-dom";

export const MainContext = createContext<{getProducts: () => void}>({getProducts: () => undefined});

const Admin = () => {  
  // Кладем список товаров из json в localStorage если будет все удалено
  let currentList = [];
  let currentData = localStorage.getItem('products') as string;
  if (JSON.parse(currentData).products.length === 0) {
    window.location.reload();
    localStorage.setItem("products", JSON.stringify(products));
  }
  let int  = localStorage.getItem("products") as string;
  let data:Data = JSON.parse(int);
  currentList = [ ...data.products];
  const [productList, setProductList] = useState(currentList);
  
  // Подготовка списка товаров для отображения
  const getProducts = () => {
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);
    let currentData = [ ...data.products];
  };

  // удаление товара из localStorage
  const deleteProduct = (product:Product) => {
    let newProductList = data.products.filter(item => item.id !== product.id);
    setProductList((prev)=>newProductList);
    localStorage.setItem("products", JSON.stringify({products:newProductList}));
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Part1>
          <Text1>Администрирование</Text1>
        
          <Link to={"/createProduct"}>
            <CreateButton>
              <Text2>ДОБАВИТЬ НОВЫЙ ТОВАР</Text2>
            </CreateButton>
          </Link>
          </Part1>
        <MainPart>
          {/* Список товаров */}
          <ProductListPart>
            <MainContext.Provider value ={{getProducts}}>
              {/* {productList?.map((product, index) => ( */}
              {productList?.map((product, index) => (
                <ProductItemForAdmin product={product} key={index} deleteProduct={deleteProduct}/>
              ))}
            </MainContext.Provider>
          </ProductListPart>
        </MainPart>
      </Container>
    </Wrapper>
  );
};

export default Admin;