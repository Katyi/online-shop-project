import styled from 'styled-components';
import {xs, mobile, tablet, lg, xxl} from "../../responsive";

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
  background: #FFFFFF;
`;
export const Container = styled.div`
  max-width: 1370px;
  height: auto;
  padding-bottom: 60px;
`;
export const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin-top: 45px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  ${tablet({display:"none"})}
`;
export const Image1 = styled.img`
  height: 16px;
  margin-left: 10px;
  margin-right: 10px;
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
export const Text7 = styled.div`
  margin-left: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3F4E65;
`;
export const Part2 = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${lg({flexDirection:"column", marginTop:"25px"})}
`;
export const ImagePart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  ${lg({width:"100vw"})}
`;
export const Image2 = styled.img`
  height: 50%;
  ${lg({})}
  ${tablet({height:"50vw"})}
`;
export const InfoPart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 40px;
  ${lg({width: "70vw", margin: "auto"})}
  ${tablet({width: "100vw", marginLeft:"0px", paddingLeft:"15px", paddingRight:"15px"})}
`;
export const Text1 = styled.div`
  margin-top: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #1FD85D;
  ${tablet({marginTop:"15px"})}
`;
export const ProductName = styled.p`
  width: 628px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  color: #111111;
  word-break: break-word;
  padding-right: 20px ;
  ${tablet({width:"100vw", fontSize: "16px", fontWeight:"400"})}
`;
export const ProductSize = styled.div`
  margin-top: 11px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${tablet({display:"none"})}
  ${mobile({display:"none"})}
`;
export const Image3 = styled.img`
  width: 9px;
  height: 15px;
`;
export const Image4 = styled.img`
  width: 20px;
  height: 14px;
`;
export const Size = styled.div`
  margin-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #3F4E65;
  height: 16px;
`;
export const PriceButtonPart = styled.div`
  margin-top: 15px;
  height: 59px;
  display: flex;
  align-items: center;
  ${tablet({marginTop:"20px"})}
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 130%;
  color: #111111;
  ${tablet({fontSize:"20px"})}
`;
export const ButtonPart = styled.div`
  margin-left: 40px;
  margin-right: 38px;
  /* width: 113px; */
  /* height: 23px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({marginLeft:"27px"})}
`;
export const Button1 = styled.button`

`;
export const Image5 = styled.img`
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
export const Button2 = styled.button`
  width: 184px;
  height: 59px;
  background: #FFC85E;
  border-radius: 79px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 19px;
  gap: 12px;
  ${tablet({display:"none"})}
`;
export const Text2 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  color: #FFFFFF;
  flex-grow: 0;
`;
export const Image6 = styled.img`
  width: 27px;
  /* height: 27px; */
  flex-grow: 0;
`;
export const SomeTextPart = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  ${tablet({flexDirection:"column"})}
`;
export const Row1 = styled.div`
  ${tablet({display:"flex", width:"100vw", alignItems:"center", justifyContent: "space-between",
    paddingLeft:"15px", paddingRight:"15px"})}
`;
export const Button5 = styled.button`
  width: 184px;
  height: 59px;
  background: #FFC85E;
  border-radius: 79px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 19px;
  gap: 12px;
  ${xxl({display:"none"})}
  ${tablet({display:"flex"})}
`;
export const ShareIcon = styled.div`
  width: 77px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({width:"59px", height:"59px"})}
`;

export const Image7 = styled.img`
  width: 19.05px;
  height: 20.04px;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  border-radius: 10px;
`;
export const Text3 = styled.div`
  width: 316px;
  margin-left: 10px;
  padding-left: 35.5px;
  padding-right: 35.5px;
  padding-top: 22.5px;
  padding-bottom: 22.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  flex-grow: 0;
  text-align: center;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  border-radius: 10px;
  ${tablet({width:"100vw", marginTop:"20px", paddingLeft:"22.5px", paddingRight:"22.5px", marginLeft:"0px"})}
`;
export const Text4 = styled.div`
  width: 186px;
  margin-left: 10px;
  padding-left: 37.5px;
  padding-right: 37.5px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #3F4E65;
  flex-grow: 0;
  text-align: center;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  border-radius: 10px;
  ${tablet({width:"100vw", marginTop:"10px", paddingLeft:"22.5px", paddingRight:"22.5px", marginLeft:"0px"})}
`;
export const ProductInfo = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  ${tablet({marginTop:"20px"})}
`;
export const Text5 = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
`;
export const Button3 = styled.button`
  height: 24px;
  width: calc(78px + 5px + 7px);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
`;
export const Image8 = styled.img`
  width: 7px;
  height: 7px;
`;
export const Text6 = styled.div`
  margin-top: 15px;
  width: 611px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  word-break: break-word;
  ${tablet({width:"100vw"})}
`;
export const Image9 = styled.img`
  width: 269.5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Button4 = styled.button`
  height: 24px;
  width: calc(131px + 5px + 7px);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
`;
export const SpecificationInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;