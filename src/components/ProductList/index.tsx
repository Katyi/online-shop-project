import {products} from "../../db";
import inputimg1 from '../../assets/productList/vector3.png';
import inputimg2 from '../../assets/navbar/icon4.png';
import inputimg3 from '../../assets/productList/vector4.png';
import inputimg4 from '../../assets/productCard/icon13.png';
import inputimg5 from '../../assets/productCard/icon12.png';
import inputimg6 from '../../assets/productList/rectangle1.png';
import inputimg7 from '../../assets/productList/vector15.png';
import inputimg8 from '../../assets/productList/vector16.png';
import inputimg9 from '../../assets/productList/vector17.png';
import { useState, useEffect, createContext } from 'react';
import Navbar from "../Navbar";
import ProductItem from "../ProductItem";
import Pagination from "../Pagination";
import {Container, Wrapper, Part1, Part2, Part3, FilterContainer, Filter, FilterText1, Select1, Option1, Filter1, Filter2, Filter3}from "./productList.style.js";
import {MainPart, SideBar, ProductListPart, InputLine, Input1, InputWithButton, Input2, InputText2, CheckBox,CheckBoxLine, Input3, Label1} from "./productList.style.js";
import {ProducerButton, SideBarMenu1, Filter4, PaginationPart, Part_tablet1, NavigateButtonLine, ButtonOpenOrHide, PartForHide} from "./productList.style.js";
import {Text1, Text2, Text3, Text3_1, Text4, Text5, Text6, Text7, Text8, Text9, Text10} from "./productList.style.js";
import {Image1, Image2, Image3, Image4, Image5, Image6} from "./productList.style.js";
import { tablet } from "../../responsive";
import Footer from "../Footer";

export interface Product {
  id: number;
  name: string;
  url: string;
  amount: number;
  size: number;
  sizeType: string;
  barcode: string;
  producer: string;
  description: string;
  price: number;
  brand:string;
  caretype: string[];
};
export interface IProduct {
  id: number;
  name: string;
  url: string;
  amount: number;
  size: number;
  sizeType: string;
  barcode: string;
  producer: string;
  description: string;
  price: number;
  brand:string;
  caretype: string[];
  quantity: number;
};
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
  page:number, curcat: string, option:string, price1:string, 
  price2:string, checked:boolean[]) => void}>({getProducts: () => undefined});

