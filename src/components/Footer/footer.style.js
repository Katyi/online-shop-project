import styled from 'styled-components';
import {mobile, tablet, lg, xl, xxl} from "../../responsive";

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
  display: flex;
  margin-top: 71px;
  margin-bottom: 116px;
  flex-direction: row;
	justify-content: space-between;
	box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  ${lg({marginBottom: "50px", flexWrap:"wrap", justifyContent:"center"})}
  ${tablet({marginTop: "16px", marginBottom: "15px"})}
  `;
export const Column1 = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  ${lg({width: "50vw", height: "auto", paddingLeft: "45px"})}
  ${tablet({width: "100vw", alignItems: "center", height: "auto", paddingLeft:"15px", paddingRight: "15px"})}
`;
export const Column2 = styled.div`
  width: 19vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  justify-content: flex-start;
  ${lg({width: "50vw", height: "auto", paddingLeft: "45px"})}
  ${tablet({width: "50%", marginTop: "30px", paddingLeft: "15px", paddingRight: "15px"})}
`;
export const Column3 = styled.div`
  width: 19vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  ${lg({width: "50%", paddingLeft: "45px", marginTop: "30px"})}
  ${tablet({width: "50%", marginTop: "30px"})}
`;
export const Column4 = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  ${lg({width: "50%", paddingLeft: "45px", marginTop: "30px"})}
  ${tablet({display: "none"})}
`;
export const Column5 = styled.div`
  width: 11vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  ${lg({width: "100%", paddingLeft: "45px", marginTop: "30px"})}
  ${tablet({width: "50vw", marginTop: "25px", paddingLeft: "15px"})}
`;
export const Column6 = styled.div`
  width: 11vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  ${xxl({display:"none"})}
  ${tablet({display: "block" , width: "50vw", marginTop: "55px"})}
`;
export const Image1 = styled.img` //logo
  height: 66px;
  width: 156px;
  ${tablet({height: "41px", width: "97px"})}
`;
export const Text1 = styled.div`
  margin-top: 15px;
  width: 320px;
  /* height: 96px; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  ${tablet({width: "auto", 
  // marginLeft: "15px", marginRight:"15px"
  })}

`;
export const Text2 = styled.div`
  width: 179px;
  /* height: 18px; */
  margin-top: 45px;
  /* text-align: start; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  ${tablet({marginTop: "15px"})}
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
`;
export const Row1 = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;

`;
export const Link2 = styled.div`
  margin-top: 20px;
  width: 149px;
  height: 40px;
  padding: 10px 19px;
  border-radius: 79px;
  background-color: #FFC85E;
  display: flex;
  align-items: center;
  justify-content: center;
  ${xxl({display:"none"})}
  ${tablet({display: "flex"})}
`;
export const Text5 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  ${tablet({fontSize: "12px", lineHeight: "15px"})}
`;
export const Image3 = styled.img`
  height: 17px;
  width: 17px;
  margin-left: 14.83px;
`;
export const Logos = styled.div`
  margin-top: 15px;
  ${tablet({marginTop:"17px"})}
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
  ${tablet({marginTop:"10px"})}
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