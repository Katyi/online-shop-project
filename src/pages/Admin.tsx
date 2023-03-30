import {products} from "../db";
import { Product as Product } from '../components/ProductList'
import { IProduct as IProduct } from '../components/ProductList'
import { useState, useEffect, createContext } from 'react';
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";
import {Container, Wrapper, Part2 }from "../components/ProductList/productList.style";
import {MainPart, ProductListPart} from "../components/ProductList/productList.style";
import {PaginationPart} from "../components/ProductList/productList.style";
import {Text2, } from "../components/ProductList/productList.style";

export interface Data {
  products:Product[]
};
interface ProducerArr {
  [key:string]:number
}
interface NewProducerArr {
  name: string;
  quantity: number;
  checked: boolean;
}
export const MainContext = createContext<{getProducts: (
  page:number, option:string, price1:string, 
  price2:string, checked:boolean[]) => void}>({getProducts: () => undefined});

const Admin = () => {  
  const [productList, setProductList] = useState(products.products);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [selects, setSelects] = useState("");
  const limit = 15;
  
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [produserName, setProduserName] = useState("");
  let newProducerArr:NewProducerArr[] = [];
  
  let int1  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:IProduct[] = JSON.parse(int1);
  let selectedProducts:Product[] = [];
  let shoppingDataLength = 0;
  // const [totalPrice, setTotalPrice] = useState(0);
  let totalPrice = 0;
  if (shoppingData !== null) {
    selectedProducts = shoppingData;
    shoppingDataLength = shoppingData.reduce((acc, item)=>acc + item.quantity, 0);
    totalPrice = shoppingData.reduce((acc, item)=> acc + item.price * item.quantity, 0);
    console.log(totalPrice);
  }
  // const [selectedProductsList, setSelectedProductsList] = useState(selectedProducts);
  // const [selectedProductQuantity, setSelectedProductQuantity] = useState(shoppingDataLength);
  
  const [indForShow, setIndForShow] = useState(0);
  const [indForHideButton, setIndForHideButton] = useState(0);

  // Кладем список товаров из json в localStorage
  localStorage.setItem("products", JSON.stringify(products));
  // Достаем список товаров из localStorage
  let int  = localStorage.getItem("products") as string;
  let data:Data = JSON.parse(int);
  let produserArr:ProducerArr={};
  // считаем кол-во производителей для отображения в чекбоксах
  data.products.forEach((item)=>{
  if (produserArr.hasOwnProperty(item.producer)){
    produserArr[item.producer] += 1
  } else {
    produserArr[item.producer] = 1
  }
  })
  // делаем массив производителей для чекбоксов
  for (const [key, value] of Object.entries(produserArr)) {
    newProducerArr.push({"name": key, "quantity": value, "checked": false})
  }
  // по нажатию кнопки показать все или скрыть опредедяем кол-во чекбоксов
  newProducerArr = produserName !== '' ? newProducerArr.filter((item) => item.name.toLocaleLowerCase().includes(produserName.toLocaleLowerCase())) : newProducerArr;
  
  //статус для поиска производителей
  const handleInputOnChange =(value:string) => {
    setProduserName(value);
    if (value !== '') {
      setIndForShow(1);
      setIndForHideButton(1);
    } else {
      setIndForShow(0);
      setIndForHideButton(0);
    }
  };

  // статус галочек в чекбоксах
  let newProducerArrLength = newProducerArr.length;
  const [checked, setChecked] = useState(
    new Array(newProducerArrLength).fill(false)
  );
  for (let i = 0; i < newProducerArrLength; i++) {
    newProducerArr[i].checked = checked[i];
  }
  newProducerArr = indForShow === 0 ? newProducerArr.slice(0, 4) : newProducerArr;
  const handleOnChange = (position:number) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updatedCheckedState);
  };
 
  // Подготовка списка товаров для отображения со всеми фильтрами и сортировками
  const getProducts = (
    page:number,
    option:string, 
    price1:string, 
    price2:string, 
    checked:boolean[]
    ) => {
      // сортировка
      let sortedFilteredData = [ ... data.products];
      if (option !== "") {
        if (option) {
          if (option === "Название (по убыванию)") {
          sortedFilteredData.sort((a, b) => (a.name < b.name ? 1 : -1));
        } else if (option === "Название (по возрастанию)") {
          sortedFilteredData.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else if (option === "Цена (по убыванию)") {
          sortedFilteredData.sort((a, b) => b.price - a.price);
        } else if (option === "Цена (по возрастанию)") {
          sortedFilteredData.sort((a, b) => a.price - b.price);
        }
      }
    };
    
    // фильтры по ценам
    let price3 = price2 === "" ? Infinity: Number(price2);
    sortedFilteredData = price1 !== '' || price2 !== '' 
      ? sortedFilteredData.filter(item => item.price >= Number(price1) && item.price <=price3) 
      : sortedFilteredData;

    // фильтры чекбоксов
    sortedFilteredData = checked.includes(true)
      ? sortedFilteredData.filter(item=>  newProducerArr.find((elem)=>elem.name ==item.producer)?.checked) 
      : sortedFilteredData;
    
    // фильтры по уходу за телом, руками, ногами и т.д.
    // sortedFilteredData = curcat !== '' ? sortedFilteredData.filter((item) => item.caretype.includes(curcat)) : sortedFilteredData;

    const totalCount = sortedFilteredData.length;
    // окончательный список после фильтров и сортировки
    setProductList(
      sortedFilteredData.filter((item,index) => index >= page * limit - limit  && index < page * limit)
    );
    // кол-во страниц для пагинации
    setTotalPages(Math.ceil(totalCount / limit));
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
  
  // изменить страницу
  const changePage = (page:number) => {
  setPage(page)
  }

  // добавление товаров в корзину
  const handleShoppingCart = (product:Product) => {
    const newProd = Object.assign({},product) as IProduct;
    newProd.quantity=1;
    // setSelectedProductsList((prev)=>[...prev, newProd]);
    // setSelectedProductQuantity((prev)=>prev + 1);
  };
  // totalPrice = Number(shoppingData.reduce((acc, item)=> acc + item.quantity * item.price, 0).toFixed(2));
  // localStorage.setItem("selectedProductsList", JSON.stringify(selectedProductsList));
  
  

  useEffect(() => {
    getProducts(page, selects,price1, price2,checked);
  }, [page, selects, price1, price2, checked]);

  return (
    <Wrapper>
      {/* <Navbar selectedProductQuantity={selectedProductQuantity} totalPrice={totalPrice}/> */}
      <Container>
        <Part2>
          <Text2>Администрирование</Text2>
        </Part2>
        <MainPart>
          {/* Список товаров */}
          <ProductListPart>
            <MainContext.Provider value ={{getProducts}}>
              {productList?.map((product, index) => (
                <ProductItem product={product} key={index} handleShoppingCart={handleShoppingCart}/>
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