import {products} from "../../db";
import inputimg1 from '../../assets/productList/vector3.png';
import inputimg2 from '../../assets/navbar/icon4.png';
import inputimg3 from '../../assets/productList/vector4.png';
// import inputimg4 from '../../assets/productList/icon12.png';
import { useState, useEffect, createContext } from 'react';
import Navbar from "../Navbar";
import ProductItem from "../ProductItem";
import Pagination from "../Pagination";
import {Container, Wrapper, Part1, Part2, Part3, FilterContainer, Filter, FilterText1, Select1, Option1, Filter1, Filter2, Filter3}from "./productList.style.js";
import {MainPart, SideBar, ProductListPart, InputLine, Input1, InputWithButton, Input2, InputText2, CheckBox,CheckBoxLine, Input3, Label1} from "./productList.style.js";
import {Select2, Option2, SideBarMenu1, Filter4, PaginationPart} from "./productList.style.js";
import {Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8, Text9} from "./productList.style.js";
import {Image1, Image2, Image3} from "./productList.style.js";

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
};
interface Data {
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
  const limit = 15;
  const filterArr = ["Уход за телом", "Уход за руками", "Уход за ногами", "Уход за лицом", "Уход за волосами", "Средства для загара",
    "Средства для бритья", "Подарочные наборы", "Гигиеническая продукция", "Гигиена полости рта", "Бумажная продукция"];
  const curcat = "";
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [produserName, setProduserName] = useState("");
  let newProducerArr:NewProducerArr[] = [];
  let currentInput = "";
  let selectedProducts:Product[] = [];
  const [selectedProductsList, setSelectedProductsList] = useState(selectedProducts);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(0);
  let totalPrice = 0;

  localStorage.setItem("products", JSON.stringify(products));
  let int  = localStorage.getItem("products") as string;
  let data:Data = JSON.parse(int);
  let produserArr:ProducerArr={};
  data.products.forEach((item)=>{
  if (produserArr.hasOwnProperty(item.producer)){
    produserArr[item.producer] += 1
  } else {
    produserArr[item.producer] = 1
  }
  })
  for (const [key, value] of Object.entries(produserArr)) {
    newProducerArr.push({"name": key, "quantity": value, "checked": false})
  }
  newProducerArr = produserName !== '' ? newProducerArr.filter((item) => item.name === produserName) : newProducerArr;
  
  let newProducerArrLength = newProducerArr.length;
  const [checked, setChecked] = useState(
    new Array(newProducerArrLength).fill(false)
  );
  
  for (let i = 0; i < newProducerArr.length; i++) {
    newProducerArr[i].checked = checked[i]
  }
  
  const handleOnChange = (position:number) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updatedCheckedState);
  };
 
  const getProducts = (
    page:number, 
    curcat:string, 
    option:string, 
    price1:string, 
    price2:string, 
    checked:boolean[]
    ) => {
        
    let sortedFilteredData = [ ... data.products];
    if (option !== "") {
      if (option) {
        if (option === "Название (по убыванию)") {
          sortedFilteredData.sort((a, b) => (a.name < b.name ? 1 : -1));
          console.log(sortedFilteredData)
        } else if (option === "Название (по возрастанию)") {
          sortedFilteredData.sort((a, b) => (a.name > b.name ? 1 : -1));
          console.log(sortedFilteredData)
        } else if (option === "Цена (по убыванию)") {
          sortedFilteredData.sort((a, b) => b.price - a.price);
          console.log(sortedFilteredData)
        } else if (option === "Цена (по возрастанию)") {
          sortedFilteredData.sort((a, b) => a.price - b.price);
          console.log(sortedFilteredData)
        }
      }
    };
    
    let price3 = price2 === "" ? Infinity: Number(price2);
    sortedFilteredData = price1 !== '' || price2 !== '' 
      ? sortedFilteredData.filter(item => item.price >= Number(price1) && item.price <=price3) 
      : sortedFilteredData;

    

    sortedFilteredData = checked.includes(true)
      ? sortedFilteredData.filter(item=>  newProducerArr.find((elem)=>elem.name ==item.producer)?.checked) 
      : sortedFilteredData;
    
    sortedFilteredData = curcat !== '' ? sortedFilteredData.filter((item) => item.caretype.includes(curcat)) : sortedFilteredData;


    const totalCount = sortedFilteredData.length;
    setProductList(
      sortedFilteredData.filter((item,index) => index >= page * limit - limit  && index < page * limit)
    );
    setTotalPages(Math.ceil(totalCount / limit));
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
  
  const changePage = (page:number) => {
  setPage(page)
  }

  const handleShoppingCart = (product:Product) => {
    setSelectedProductsList((prev)=>[...prev, product]);
    setSelectedProductQuantity((prev)=>prev+1);
  }
  console.log(selectedProductsList);
  totalPrice = Number(selectedProductsList.reduce((acc, item)=> acc + item.price, 0).toFixed(2));
  localStorage.setItem("selectedProductsList", JSON.stringify(selectedProductsList));
  

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
          <Text2>Косметика и гигиена</Text2>
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
              <Input2 placeholder="Поиск..." type="text" onFocus={e=>{e.currentTarget.value=''}} onChange={e=>{{currentInput=e.currentTarget.value}}}/>
              <button onClick={e=>{setProduserName(currentInput)}}><Image2 src={inputimg2}/></button>
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
            <FilterContainer>  
            <Filter>
              <Select2>
                <Option2>Показать все</Option2>
                {newProducerArr.map((item, index)=>(
                <Option2 key={index}>{item.name}</Option2>
                ))}
              </Select2>
            </Filter>
            
          </FilterContainer>
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
          <ProductListPart>
            <MainContext.Provider value ={{getProducts}}>
              {productList?.map((product, index) => (
                <ProductItem product={product} key={index} handleShoppingCart={handleShoppingCart}/>
              ))}
            </MainContext.Provider>
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
    </Wrapper>
  );
};

export default ProductList;