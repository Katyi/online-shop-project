import inputimg1 from '../../assets/navbar/icon1.png';
import inputimg2 from '../../assets/navbar/vector1.png';
import inputimg3 from '../../assets/navbar/icon2.png';
import inputimg4 from '../../assets/navbar/line1.png';
import inputimg5 from '../../assets/navbar/logo1.png';
import inputimg6 from '../../assets/navbar/icon3.png';
import inputimg7 from '../../assets/navbar/icon4.png';
import inputimg8 from '../../assets/navbar/photo1.png';
import inputimg9 from '../../assets/navbar/icon5.png';
import inputimg10 from '../../assets/navbar/icon6.png';
import inputimg11 from '../../assets/navbar/icon7.png';
import inputimg12 from '../../assets/navbar/vector2.png';
import inputimg13 from '../../assets/navbar/icon8.png';
import inputimg14 from '../../assets/navbar/icon9.png';
import inputimg15 from '../../assets/navbar/icon10.png';
import {Wrapper,Container,Menu,Menu1,Menu2,Title,MenuItem,Header,HeaderMenu,Link1,Link2,Input,InputText,Info, PhoneInfo}from "./navbar.style.js";
import {Cart,Cart1, Cart2,Header2,Header2Part1,Header2Part2}from "./navbar.style.js";
import {Text,Text0, Text1,Text2,Text3, Text4,Text5,Text6,Text7,Text8 }from "./navbar.style.js";
import {Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,
  Image15,Image16,Image17,Image18,Image19,Image20 }from "./navbar.style.js";
import { Link } from 'react-router-dom';

interface Props { 
  selectedProductQuantity: number;
  totalPrice: number;
}

const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        {/* Верхнее меню */}
        <Menu>
          {/* Первая часть верхнего меню */}
          <Menu1>
            <Image1 src={inputimg1}/>
            <Title>г. Кокчетав, ул. Ж. Ташенова 129Б
              <Text>(Рынок Восточный)</Text>
            </Title>
            <Image2 src={inputimg2}/>
            <Image3 src={inputimg3}/>
            <Title>opt.sultan@mail.ru
              <Text>На связи в любое время</Text>
            </Title>
          </Menu1>
          {/* Вторая часть верхнего меню */}
          <Menu2>
            <MenuItem>О компании</MenuItem>
            <Image4 src={inputimg12}/>
            <MenuItem>Доставка и оплата</MenuItem>
            <Image4 src={inputimg12}/>
            <MenuItem>Возврат</MenuItem>
            <Image4 src={inputimg12}/>
            <MenuItem>Контакты</MenuItem>
          </Menu2>
        </Menu>
        {/* Нижнее меню */}
        <Header>
          <Image5 src={inputimg4}/>
          <HeaderMenu>
            <Image15 src={inputimg13}/>
            <Image6 src={inputimg5}/>
            <Link1>
              <Text0>Каталог</Text0>
              <Image7 src={inputimg6}/>
            </Link1>
            <Input>
              <InputText>Поиск...</InputText>
              <Image8 src={inputimg7}/>
            </Input>
            <Info>
              <PhoneInfo>
                <Text1>+7 (777) 490-00-91</Text1>
                <Text2>время работы: 9:00-20:00</Text2>
                <Text3>Заказать звонок</Text3>
              </PhoneInfo>
              <Image9 src={inputimg8}/>
            </Info>
            <Image10 src={inputimg12}/>
            <Link2>
              <Text0>Прайс-лист</Text0>
              <Image11 src={inputimg9}/>
            </Link2>
            <Image12 src={inputimg12}/>
            <Cart>
              <Cart1>
                <Link to="/shoppingCart" state =  {{selectedProductQuantity:props.selectedProductQuantity}}>
                  <Image13 src={inputimg10}/>
                  <Image14 src={inputimg11}/>
                  <Text4>{props.selectedProductQuantity}</Text4>
                </Link>
              </Cart1>
              <Cart2>
                <Text5>Корзина</Text5>
                <Text6>{props.totalPrice}</Text6>
              </Cart2>
            </Cart>
          </HeaderMenu>
        </Header>
        <Image16 src={inputimg4}/>
        <Header2>
          <Header2Part1>
            <Image17 src={inputimg14}/>
            <Text7>Каталог</Text7>
          </Header2Part1>
          <Image18 src={inputimg12}/>
          <Header2Part2>
            <Image19 src={inputimg15}/>
            <Text8>Поиск</Text8>
          </Header2Part2>
        </Header2>
        <Image20 src={inputimg4}/>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
