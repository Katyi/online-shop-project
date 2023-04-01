import { useState } from "react";
import Navbar from "../Navbar";
import { IProduct as IProduct} from "../ProductList/index";
import {Wrapper,Container, Part1, Image1, Part2, ImagePart, InfoPart, Image2, Text1, ProductName, ProductSize, Image3, Image4, 
  Size, PriceButtonPart, Price, ButtonPart, Button1, Image5, Quantity, Button2, Text2, Image6, SomeTextPart, ShareIcon, Image7, 
  Text3, Text4, ProductInfo, Text5, Button3, Button4, Text6, Image8, Image9, SpecificationInfo, NavigateButtonLine, Image10, 
  Image11, Text7, Row1, Button5} from "./productCard.style.js";
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
import inputimg11 from '../../assets/productList/rectangle1.png';
import inputimg12 from '../../assets/productList/vector15.png';
import { Link } from "react-router-dom";

export interface Data {
  products:IProduct[]
};

const ProductCard = () => {
  // Берем данные корзины из json 
  let int  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:IProduct[] = JSON.parse(int);
  let selectedProducts:IProduct[] = [];

  // Стоимость и колич-во товаров в корзине
  let shoppingDataLength = 0;
  if (shoppingData !== null) {
    selectedProducts = shoppingData;
    shoppingDataLength = shoppingData.reduce((acc, item)=>acc + item.quantity, 0)
  }
  const [selectedProductsList, setSelectedProductsList] = useState(selectedProducts);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(shoppingDataLength);
  let totalPrice = 0;
  totalPrice = Number(selectedProductsList.reduce((acc, item)=> acc + item.quantity * item.price, 0).toFixed(2));
 
  const [productList, setProductList] = useState(shoppingData);
  // индикаторы для скрывающих тэги кнопок
  const [indForShow1, setindForShow1] = useState(0);
  const [indForShow2, setindForShow2] = useState(0);
  
  // Все товары из json
  let int1  = localStorage.getItem("products") as string;
  let data:Data = JSON.parse(int1);
  const productId = Number(window.location.pathname.split('/')[2]);
  const [productItem, setProductItem] = useState(data.products.filter(item=>item.id === productId)[0]);
  
  // для расчета стоимости и количества в карточке

  const [quantity, setQuantity] = useState(0);
  
  console.log(quantity);
  // уменьшение количества и стоимости в карточке
  const decreaseQuantity = () => {
    if (quantity!==0) {
      setQuantity((prev)=>prev -1);
    }
  };

  // увеличение количества и стоимости в карточке
  const increaseQuantity = () => {
    setQuantity((prev)=>prev + 1);
  };

  // добавление в корзину
   const  handleShoppingCart =  () => {
    const newProd = Object.assign({}, productItem) as IProduct;
    newProd.quantity  = quantity;
    // newProd.price = quantity * productItem.price;
    let int  = localStorage.getItem("selectedProductsList") as string;
    let shoppingData:IProduct[] = JSON.parse(int);
    let index1 = newProd.id;
    let i = shoppingData.findIndex((item)=> item.id === index1);
      if( i>=0){ shoppingData[i].quantity  += quantity } else {shoppingData.push(newProd)};
    setSelectedProductQuantity((prev)=> prev + quantity);
    setSelectedProductsList((prev)=>[...prev, newProd]);
    console.log(shoppingData);
    localStorage.setItem("selectedProductsList", JSON.stringify(shoppingData));
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
      <Navbar selectedProductQuantity={selectedProductQuantity} totalPrice={totalPrice}/>
      <Container>
        {/* хлебные крошки */}
        <Part1>
          {/* Главная тоже ведет в каталог */}
          <Link to="/">Главная</Link> 
          <Image1 src={inputimg1}/>
          <Link to="/">Каталог</Link>
        <Image1 src={inputimg1}/>{productItem.name}
        </Part1>
        <Link to="/">
          <NavigateButtonLine>
            <Image10 src={inputimg11}/>
            <Image11 src={inputimg12}/>
            <Text7>НАЗАД</Text7>
          </NavigateButtonLine>
        </Link>
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
              {productItem.amount === 1 ? <Size>{productItem.size} {productItem.sizeType}</Size> : <Size>{productItem.amount}X{productItem.size} {productItem.sizeType}</Size>}
            </ProductSize>
            <PriceButtonPart>
              <Price>{productItem.price} ₸</Price>
              <ButtonPart>
                <Button1 style={{background:"transparent"}} onClick={()=>decreaseQuantity()}><Image5 src={inputimg4}/></Button1>
                <Quantity>{quantity}</Quantity>
                <Button1 style={{background:"transparent"}} onClick={e=>increaseQuantity()}><Image5 src={inputimg5}/></Button1>
              </ButtonPart>
              <Button2 onClick={()=>{handleShoppingCart()}}>
                <Text2>В КОРЗИНУ</Text2>
                <Image6 src={inputimg6}/>
              </Button2>
            </PriceButtonPart>
            <SomeTextPart>
              <Row1>
                <Button5 onClick={()=>{handleShoppingCart()}}>
                  <Text2>В КОРЗИНУ</Text2>
                  <Image6 src={inputimg6}/>
                </Button5>
                <ShareIcon><Image7 src={inputimg7}/></ShareIcon>
              </Row1>
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