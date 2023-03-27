import styled from 'styled-components';
import {mobile, tablet, xl} from "../../responsive";

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0px auto;
  background: #3F4E65;
`;
export const Container = styled.div`
  max-width: 1366px;
  /* height: 500px; */
  margin-top: 71px;
  margin-bottom: 116px;
	display: flex;
  flex-direction: row;
	/* align-items: center; */
	justify-content: space-between;
	/* margin: 0px auto; */
  /* height: 170px; */
  /* background-color: lightblue; */
  
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  
  ${mobile({
    height:"93px",
    marginTop: "10px"
    })}
`;
export const Column = styled.div`
  /* width: 20vw; */
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  /* align-items: center; */
`;
export const Image1 = styled.img` //logo
  height: 66px;
  width: 156px;
  /* ${mobile({height: "41px", width: "97px"})} */
`;
export const Text1 = styled.div`
  margin-top: 15px;
  width: 320px;
  height: 96px;
  /* text-align: start; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
`;
export const Text2 = styled.div`
  width: 179px;
  height: 18px;
  margin-top: 45px;
  /* text-align: start; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
`;
export const Input = styled.div`
  margin-top: 14px;
  height: 59px;
  width: 282px;
  padding: 13px 10px 13px 20px;
  background: #FFFFFF;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* ${mobile({display: "none"})} */
`;
export const InputText = styled.div`
  width: 115px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
  opacity: 0.6;
  flex-grow: 0;
`;
export const Image2 = styled.img`
  height: 39px;
  width: 39px;
`;
export const Text3 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 5px;
`;
export const Text4 = styled.div`
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
`;
export const Link1 = styled.div`
  margin-top: 20px;
  width: 214px;
  height: 59px;
  padding: 10px 19px;
  border-radius: 79px;
  background-color: #FFC85E;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({display: "none"})}
`;
export const Text5 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`;
export const Image3 = styled.img`
  height: 17px;
  width: 17px;
  margin-left: 14.83px;
`;
export const Logos = styled.div`
  margin-top: 15px;
`;
export const Image4 = styled.img`
  height: 39px;
  width: 39px;
`;
export const Image5 = styled.img`
  height: 39px;
  width: 39px;
  margin-left: 10px;
`;
export const Text6 = styled.div`
  margin-top: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
`;
export const Text7 = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
`;
export const Text8 = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #FFFFFF;
  text-decoration-line: underline;
`;
export const Text9 = styled.div`
  margin-top: 25px;
  width: 143px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18.2px;
  color: #FFFFFF;
`;
export const Text10 = styled.div`
  width: 143px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15.6px;
  color: #FFFFFF;
`;
export const Visas = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: left;
`;
export const Image6 = styled.img`
  height: 39px;
  width: 61px;
`;
export const Image7 = styled.img`
  height: 39px;
  width: 61px;
  margin-left: 5px;
`;