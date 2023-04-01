import { useState } from "react";
import { Product as Product} from "../ProductList/index";
import {Wrapper,Container, Part1, Part2, NavigateButtonLine, Image1, Image2, Text1, Text2, Form, Input, Button, Row} from "./addProduct.style.js";
import inputimg1 from '../../assets/productList/rectangle1.png';
import inputimg2 from '../../assets/productList/vector15.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export interface Data {
  products:Product[]
};

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0, 
    name: '', 
    url: '',
    amount: 0,
    size: 0,
    sizeType: '',
    barcode: '',
    producer: '',
    brand: '',
    description: '',
    price: 0,
    caretype: []
  });
  const navigate = useNavigate();

  const addNewProduct =  (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Все товары из json достаю
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);
    let maxID = Number.NEGATIVE_INFINITY;
    console.log(data.products);
    data.products.forEach(( item) => maxID = Math.max(maxID, item.id) );
  
    console.log(maxID);
    newProduct.id = ++maxID;
    console.log(newProduct);
    data.products.push(newProduct);
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
                value={newProduct.name}
                onChange={e => setNewProduct({...newProduct, name: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Ссылка на фото товара:</Text2>
              <Input
                value={newProduct.url}
                onChange={e => setNewProduct({...newProduct, url: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Кол-во в упаковке:</Text2>
              <Input
                value={newProduct.amount}
                onChange={e => setNewProduct({...newProduct, amount: Number(e.target.value) })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Вес или объем:</Text2>
              <Input
                value={newProduct.size}
                onChange={e => setNewProduct({...newProduct, size: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Тип измерения:</Text2>
              <Input
                value={newProduct.sizeType}
                onChange={e => setNewProduct({...newProduct, sizeType: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Штрихкод:</Text2>
              <Input
                value={newProduct.barcode}
                onChange={e => setNewProduct({...newProduct, barcode: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Производитель:</Text2>
              <Input
                value={newProduct.producer}
                onChange={e => setNewProduct({...newProduct, producer: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Бренд:</Text2>
              <Input
                value={newProduct.brand}
                onChange={e => setNewProduct({...newProduct, brand: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Описание:</Text2>
              <Input
                value={newProduct.description}
                onChange={e => setNewProduct({...newProduct, description: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Цена:</Text2>
              <Input
                value={newProduct.price}
                onChange={e => setNewProduct({...newProduct, price: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text2>Тип товара</Text2>
              <Input
                value={newProduct.caretype}
                onChange={e => setNewProduct({...newProduct, caretype: [e.target.value] })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Button onClick={addNewProduct}>Добавить товар</Button>
          </Form>
        </Part2>
      </Container>
    </Wrapper>          
  );
}

export default AddProduct;