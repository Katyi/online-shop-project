import { useState } from "react";
import { Product as Product} from "../ProductList";
import {Wrapper,Container, Part1, Part2, NavigateButtonLine, Image1, Image2, Text1, Text2, Form, Input, Button, Row} from "./updateProduct.style.js";
import inputimg1 from '../../assets/productList/rectangle1.png';
import inputimg2 from '../../assets/productList/vector15.png';
import { Link, useLocation, useNavigate } from "react-router-dom";

export interface Data {
  products:Product[]
};

const UpdateProduct = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  const [updProduct, setUpdProduct] = useState<Product>({
    id: product.id, 
    name: product.name,
    url: product.url,
    amount: product.amount,
    size: product.size,
    sizeType: product.sizeType,
    barcode: product.barcode,
    producer: product.producer,
    brand: product.brand,
    description: product.description,
    price: product.price,
    caretype: product.caretype
  });

  const updateData =  (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Все товары из json достаю
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);
    console.log(updProduct);
    data.products= data.products.filter(item => item.id !== product.id);
    data.products.push(updProduct);
    data.products.sort((a,b)=>a.id > b.id ? 1 : -1);
    console.log(data.products);
    localStorage.setItem('products',JSON.stringify({products:data.products}));
    navigate("/admin");
  };

  return (
    <Wrapper>
      <Container>
        {/* хлебные крошки */}
        <Part1>
          {/* Ведет в администрирование */}
          <Link to="/admin">Назад</Link> 
        </Part1>
        <Link to="/">
          <NavigateButtonLine>
            <Image1 src={inputimg1}/>
            <Image2 src={inputimg2}/>
            <Text1>НАЗАД</Text1>
          </NavigateButtonLine>
        </Link>
        <Part2>
          <Form >
            <Row>
              <Text2>Название товара:</Text2>
              <Input
                value={updProduct.name}
                onChange={e => setUpdProduct({...updProduct, name: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Ссылка на фото товара:</Text2>
              <Input
                value={updProduct.url}
                onChange={e => setUpdProduct({...updProduct, url: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Кол-во в упаковке:</Text2>
              <Input
                value={updProduct.amount}
                onChange={e => setUpdProduct({...updProduct, amount: Number(e.target.value) })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Вес или объем:</Text2>
              <Input
                value={updProduct.size}
                onChange={e => setUpdProduct({...updProduct, size: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Тип измерения:</Text2>
              <Input
                value={updProduct.sizeType}
                onChange={e => setUpdProduct({...updProduct, sizeType: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Штрихкод:</Text2>
              <Input
                value={updProduct.barcode}
                onChange={e => setUpdProduct({...updProduct, barcode: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Производитель:</Text2>
              <Input
                value={updProduct.producer}
                onChange={e => setUpdProduct({...updProduct, producer: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Бренд:</Text2>
              <Input
                value={updProduct.brand}
                onChange={e => setUpdProduct({...updProduct, brand: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Описание:</Text2>
              <Input
                value={updProduct.description}
                onChange={e => setUpdProduct({...updProduct, description: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Цена:</Text2>
              <Input
                value={updProduct.price}
                onChange={e => setUpdProduct({...updProduct, price: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Тип товара</Text2>
              <Input
                value={updProduct.caretype}
                onChange={e => setUpdProduct({...updProduct, caretype: [e.target.value] })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Button onClick={updateData}>Редактировать товар</Button>
          </Form>
        </Part2>
      </Container>
    </Wrapper>          
  );
}

export default UpdateProduct;