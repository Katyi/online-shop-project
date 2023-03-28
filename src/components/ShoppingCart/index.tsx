import Navbar from "../Navbar";
import inputimg1 from '../../assets/shoppingCart/vector10.png';
import inputimg2 from '../../assets/shoppingCart/vector11.png';
import inputimg3 from '../../assets/productItem/vector5.png';
import inputimg4 from '../../assets/productItem/vector6.png';
import inputimg5 from '../../assets/shoppingCart/vector12.png';
import inputimg6 from '../../assets/shoppingCart/buttonMinus.png';
import inputimg7 from '../../assets/shoppingCart/buttonPlus.png';
import inputimg8 from '../../assets/shoppingCart/buttonDelete.png';
import inputimg9 from '../../assets/shoppingCart/buttonOrder.png';
import {Wrapper,Container, Part1, Text1, Image1, Text2, Part2, Image2, CartItem, Image3, CartItemImg, CartItemInfo, Text3, Text4} from "./shoppingCart.style.js";
import {CartItemInfoPart1, Size, Image4, Image5, Image6, ButtonPart, Button, Image7, Price, ButtonDelete, Image8, Part3, 
  ButtonOrder, Image9, TotalPrice, Quantity, AfterOrderPart, Text5} from "./shoppingCart.style.js";
import { Link } from 'react-router-dom';
import { useState } from "react";

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
  quantity: number;
};

const ShoppingCart = () => {
  let int  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:Product[] = JSON.parse(int);
  let shoppingData1:Product[] = [];
  shoppingData.forEach((obj, index)=>{
    if (shoppingData1.find(i=>i.id===obj.id)===undefined){
      if (!obj.quantity) obj.quantity = 1;
      shoppingData1.push(obj)
    } else {
      let newObj = shoppingData1.find(i=>i.id===obj.id) as Product;
      newObj.quantity += 1;
    }
  })
  let totalPrice = Number(shoppingData1.reduce((summ, item)=> summ + item.quantity * item.price, 0).toFixed(2));
  const [indForShow, setindForShow] = useState(0);
  const [shoppingDataLength, setShoppingDataLength] = useState(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
  console.log(shoppingData1);
  const [productList, setProductList] = useState(shoppingData1);
  
  const deleteShoppingCartList = (index1:number) => {
    shoppingData1 = shoppingData1.filter((item,index)=>{return index !== index1});
    setProductList(shoppingData1);
    setShoppingDataLength(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };

  const decreaseQuantity = (index1:number) => {
    shoppingData1.forEach((item, index)=> index === index1 ? item.quantity-- : item.quantity);
    shoppingData1 = shoppingData1.filter(item=>item.quantity !== 0);
    setProductList(shoppingData1);
    setShoppingDataLength(shoppingData1.reduce((acc, item)=>acc + item.quantity, 0));
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };
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
    // localStorage.removeItem("selectedProductsList");
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData1));
  };

  // useEffect(() => {
  //   getShoppingCartList(shoppingDataLength);
  // }, [shoppingDataLength]);

  return (
    <Wrapper>
      <Navbar selectedProductQuantity={shoppingDataLength} totalPrice={totalPrice}/>
      <Container>
      <Part1>
        <Link to="/"><Text1>Главная</Text1></Link>
        <Image1  src={inputimg1}/>
        <Text1>Корзина</Text1>
      </Part1>
      <Text2>Корзина</Text2>
      {indForShow === 1 &&
      <AfterOrderPart>
        <Text5>Спасибо за заказ!</Text5>
      </AfterOrderPart>
      }
      {productList.map((item, index)=>(
        <Part2 key={index}>
          <Image2 src={inputimg2}/>
          <CartItem>
            <CartItemImg>
              <Image3  src={item.url}/>
            </CartItemImg>
             <CartItemInfo>
              <CartItemInfoPart1>
                {item.sizeType === 'мл' ? <Image4 src={inputimg3}/> : <Image5 src={inputimg4}/>}
                <Size>{item.size} {item.sizeType}</Size>
              </CartItemInfoPart1>
              <Text3>{item.name}</Text3>
              <Text4>{item.description}</Text4>
            </CartItemInfo>
            <Image6 src={inputimg5}/>
            <ButtonPart>
              <Button onClick={e=>decreaseQuantity(index)}><Image7 src={inputimg6}/></Button>
              <Quantity>{item.quantity}</Quantity>
              <Button onClick={e=>increaseQuantity(index)}><Image7 src={inputimg7}/></Button>
            </ButtonPart>
            <Image6 src={inputimg5}/>
            <Price>{item.price} ₸</Price>
            <Image6 src={inputimg5}/>
            <ButtonDelete onClick={e=>deleteShoppingCartList(index)}>
              <Image8 src={inputimg8}/>
            </ButtonDelete>
         </CartItem>
        </Part2>
        ))}
        <Image2 src={inputimg2}/>
        <Part3>
          <ButtonOrder onClick={e=>orderProducts()}><Image9 src={inputimg9}/></ButtonOrder>
          <TotalPrice>{totalPrice} ₸</TotalPrice>
        </Part3>
      </Container>
    </Wrapper>          
  );
}

export default ShoppingCart;