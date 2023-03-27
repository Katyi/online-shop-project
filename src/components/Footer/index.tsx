import inputimg1 from '../../assets/footer/logo2.png';
import inputimg2 from '../../assets/footer/icon11.png';
import inputimg3 from '../../assets/navbar/icon5.png';
import inputimg4 from '../../assets/footer/whatsapp.png';
import inputimg5 from '../../assets/footer/telegram.png';
import inputimg6 from '../../assets/footer/visa1.png';
import inputimg7 from '../../assets/footer/visa2.png';
import {Wrapper, Container, Column, Input, InputText, Link1, Logos, Visas} from "./footer.style.js";
import {Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8, Text9, Text10} from "./footer.style.js";
import {Image1, Image2, Image3, Image4, Image5, Image6, Image7} from "./footer.style.js";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Column style={{width: "28vw"}}>
          <Image1 src={inputimg1}/>
          <Text1>Компания «Султан» — снабжаем розничные магазины товарами 
            "под ключ" в Кокчетаве и Акмолинской области</Text1>
          <Text2>Подпишись на скидки и акции</Text2>
          <Input>
            <InputText>Введите ваш E-mail</InputText>
            <Image2 src={inputimg2}/>
          </Input>
        </Column>
        <Column style={{width: "19vw"}}>
          <Text3>Меню сайта:</Text3>
          <Text4>О компании</Text4>
          <Text4>Доставка и оплата</Text4>
          <Text4>Возврат</Text4>
          <Text4>Контакты</Text4>
        </Column>
        <Column style={{width: "19vw"}}>
          <Text3>Категории:</Text3>
          <Text4>Бытовая химия</Text4>
          <Text4>Косметика и гигиена</Text4>
          <Text4>Товары для дома</Text4>
          <Text4>Товары для детей и мам</Text4>
          <Text4>Посуда</Text4>
        </Column>
        <Column style={{width: "21vw"}}>
          <Text3>Скачать прайс-лист:</Text3>
          <Link1>
            <Text5>Прайс-лист</Text5>
            <Image3 src={inputimg3}/>
          </Link1>
          <Text4>Связь в мессенджерах:</Text4>
          <Logos>
            <Image4 src={inputimg4}/>
            <Image5 src={inputimg5}/>
          </Logos>
        </Column>
        <Column style={{width: "11vw"}}>
          <Text3>Контакты:</Text3>
          <Text6>+7 (777) 490-00-91</Text6>
          <Text7>время работы: 9:00-20:00</Text7>
          <Text8>Заказать звонок</Text8>
          <Text9>opt.sultan@mail.ru 
            <Text10>На связи в любое время</Text10>
          </Text9>
          <Visas>
            <Image6 src={inputimg6}/>
            <Image7 src={inputimg7}/>
          </Visas>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Footer;
