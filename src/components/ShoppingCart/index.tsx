import Navbar from "../Navbar";
import inputimg1 from '../../assets/shoppingCart/vector10.png';
import inputimg2 from '../../assets/shoppingCart/vector11.png';
import {Wrapper,Container, Part1, Text1, Image1, Text2, Part2, Image2, CartItem, Image3, CartItemImg, CartItemInfo, Text3, Text4} from "./shoppingCart.style.js";
import { Product as IProduct } from '../../pages/Admin';
import { Link } from 'react-router-dom';


// interface Props {
//   selectedProductQuantity: number;
// }

const ShoppingCart = () => {
  let int  = localStorage.getItem("selectedProductsList") as string;
  let shoppingData:IProduct[] = JSON.parse(int);
  console.log(shoppingData);
  let shoppingDataLength:number = shoppingData.length;
  return (
    <Wrapper>
      <Navbar selectedProductQuantity={shoppingDataLength}/>
      <Container>
      <Part1>
        <Link to="/"><Text1>Главная</Text1></Link>
        <Image1  src={inputimg1}/>
        <Text1>Корзина</Text1>
      </Part1>
      <Text2>Корзина</Text2>
      
        {shoppingData.map((item, index)=>(
          <Part2 key={index}>
          <Image2 src={inputimg2}/>
          <CartItem>
            <CartItemImg>
              <Image3  src={item.url}/>
              </CartItemImg>
              <CartItemInfo>
                <Text3>{item.name}</Text3>
                <Text4>{item.description}</Text4>
              </CartItemInfo>
              
            
        </CartItem>
        </Part2>
        
        ))}
        <Image2 src={inputimg2} style={{marginBottom:"50px", marginTop:"50px"}}/>
        
      
      {/* <Part3></Part3> */}
      </Container>
    </Wrapper>          
  );
}

export default ShoppingCart;

