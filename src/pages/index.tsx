import {products} from "../db";
import { Product as Product, Data as Data } from '../components/ProductList'
import { IProduct as IProduct } from '../components/ProductList'
import { useState, useEffect, createContext } from 'react';
import Pagination from "../components/Pagination";
import {Container, Wrapper, Part2 }from "../components/ProductList/productList.style";
import {MainPart, ProductListPart} from "../components/ProductList/productList.style";
import {PaginationPart} from "../components/ProductList/productList.style";
import {Text2, } from "../components/ProductList/productList.style";
import ProductItemForAdmin from "../components/ProductItemForAdmin";

export const MainContext = createContext<{getProducts: (page:number) => void}>({getProducts: () => undefined});

const Admin = () => {  
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 15;
  
  // Кладем список товаров из json в localStorage если будет все удалено
  let currentList = [];
  let currentData = localStorage.getItem('products') as string;
  if (JSON.parse(currentData).products.length===0) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  let int  = localStorage.getItem("products") as string;
  let data:Data = JSON.parse(int);
  currentList = [ ...data.products];
  const [productList, setProductList] = useState(currentList);

  // Подготовка списка товаров для отображения
  const getProducts = (page:number) => {
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);
    let currentData = [ ...data.products];
    const totalCount = currentData.length;
    
    // // окончательный список после фильтров и сортировки
    // setProductList(
    //   currentData.filter((item,index) => index >= page * limit - limit  && index < page * limit)
    // );

    // кол-во страниц для пагинации
    setTotalPages(Math.ceil(totalCount / limit));
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };

  // изменить страницу
  const changePage = (page:number) => {
    setPage(page);
  }

  // удаление товара из localStorage
  const deleteProduct = (product:Product) => {
    let newProductList = productList.filter(item => item.id !== product.id);
    console.log(newProductList);

    setProductList((prev)=>newProductList);
    console.log(productList);
    localStorage.setItem("products", JSON.stringify({products:newProductList}));
  };
  
  useEffect(() => {
    getProducts(page);
  }, [page]);

  return (
    <Wrapper>
      <Container>
        <Part2>
          <Text2>Администрирование</Text2>
        </Part2>
        <MainPart>
          {/* Список товаров */}
          <ProductListPart>
            <MainContext.Provider value ={{getProducts}}>
              {productList?.map((product, index) => (
                <ProductItemForAdmin product={product} key={index} deleteProduct={deleteProduct}/>
              ))}
            </MainContext.Provider>
            {/* Пагинация */}
            <PaginationPart>
              <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
            </PaginationPart>
          </ProductListPart>
        </MainPart>
      </Container>
    </Wrapper>
  );
};

export default Admin;