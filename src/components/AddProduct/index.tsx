import { useState } from "react";
import { Product as Product} from "../ProductList/index";
import {Wrapper,Container, Part1, Part2, Text1, Form, Input, Button, Row, SelecDiv} from "./addProduct.style.js";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

export interface Data {
  products:Product[]
};

export interface Selected {
  value: string;
  label: string;
};

const AddProduct = () => {
  const careTypeArr = [
    {value: "Уход за телом", label: "Уход за телом"}, 
    {value: "Уход за руками", label: "Уход за руками"}, 
    {value: "Уход за ногами", label: "Уход за ногами"},
    {value: "Уход за лицом", label: "Уход за лицом"},
    {value: "Уход за волосами", label: "Уход за волосами"},
    {value: "Средства для загара", label:"Средства для загара"},
    {value: "Средства для бритья", label: "Средства для бритья"},
    {value: "Подарочные наборы", label: "Подарочные наборы"}, 
    {value: "Гигиеническая продукция", label: "Гигиеническая продукция"}, 
    {value: "Гигиена полости рта", label: "Гигиена полости рта"},
    {value: "Бумажная продукция", label: "Бумажная продукция"}
  ];
  
  const [selectedOptions, setSelectedOptions] = useState<Selected[]>([]);
  const [url, setUrl] = useState('');
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
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);

    let maxID = Number.NEGATIVE_INFINITY;
    data.products.forEach(( item) => maxID = Math.max(maxID, item.id) );
    newProduct.id = ++maxID;

    selectedOptions.map((item, index) => newProduct.caretype[index] = item.value);

    data.products.push(newProduct);
    localStorage.setItem('products',JSON.stringify({products:data.products}));
    navigate("/online-shop-project/admin");
  };


  function handleSelect(data:any) {
    setSelectedOptions(data);
  };

  return (
    <Wrapper>
      <Container>
        {/* хлебные крошки */}
        <Part1>
          {/* Ведет в администрирование */}
          <Link to="/admin">Назад</Link> 
        </Part1>
        <Part2>
          <Form >
            <Row>
              <Text1>Название товара:</Text1>
              <Input
                value={newProduct.name}
                onChange={e => setNewProduct({...newProduct, name: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Ссылка на фото товара:</Text1>
              <Input
                value={newProduct.url}
                onChange={e => setNewProduct({...newProduct, url: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Кол-во в упаковке:</Text1>
              <Input
                value={newProduct.amount}
                onChange={e => setNewProduct({...newProduct, amount: Number(e.target.value) })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Вес или объем:</Text1>
              <Input
                value={newProduct.size}
                onChange={e => setNewProduct({...newProduct, size: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Тип измерения:</Text1>
              <Input
                value={newProduct.sizeType}
                onChange={e => setNewProduct({...newProduct, sizeType: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Штрихкод:</Text1>
              <Input
                value={newProduct.barcode}
                onChange={e => setNewProduct({...newProduct, barcode: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Производитель:</Text1>
              <Input
                value={newProduct.producer}
                onChange={e => setNewProduct({...newProduct, producer: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Бренд:</Text1>
              <Input
                value={newProduct.brand}
                onChange={e => setNewProduct({...newProduct, brand: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Описание:</Text1>
              <Input
                value={newProduct.description}
                onChange={e => setNewProduct({...newProduct, description: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Цена:</Text1>
              <Input
                value={newProduct.price}
                onChange={e => setNewProduct({...newProduct, price: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Тип ухода:</Text1>
              <SelecDiv>
                <Select
                  options={careTypeArr}
                  placeholder="Выберите тип ухода"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  isMulti
                />
              </SelecDiv>
            </Row>
            <Button onClick={addNewProduct}>Добавить товар</Button>
          </Form>
        </Part2>
      </Container>
    </Wrapper>          
  );
}

export default AddProduct;