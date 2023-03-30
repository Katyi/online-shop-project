import { useState } from "react";
import Navbar from "../Navbar";
import {Wrapper,Container, Part1, Image1, Part2, ImagePart, InfoPart, Image2, Text1, ProductName, ProductSize, Image3, Image4, 
  Size, PriceButtonPart, Price, ButtonPart, Button1, Image5, Quantity, Button2, Text2, Image6, SomeTextPart, ShareIcon, Image7, 
  Text3, Text4, ProductInfo, Text5, Button3, Button4, Text6, Image8, Image9, SpecificationInfo} from "./productCard.style.js";
import inputimg1 from '../../assets/productCard/vector13.png';
import inputimg2 from '../../assets/productItem/vector6.png';
import inputimg3 from '../../assets/productItem/vector7.png';
import inputimg4 from '../../assets/shoppingCart/buttonMinus.png';
import inputimg5 from '../../assets/shoppingCart/buttonPlus.png';
import inputimg6 from '../../assets/productItem/vector7.png';
import inputimg7 from '../../assets/productCard/shareIcon.png';
import inputimg8 from '../../assets/productCard/icon12.png';
import inputimg9 from '../../assets/productCard/icon13.png';
import inputimg10 from '../../assets/productCard/vector14.png';
import { Link } from "react-router-dom";

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
export interface IProduct {
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
export interface Data {
  products:Product[]
};

const ProductCard = () => {
  // Берем данные корзины из json 
  let int  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:Product[] = JSON.parse(int);
  let shoppingData1:Product[] = [];
  // сортируем корзину по id и присваиваем кол-во выбранного товара для каждого id
  shoppingData.forEach((obj, index)=>{
    if (shoppingData1.find(i => i.id === obj.id) === undefined) {
      if (!obj.quantity) obj.quantity = 1;
      shoppingData1.push(obj);
    } else {
      let newObj = shoppingData1.find(i => i.id === obj.id) as Product;
      newObj.quantity += 1;
      newObj.price = newObj.quantity * obj.price;
    }
  })

  // Стоимость и колич-во товаров в корзине
  const[totalPrice, setTotalPrice] = useState(Number(shoppingData1.reduce((summ, item)=> summ + item.price, 0).toFixed(2)));
  const [totalQuantity, setTotalQuantity] = useState(shoppingData1.reduce((summ, item)=> summ + item.quantity, 0));
  const [productList, setProductList] = useState(shoppingData); // надо проверить!!!
  // индикаторы для скрывающих тэги кнопок
  const [indForShow1, setindForShow1] = useState(0);
  const [indForShow2, setindForShow2] = useState(0);
  
  // Все товары из json
  let int1  = localStorage.getItem("products") as string;
  let data:Data = JSON.parse(int1);
  const productId = Number(window.location.pathname.split('/')[2]);
  const [productItem, setProductItem] = useState(data.products.filter(item=>item.id === productId)[0]);
  
  // Определяем кол-во для товара в карточке (есть ли она уже в корзине)
  let findId = shoppingData1.findIndex(i => i.id === productItem.id);
  if (findId>=0) {
    productItem.quantity = shoppingData1[findId].quantity;
  } else {
    productItem.quantity = 0;
  }

  // для расчета стоимости и количества в карточке
  const [quantity, setQuantity] = useState(productItem.quantity);
  const [price, setPrice] = useState(Number((productItem.price * quantity).toFixed(2)));
  // let selectedProducts:Product[] = [];
  
  // уменьшение количества и стоимости в карточке
  const decreaseQuantity = () => {
    if (quantity!==0) {
      setPrice((prev)=>Number((prev - prev/quantity).toFixed(2)));
      setQuantity((prev)=>prev -1);
    }
  };

  // увеличение количества и стоимости в карточке
  const increaseQuantity = () => {
    if (quantity>0) {
      setPrice((prev)=>Number((prev + prev/quantity).toFixed(2)));
    } else {
      setPrice(productItem.price)
    }
    setQuantity((prev)=>prev + 1);
  };

  // добавление в корзину
  const handleShoppingCart = () => {
    setTotalPrice((prev)=> Number((prev + price).toFixed(2)));
    setTotalQuantity((prev)=> prev + quantity);
  };

  // изменение индикаторов для скрывающих тэги кнопок
  const closeInfo1 = () => {
    setindForShow1(indForShow1 === 0 ? 1 : 0);
  };
  const closeInfo2 = () => {
    setindForShow2(indForShow2 === 0 ? 1 : 0);
  };

  return (
    <Wrapper>
      <Navbar selectedProductQuantity={totalQuantity} totalPrice={totalPrice}/>
      <Container>
        {/* хлебные крошки */}
        <Part1><Link to="/">Главная</Link><Image1 src={inputimg1}/>
        <Link to="/">Каталог</Link>
        <Image1 src={inputimg1}/>{productItem.name}</Part1>
        <Part2>
          {/* фото товара */}
          <ImagePart>
            <Image2 src={productItem.url}/>
          </ImagePart>
          {/* инфо о товаре */}
          <InfoPart>
            <Text1>В наличии</Text1>
            <ProductName>
              <span style={{fontWeight: 800}}>{productItem.name.split(' ')[0].concat(' ')}</span>
              {(productItem.name.split(' ').filter((item, index)=> index>0).join(' '))}
            </ProductName>
            <ProductSize>
              {productItem.sizeType === 'мл' ? <Image3 src={inputimg1}/> : <Image4 src={inputimg2}/>}
              <Size>{productItem.size} {productItem.sizeType}</Size>
            </ProductSize>
            <PriceButtonPart>
              <Price>{price} ₸</Price>
              <ButtonPart>
                <Button1 onClick={()=>decreaseQuantity()}><Image5 src={inputimg4}/></Button1>
                <Quantity>{quantity}</Quantity>
                <Button1 onClick={e=>increaseQuantity()}><Image5 src={inputimg5}/></Button1>
              </ButtonPart>
              <Button2 onClick={()=>{handleShoppingCart()}}>
                <Text2>В КОРЗИНУ</Text2>
                <Image6 src={inputimg6}/>
              </Button2>
            </PriceButtonPart>
            <SomeTextPart>
              <ShareIcon><Image7 src={inputimg7}/></ShareIcon>
              <Text3>При покупке от <span style={{fontWeight:"700"}}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области</Text3>
               <Text4>Прайс-лист</Text4>
            </SomeTextPart>
            <ProductInfo>
              <Text5><span style={{fontWeight:"300"}}>Производитель:</span> {productItem.producer}</Text5>
              <Text5><span style={{fontWeight:"300"}}>Бренд:</span> {productItem.brand}</Text5>
              <Text5><span style={{fontWeight:"300"}}>Артикул:</span> 460404</Text5>
              {indForShow2 === 1 &&
                <Text5><span style={{fontWeight:"300"}}>Кол-во в коробке:</span> 2</Text5>
              }
              <Text5><span style={{fontWeight:"300"}}>Штрихкод:</span> {productItem.barcode}</Text5>
              {indForShow2 === 1 &&
                <Text5><span style={{fontWeight:"300"}}>Размеры коробки<span style={{fontWeight:"700", fontSize:"8px", lineHeight:"12px"}}>(Д*Ш*В)</span>:</span> 10х10х10</Text5>
              }
              {indForShow2 === 1 &&
                <Text5><span style={{fontWeight:"300"}}>Вес коробки:</span> 1020 г</Text5>
              }
            </ProductInfo>
            {/* скрывающие тэги кнопки */}
            <Button3 onClick={()=>closeInfo1()}>Описание 
              { indForShow1 === 0 ? <Image8  src={inputimg8}/> : <Image8 src={inputimg9}/>}
            </Button3>
            {indForShow1 === 0 &&
              <Text6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis 
                iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque 
                consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
              </Text6>
            }
            <Image9 src={inputimg10}/>
            <Button4 onClick={()=>closeInfo2()}>Характеристики
              {indForShow2 === 0 ? <Image8  src={inputimg8}/> : <Image8 src={inputimg9}/>}
            </Button4>
            {indForShow2 === 0 &&
              <SpecificationInfo>
                <Text5><span style={{fontWeight:"300"}}>Назначение:</span> {productItem.brand}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Тип:</span> {productItem.brand}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Производитель:</span> {productItem.producer}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Бренд:</span> {productItem.brand}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Артикул:</span> 4604049097548</Text5>
                <Text5><span style={{fontWeight:"300"}}>Штрихкод:</span> {productItem.barcode}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Вес:</span> {productItem.size} {productItem.sizeType}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Объем:</span> {productItem.size} {productItem.sizeType}</Text5>
                <Text5><span style={{fontWeight:"300"}}>Кол-во в коробке:</span> {productItem.size} {productItem.sizeType}</Text5>
              </SpecificationInfo>
            }
          </InfoPart>
        </Part2>
      </Container>
    </Wrapper>          
  );
}

export default ProductCard;