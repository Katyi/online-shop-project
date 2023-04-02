import { useState } from "react";
import { Product as Product} from "../ProductList";
import {Wrapper,Container, Part1, Part2, Text1, Form, Input, Button, Row, SelecDiv} from "./updateProduct.style.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";

export interface Data {
  products:Product[]
};

export interface Selected {
  value: string;
  label: string;
};

const UpdateProduct = () => {
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

  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();
  
  let oldTypeArr:Selected[] = [];
  product.caretype.map((item:string)=>oldTypeArr.push({value: item, label: item}));
  
  const [selectedOptions, setSelectedOptions] = useState(oldTypeArr);

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
    let int  = localStorage.getItem("products") as string;
    let data:Data = JSON.parse(int);

    data.products= data.products.filter(item => item.id !== product.id);

    if (selectedOptions.length>0) {
      selectedOptions.map((item, index) => updProduct.caretype[index] = item.value);
    } else {
      updProduct.caretype = [];
    }
    
    data.products.push(updProduct);
    
    data.products.sort((a,b)=>a.id > b.id ? 1 : -1);
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
                value={updProduct.name}
                onChange={e => setUpdProduct({...updProduct, name: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Ссылка на фото товара:</Text1>
              <Input
                value={updProduct.url}
                onChange={e => setUpdProduct({...updProduct, url: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Кол-во в упаковке:</Text1>
              <Input
                value={updProduct.amount}
                onChange={e => setUpdProduct({...updProduct, amount: Number(e.target.value) })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Вес или объем:</Text1>
              <Input
                value={updProduct.size}
                onChange={e => setUpdProduct({...updProduct, size: Number(e.target.value )})}
                type="number"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Тип измерения:</Text1>
              <Input
                value={updProduct.sizeType}
                onChange={e => setUpdProduct({...updProduct, sizeType: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Штрихкод:</Text1>
              <Input
                value={updProduct.barcode}
                onChange={e => setUpdProduct({...updProduct, barcode: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Производитель:</Text1>
              <Input
                value={updProduct.producer}
                onChange={e => setUpdProduct({...updProduct, producer: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Бренд:</Text1>
              <Input
                value={updProduct.brand}
                onChange={e => setUpdProduct({...updProduct, brand: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Описание:</Text1>
              <Input
                value={updProduct.description}
                onChange={e => setUpdProduct({...updProduct, description: e.target.value })}
                type="text"
                placeholder={""}
              />
            </Row>
            <Row>
              <Text1>Цена:</Text1>
              <Input
                value={updProduct.price}
                onChange={e => setUpdProduct({...updProduct, price: Number(e.target.value )})}
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
            <Button onClick={updateData}>Редактировать товар</Button>
          </Form>
        </Part2>
      </Container>
    </Wrapper>          
  );
}

export default UpdateProduct;