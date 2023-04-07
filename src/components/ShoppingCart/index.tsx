import Navbar from "../Navbar";
import inputimg1 from '../../assets/shoppingCart/vector10.png';
import inputimg2 from '../../assets/shoppingCart/vector11.png';
import inputimg3 from '../../assets/productItem/vector5.png';
import inputimg4 from '../../assets/productItem/vector6.png';
import inputimg5 from '../../assets/shoppingCart/vector12.png';
import inputimg6 from '../../assets/shoppingCart/buttonMinus.png';
import inputimg7 from '../../assets/shoppingCart/buttonPlus.png';
import inputimg8 from '../../assets/shoppingCart/buttonDelete.png';
import inputimg9 from '../../assets/productList/rectangle1.png';
import inputimg10 from '../../assets/productList/vector15.png';
import {Wrapper,Container, Part1, Text1, Image1, Text2, Part2, Image2, CartItem, Image3, CartItemImg, CartItemInfo, Text3, Text4} from "./shoppingCart.style.js";
import {CartItemInfoPart1, Size, Image4, Image5, Image6, Image6_1, Image7, ButtonPart, Button, Image10, Image11, Price, ButtonDelete, Image8, Part3, 
  ButtonOrder, TotalPrice, Quantity, AfterOrderPart, Text5, Text6, Row1, NavigateButtonLine} from "./shoppingCart.style.js";
import { Link } from 'react-router-dom';
import { FC, useState } from "react";
import { IProduct as IProduct } from '../ProductList';
import Footer from "../Footer";

interface IProps {
  products?: IProduct;
}


const ShoppingCart:FC<IProps> = ({products:testproducts}) => {
  let int  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:IProduct[] = JSON.parse(int);
  let shoppingData1:IProduct[] = [];

  // делаю массив объектов корзины уникальным и считаю кол-во каждого товара
  shoppingData.forEach((obj, index)=>{
    if (shoppingData1.find(i => i.id === obj.id) === undefined) {
      shoppingData1.push(obj);
    } else {
      let newObj = shoppingData1.find(i => i.id === obj.id) as IProduct;
      newObj.quantity += 1;
    }
  })

  // считаю общую стоимость корзины
  let totalPrice = Number(shoppingData1.reduce((summ, item)=> summ + item.quantity * item.price, 0).toFixed(2));

  // индикатор для появления надписи после заказа
  const [indForShow, setindForShow] = useState(0);
  
  // считаю кол-во товаров в корзине
  const [shoppingDataLength, setShoppingDataLength] = useState(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
  
  // массив товаров в корзине
  const [productList, setProductList] = useState(shoppingData1);
  
  // удаление товаров в корзине
  const deleteShoppingCartList = (index1:number) => {
    shoppingData1 = shoppingData1.filter((item,index)=>{return index !== index1});
    setProductList(shoppingData1);
    setShoppingDataLength(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };

  // уменьшение кол-ва товаров в корзине
  const decreaseQuantity = (index1:number) => {
    shoppingData1.forEach((item, index)=> index === index1 ? item.quantity-- : item.quantity);
    shoppingData1 = shoppingData1.filter(item=>item.quantity !== 0);
    setProductList(shoppingData1);
    setShoppingDataLength(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };

  // увеличение кол-ва товаров в корзине
  const increaseQuantity = (index1:number) => {
    shoppingData1.forEach((item, index)=> index === index1 ? item.quantity++ : item.quantity);
    setProductList(shoppingData1);
    setShoppingDataLength(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };

  const orderProducts = () => {
    shoppingData1 = [];
    setProductList([]);
    setShoppingDataLength(0);
    setindForShow(1);
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };

  return (
    <Wrapper>
      <Navbar selectedProductQuantity={shoppingDataLength} totalPrice={totalPrice}/>
      <Container>
      <Part1>
        <Link to="/"><Text1>Главная</Text1></Link>
        <Image1  src={inputimg1}/>
        <Text1 style={{opacity: "0.5"}}>Корзина</Text1>
      </Part1>
      <Link to="/">
        <NavigateButtonLine>
          <Image10 src={inputimg9}/>
          <Image11 src={inputimg10}/>
          <Text6>НАЗАД</Text6>
        </NavigateButtonLine>
      </Link>
      
      <Text2>Корзина</Text2>
      {indForShow === 1 &&
      <AfterOrderPart>
        <Text5>Спасибо за заказ!</Text5>
      </AfterOrderPart>
      }
      {productList?.map((item, index)=>(
        <Part2 key={index}>
          <Image2 src={inputimg2}/>
          <CartItem>
            <CartItemImg>
              <Image3  src={item.url}/>
            </CartItemImg>
             <CartItemInfo>
              <CartItemInfoPart1>
                {item.sizeType === 'мл' ? <Image4 src={inputimg3}/> : <Image5 src={inputimg4}/>}
                {item.amount === 1 ? <Size>{item.size} {item.sizeType}</Size> : <Size>{item.amount}X{item.size} {item.sizeType}</Size>}
                <Size>{item.size} {item.sizeType}</Size>
              </CartItemInfoPart1>
              <Text3>{item.name}</Text3>
              <Text4>{item.description}</Text4>
            </CartItemInfo>
            <Image6 src={inputimg5}/>
            <Row1>
              <ButtonPart>
                <Button style={{background:"transparent"}} onClick={e=>decreaseQuantity(index)}><Image7 src={inputimg6}/></Button>
                <Quantity data-testid="quantity">{item.quantity}</Quantity>
                <Button style={{background:"transparent"}} onClick={e=>increaseQuantity(index)}><Image7 src={inputimg7}/></Button>
              </ButtonPart>
              <Image6_1 src={inputimg5}/>
              <Price data-testid="price">{(item.price * item.quantity).toFixed(2)} ₸</Price>
              <Image6_1 src={inputimg5}/>
              <ButtonDelete onClick={e=>deleteShoppingCartList(index)}>
                <Image8 src={inputimg8}/>
              </ButtonDelete>
            </Row1>
         </CartItem>
        </Part2>
        ))}
        {indForShow === 0 &&
          <Image2 src={inputimg2}/>
        }
        <Part3>
          <ButtonOrder onClick={e=>orderProducts()}>Оформить заказ</ButtonOrder>
          <TotalPrice data-testid="totalPrice">{totalPrice} ₸</TotalPrice>
        </Part3>
      </Container>
      <Footer/>
    </Wrapper>          
  );
}

export default ShoppingCart;