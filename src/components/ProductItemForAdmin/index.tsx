import { Product as IProduct } from '../ProductList';
import {Container, Part0, Image1, Image2, Image3, Part1_1, Text1, Part1, Size, Part1_2, Part2, Text2, Barcode, 
  PriceLine, Price, Button, Text3, Image4, BottomPart} from "./productItemForAdmin.style";
import inputimg1 from '../../assets/productItem/vector5.png';
import inputimg2 from '../../assets/productItem/vector6.png';
import inputimg3 from '../../assets/productItemForAdmin/buttonDelete1.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Props { 
  product: IProduct;
  deleteProduct: (product:IProduct)=>void;
}

const ProductItemForAdmin = (props: Props) => {
  const product  = props.product;
  return (
    <Container>
      {/* Фото товара */}
      <Part0>
        <Image1 src={product.url}/>
      </Part0>
      {/* вес и объем товара */}
      <Part1>
        {product.sizeType === 'мл' ? <Image2 src={inputimg1}/> : <Image3 src={inputimg2}/>}
        {product.amount === 1 ? <Size>{product.size} {product.sizeType}</Size>: <Size>{product.amount}X{product.size} {product.sizeType}</Size>}
        
      </Part1>
      <BottomPart>
      {/* Название товара */}
      <Part1_1>
        <Link to={`/productCard/${product.id}`}><Text1><span style={{fontWeight: 700}}>{product.name.split(' ')[0].concat(' ')}</span>
         {(product.name.split(' ').filter((item, index)=> index>0).join(' '))}
         </Text1>
        </Link>
      </Part1_1>
      {/* Штрихкод, производитель, бренд */}
      <Part1_2>
      <Part2>
        <Text2>Штрихкод: </Text2>
        <Barcode>{product.barcode}</Barcode>
      </Part2>
      <Part2>
        <Text2>Производитель: </Text2>
        <Barcode>{product.producer}</Barcode>
      </Part2>
      <Part2>
        <Text2>Бренд: </Text2>
        <Barcode>{product.brand}</Barcode>
      </Part2>
      </Part1_2>
      {/* Цена и корзина */}
      <PriceLine>
        <Price>{product.price} ₸</Price>
        <Button onClick={()=>{props.deleteProduct(product)}}>
          <Text3>УДАЛИТЬ</Text3>
          <Image4 src={inputimg3}/>
        </Button>
      </PriceLine>
      </BottomPart>
    </Container>          
  );
}

export default ProductItemForAdmin;