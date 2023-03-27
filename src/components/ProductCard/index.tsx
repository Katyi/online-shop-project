// import { Product as IProduct } from '../../pages/Admin';
import Navbar from "../Navbar";
import {Wrapper,Container, } from "./productCard.style.js";
// import inputimg1 from '../../assets/productItem/vector5.png';
// import inputimg2 from '../../assets/productItem/vector6.png';
// import inputimg3 from '../../assets/productItem/vector7.png';

interface Props { 
  // product: IProduct;
}

const ProductCard = (props: Props) => {
  // const { product } = props;
  return (
    <Wrapper>
      {/* <Navbar/> */}
      <Container>

        Вы тут!
      </Container>
    </Wrapper>          
  );
}

export default ProductCard;