import styled from 'styled-components';
import {mobile, tablet, xl, lg, xxl} from "../../responsive";

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
  background: #FFFFFF;
`;
export const Container = styled.div`
  max-width: 1366px;
  ${lg({width:"100vw"})}
  ${tablet({width:"100vw"})}
`;
export const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: 45px auto;
  ${tablet({display:"none"})}
`;
export const Text1 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  display: flex;
`;
export const Image1 = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  height: 16px;
`;
export const NavigateButtonLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 15px;
  ${xxl({display: "none"})};
  ${tablet({display:"flex"})};
`;
export const Image10 = styled.img`
  width: 32px;
  height: 32px;
`;
export const Image11 = styled.img`
  margin-left: -18px;
`;
export const Text6 = styled.div`
  margin-left: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3F4E65;
`;
export const Text2 = styled.div`
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: #111111;
  text-transform: uppercase;
  ${tablet({fontSize:"20px", marginTop:"25px", marginLeft:"15px", marginBottom:"20px"})}
`;
export const Part2 = styled.div`
  height: auto;
`;
export const Image2 = styled.img`
`;
export const CartItem = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${lg({flexDirection:"column", paddingTop:"30px", paddingBottom:"30px"})}
  ${tablet({flexDirection:"column", paddingTop:"20px", paddingBottom:"20px"})}
`;
export const CartItemImg = styled.div`
  height: 191px;
  width: 281px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${lg({height:"197px", width:"auto"})}
  ${tablet({height:"197px", width:"auto"})}

`;
export const Image3 = styled.img`
`;
export const CartItemInfo = styled.div`
  padding-left: 20px;
  margin-right: 85px;
  width: 480px;
  display: flex;
  flex-direction: column;
  ${lg({width: "100vw", paddingLeft:"15px", marginRight: "0px", paddingRight:"15px", paddingTop:"20px", paddingBottom:"20px"})}
  ${tablet({width: "100vw", paddingLeft:"15px", marginRight: "0px", paddingRight:"15px", paddingTop:"10px", paddingBottom:"15px"})}
`;
export const CartItemInfoPart1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Image4 = styled.img`
  width: 9px;
  height: 15px;
`;
export const Image5 = styled.img`
  width: 20px;
  height: 14px;
`;
export const Size = styled.div`
  margin-left: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #3F4E65;
  height: 16px;
`;
export const Text3 = styled.div`
  width: 480px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #111111;
  ${lg({width: "100vw"})}
  ${tablet({width: "100vw"})}
`;
export const Text4 = styled.div`
  width: 444px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  ${lg({width: "100vw"})}
  ${tablet({width: "100vw"})}
`;
export const Image6 = styled.img`
  height: 49px;
  ${lg({display: "none"})}
  ${tablet({display: "none"})}
`;
export const Image6_1 = styled.img`
  height: 49px;
`;
export const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${lg({width:"100vw", justifContent: "space-between", paddingLeft:"15px", paddingRight:"15px"})}
  ${tablet({width:"100vw", justifContent: "space-between", paddingLeft:"15px", paddingRight:"15px"})}
`;
export const ButtonPart = styled.div`
  margin-left: 44px;
  margin-right: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${lg({marginLeft: "0px", marginRight:"0px"})}
  ${tablet({marginLeft: "0px", marginRight:"0px"})}
`;
export const Button = styled.button`
`;
export const Image7 = styled.img`
  width: 34px;
  height: 23px;
`;
export const Quantity = styled.div`
  height: 18px;
  width: 45px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #3F4E65;
  text-align: center;
`;
export const Price = styled.div`
  margin-left: 44px;
  margin-right: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: #111111;
  ${tablet({marginLeft: "0px", marginRight:"0px", fontSize:"16px"})}
`;
export const ButtonDelete = styled.button`
  margin-left: 44px;
  background: transparent;
  ${tablet({marginLeft: "0px"})}
`;
export const Image8 = styled.img`
  width: 59px;
  height: 59px;
`;
export const Part3 = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${lg({paddingTop:"25px", paddingBottom:"50px", justifContent:"center", width:"100vw"})}
  ${tablet({paddingTop:"25px", paddingBottom:"50px", flexDirection:"column-reverse"})}
`;
export const ButtonOrder = styled.button`
  width: 192px;
  height: 59px;
  background: #FFC85E;
  border-radius: 79px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 19px;
  gap: 12px;
  font-style: normal;
  font-weight: 700;
  font-style: 14px;
  line-height: 17px;
  color: #FFFFFF;
  ${tablet({marginTop:"25px", width:"290px", height:"80px"})}
`;
export const TotalPrice = styled.div`
  height: 39px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: #111111;
`;
export const AfterOrderPart = styled.div`
  width: 100vw;
`;
export const Text5 = styled.div`
  height: 48px;
  margin-top: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: #111111;
  text-align: center;
`;