const ProductList = () => {  
  const [productList, setProductList] = useState(products.products);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [selects, setSelects] = useState("");
  const limit = 12;
  const filterArr = ["Уход за телом", "Уход за руками", "Уход за ногами", "Уход за лицом", "Уход за волосами", "Средства для загара",
    "Средства для бритья", "Подарочные наборы", "Гигиеническая продукция", "Гигиена полости рта", "Бумажная продукция"];
  const curcat = "";
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [produserName, setProduserName] = useState("");
  let newProducerArr:NewProducerArr[] = [];
  
  let int1  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:IProduct[] = JSON.parse(int1);
  let selectedProducts:Product[] = [];
  let shoppingDataLength = 0;
  let totalPrice = 0;
  if (shoppingData !== null) {
    selectedProducts = shoppingData;
    shoppingDataLength = shoppingData.reduce((acc, item)=>acc + item.quantity, 0);
    totalPrice = shoppingData.reduce((acc, item)=> acc + item.price * item.quantity, 0);
  }
  const [selectedProductsList, setSelectedProductsList] = useState(selectedProducts);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(shoppingDataLength);
  
  const [indForShow, setIndForShow] = useState(0);
  const [indForHideButton, setIndForHideButton] = useState(0);
  const [indForShowFilters, setIndForShowFilters] = useState(0);

  // Кладем список товаров из json в localStorage
  let currentData = localStorage.getItem('products') as string;
    if (!currentData) {
    window.location.reload();
    localStorage.setItem("products", JSON.stringify(products));
  }
  // if (JSON.parse(currentData).products.length === 0) {
  //   window.location.reload();
  //   localStorage.setItem("products", JSON.stringify(products));
  // }
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
    curcat:string, 
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
    sortedFilteredData = curcat !== '' ? sortedFilteredData.filter((item) => item.caretype.includes(curcat)) : sortedFilteredData;

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
    setSelectedProductsList((prev)=>[...prev, newProd]);
    setSelectedProductQuantity((prev)=>prev + 1);
  };
  // totalPrice = Number(shoppingData.reduce((acc, item)=> acc + item.quantity * item.price, 0).toFixed(2));
  localStorage.setItem("selectedProductsList", JSON.stringify(selectedProductsList));
  
  // показать всех производителей или скрыть
  const showAllProducers = () => {
    setIndForShow(indForShow === 0 ? 1 : 0);
  };

  // Показать фильтры ПОДБОР ПО ПАРАМЕТРАМ в tablet and mobile
   const showFilters = () => {
    setIndForShowFilters(indForShowFilters === 0 ? 1 : 0);
   };

  useEffect(() => {
    getProducts(page, curcat, selects,price1, price2,checked);
  }, [page, curcat, selects, price1, price2, checked]);

  return (
    <Wrapper>
      <Navbar selectedProductQuantity={selectedProductQuantity} totalPrice={totalPrice}/>
      <Container>
        <Part1>
          <Text1>Главная</Text1>
          <Image1 src={inputimg1}/>
          <Text1>Косметика и гигиена</Text1>
        </Part1>
        <Part2>
          <NavigateButtonLine>
            <Image5 src={inputimg6}/>
            <Image6 src={inputimg7}/>
            <Text10>НАЗАД</Text10>
          </NavigateButtonLine>
          <Text2>Косметика и гигиена</Text2>
          {/* Подбор параметром начиная с tablet and mobile */}
          <Part_tablet1>
            <Text3 style={{display: "flex"}}>
              ПОДБОР ПО ПАРАМЕТРАМ
              <ButtonOpenOrHide onClick={()=>{showFilters()}}>
                <Image5 src={inputimg6}/>
                {indForShowFilters === 0 && <Image6 src={inputimg8}/>}
                {indForShowFilters === 1 && <Image6 src={inputimg9}/>}
              </ButtonOpenOrHide>
            </Text3>
            {indForShowFilters === 0 && 
              <PartForHide>
              <Text4>
                Цена 
                <Text5>₸</Text5>
              </Text4>
              <InputLine>
                <Input1 placeholder="0" type="number" value={price1} onChange={e => setPrice1(e.currentTarget.value)}/>
                <Text6>-</Text6>
                <Input1 placeholder="10 000" type="number" value={price2} onChange={e => setPrice2(e.currentTarget.value)}/>
              </InputLine>
              {/* Фильтр по производителям */}
              <Text7>Производитель</Text7>
              <InputWithButton>
                <Input2 placeholder="Поиск..." type="text" onChange={(e)=>handleInputOnChange(e.currentTarget.value)}/>
                <Image2 src={inputimg2}/>
              </InputWithButton>
              <CheckBox>
                {newProducerArr.map((item,index)=>(
                  <CheckBoxLine key={index}>
                    <Label1>
                    <Input3 type="checkbox" checked={checked[index]} onChange={()=>handleOnChange(index)}/>
                    {item.name}
                    </Label1>
                    <Text8>{item.quantity}</Text8>
                  </CheckBoxLine>
                ))}
              </CheckBox>
              {indForShow === 0 && indForHideButton === 0 &&
                <ProducerButton onClick={()=>showAllProducers()}>Показать все <Image4 src={inputimg4}/> </ProducerButton>
              }
              {indForShow === 1 && indForHideButton === 0 &&
                <ProducerButton onClick={()=>showAllProducers()}>Скрыть <Image4 src={inputimg5}/> </ProducerButton>
              }
              <Image3 src={inputimg3}/>
              </PartForHide>
            }
            {/* Фильтры дублирующие верхние фильтры */}
            <SideBarMenu1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[0], selects, price1, price2, checked)}>{filterArr[0]}</Text3_1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[1], selects, price1, price2, checked)}>{filterArr[1]}</Text3_1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[2], selects, price1, price2, checked)}>{filterArr[2]}</Text3_1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[3], selects, price1, price2, checked)}>{filterArr[3]}</Text3_1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[4], selects, price1, price2, checked)}>{filterArr[4]}</Text3_1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[5], selects, price1, price2, checked)}>{filterArr[5]}</Text3_1>
              <Text3_1 style={{marginBottom:"10px"}} onClick={() => getProducts(page, filterArr[6], selects, price1, price2, checked)}>{filterArr[6]}</Text3_1>
              <Text3_1 onClick={() => getProducts(page, filterArr[7], selects, price1, price2, checked)}>{filterArr[7]}</Text3_1>
            </SideBarMenu1>
          </Part_tablet1>
          {/* Сортировка верхняя */}
          <FilterContainer>
            <Filter>
              <FilterText1>Сортировка:</FilterText1>
              <Select1 onChange={(e)=>getProducts(page, curcat, e.target.value, price1, price2,checked)} value={selects}>
                <Option1 value="Сортировать">Сортировать</Option1>
                <Option1 value="Название (по убыванию)">Название (по убыванию)</Option1>
                <Option1 value="Название (по возрастанию)">Название (по возрастанию)</Option1>
                <Option1 value="Цена (по убыванию)">Цена (по убыванию)</Option1>
                <Option1 value="Цена (по возрастанию)">Цена (по возрастанию)</Option1>
              </Select1>
            </Filter>
          </FilterContainer>
        </Part2>
        {/* Фильтры верхние */}
        <Part3>
          <Filter1 onClick={() => getProducts(page, filterArr[0], selects, price1, price2,checked)}>{filterArr[0]}</Filter1>
          <Filter1 onClick={() => getProducts(page, filterArr[1], selects, price1, price2, checked)}>{filterArr[1]}</Filter1>
          <Filter1 onClick={() => getProducts(page, filterArr[2], selects, price1, price2, checked)}>{filterArr[2]}</Filter1>
          <Filter1 onClick={() => getProducts(page, filterArr[3], selects, price1, price2, checked)}>{filterArr[3]}</Filter1>
          <Filter2 onClick={() => getProducts(page, filterArr[4], selects, price1, price2, checked)}>{filterArr[4]}</Filter2>
          <Filter2 onClick={() => getProducts(page, filterArr[5], selects, price1, price2, checked)}>{filterArr[5]}</Filter2>
          <Filter2 onClick={() => getProducts(page, filterArr[6], selects, price1, price2, checked)}>{filterArr[6]}</Filter2>
          <Filter2 onClick={() => getProducts(page, filterArr[7], selects, price1, price2, checked)}>{filterArr[7]}</Filter2>
          <Filter3 onClick={() => getProducts(page, filterArr[8], selects, price1, price2, checked)}>{filterArr[8]}</Filter3>
          <Filter2 onClick={() => getProducts(page, filterArr[9], selects, price1, price2, checked)}>{filterArr[9]}</Filter2>
          <Filter2 onClick={() => getProducts(page, filterArr[10], selects, price1, price2, checked)}>{filterArr[10]}</Filter2>
        </Part3>
        <MainPart>
          {/* Меню боковое */}
          <SideBar>
            {/* Фильтр по цене */}
            <Text3>ПОДБОР ПО ПАРАМЕТРАМ</Text3>
            <Text4>
              Цена 
              <Text5>₸</Text5>
            </Text4>
            <InputLine>
              <Input1 placeholder="0" type="number" value={price1} onChange={e => setPrice1(e.currentTarget.value)}/>
              <Text6>-</Text6>
              <Input1 placeholder="10 000" type="number" value={price2} onChange={e => setPrice2(e.currentTarget.value)}/>
            </InputLine>
            {/* Фильтр по производителям */}
            <Text7>Производитель</Text7>
            <InputWithButton>
              <Input2 placeholder="Поиск..." type="text" onChange={(e)=>handleInputOnChange(e.currentTarget.value)}/>
              <Image2 src={inputimg2}/>
            </InputWithButton>
            <CheckBox>
              {newProducerArr.map((item,index)=>(
                <CheckBoxLine key={index}>
                  <Label1>
                  <Input3 type="checkbox" checked={checked[index]} onChange={()=>handleOnChange(index)}/>
                  {item.name}
                  </Label1>
                  <Text8>{item.quantity}</Text8>
                </CheckBoxLine>
              ))}
            </CheckBox>
            {indForShow === 0 && indForHideButton === 0 &&
              <ProducerButton onClick={()=>showAllProducers()}>Показать все <Image4 src={inputimg4}/> </ProducerButton>
            }
            {indForShow === 1 && indForHideButton === 0 &&
              <ProducerButton onClick={()=>showAllProducers()}>Скрыть <Image4 src={inputimg5}/> </ProducerButton>
            }
            <Image3 src={inputimg3}/>
            {/* Фильтры дублирующие верхние фильтры */}
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[0], selects, price1, price2, checked)}>{filterArr[0]}</Text3>
              <Filter4>Эпиляция и депиляция</Filter4>
              <Filter4>Средства для ванны и душа</Filter4>
              <Filter4>Скрабы, пилинги и пр.</Filter4>
              <Filter4>Мочалки и губки для тела</Filter4>
              <Filter4>Кремы, лосьоны, масла</Filter4>
              <Filter4>Интимный уход</Filter4>
              <Filter4>Дезодоранты, антиперспиранты</Filter4>
              <Filter4>Гели для душа</Filter4>
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[1], selects, price1, price2, checked)}>{filterArr[1]}</Text3>
              <Filter4>Увлажнение и питание</Filter4>
              <Filter4>Средства для ногтей</Filter4>
              <Filter4>Мыло твердое</Filter4>
              <Filter4>Мыло жидкое</Filter4>
              <Filter4>Крем для рук</Filter4>
              <Filter4>Защита рук</Filter4>
              <Filter4>Жидкость для снятия лака</Filter4>
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[2], selects, price1, price2, checked)}>{filterArr[2]}</Text3>
                <Filter4>Скрабы, пилинги</Filter4>
                <Filter4>Пилки, ролики</Filter4>
                <Filter4>Крем для ног</Filter4>
                <Filter4>Дезодоранты для ног</Filter4>    
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[3], selects, price1, price2, checked)}>{filterArr[3]}</Text3>
              <Filter4>Тональные средства</Filter4>
              <Filter4>Средства для снятия макияжа</Filter4>
              <Filter4>Средства для очищения</Filter4>
              <Filter4>Маски, скрабы, сыворотки</Filter4>
              <Filter4>Крем для лица</Filter4>
              <Filter4>Крем для век</Filter4>
              <Filter4>Жидкость для снятия макияжа</Filter4>
              <Filter4>Гигиеническая помада</Filter4>    
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[4], selects, price1, price2, checked)}>{filterArr[4]}</Text3>
                <Filter4>Шампуни</Filter4>
                <Filter4>Средства для укладки</Filter4>
                <Filter4>Средства для окрашивания волос</Filter4>
                <Filter4>Маски, сыворотки, масла</Filter4>
                <Filter4>Кондиционеры, бальзамы</Filter4>
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[5], selects, price1, price2, checked)}>{filterArr[5]}</Text3>
                <Filter4>Средства после загара</Filter4>
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[6], selects, price1, price2, checked)}>{filterArr[6]}</Text3>
                <Filter4>Станки и кассеты</Filter4>
                <Filter4>После бритья</Filter4>
                <Filter4>Для бритья</Filter4>
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
            <SideBarMenu1>
              <Text3 style={{marginBottom:"5px"}} onClick={() => getProducts(page, filterArr[7], selects, price1, price2, checked)}>{filterArr[7]}</Text3>
                <Filter4>Для мужчин</Filter4>
                <Filter4>Для женщин</Filter4>
            </SideBarMenu1>
            <Image3 src={inputimg3}/>
          </SideBar>
          {/* Список товаров */}
          <ProductListPart>
            {/* <ProductsPart> */}
            <MainContext.Provider value ={{getProducts}}>
            {/* <ProductsPart> */}
              {productList?.map((product, index) => (
                <ProductItem product={product} key={index} handleShoppingCart={handleShoppingCart}/>
              ))}
              {/* </ProductsPart> */}
            </MainContext.Provider>
            {/* </ProductsPart> */}
            {/* Пагинация */}
            <PaginationPart>
              <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
            </PaginationPart>
            <Text9>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, 
              vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. 
              Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. 
              Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
            </Text9>
          </ProductListPart>
        </MainPart>
      </Container>
      <Footer/>
    </Wrapper>
  );
};

export default ProductList;