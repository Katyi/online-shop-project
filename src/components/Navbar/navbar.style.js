import {mobile, tablet, xl, xxl} from "../../responsive";
import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
  background: #FFFFFF;
`;
export const Container = styled.div`
  max-width: 1366px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* margin: 0px auto; */
  /* height: 170px; */
  ${tablet({marginTop: "10px"})}
`;
export const Menu = styled.div`
  height: 61px;
  /* width: 71.1458333vw; */
  width: 1366px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${xl({justifyContent: "center", height: "80px", width: "100vw"})}
  ${tablet({display:"none"})}
`;
export const Menu1 = styled.div`
  height: 34px;
  width: calc(275px + 178px + 41px);
  /* width: calc(494px / 1366px * 100%);//494px */
  display: flex;
  align-items: center;
  ${xl({width: "700px"})}
  ${tablet({width: "450px"})}
`;
export const Image1 = styled.img`
  height: 20px;
  width: 20px;
`;
export const Image2 = styled.img`
  height: 39px;
  margin-left: 20px;
  ${tablet({marginLeft: "3px"})}

`;
export const Image3 = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 20px;
  ${tablet({marginLeft: "3px"})}
`;
export const Title = styled.div`
  width: 240px;
  height: 34px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18.2px;
  margin-left: 15px;
  ${tablet({marginLeft: "5px"})}
`;
export const Text = styled.div`
  width: 240px;
  height: 34px;
  font-size: 12px;
  font-weight: 300;
  line-height: 16.6px;
`;
export const Menu2 = styled.div`
  height: 29px;
  width: 512px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${xl({justifyContent: "space-evenly", width: "700px"})}
  ${tablet({width: "450px"})}
  /* ${xl({width: "700px"})} */
`;
export const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
export const Image4 = styled.img`
  height: 29px;
`;
export const Header = styled.div`
  height: calc(96px +12px);
  width: 1366px;
  ${xl({justifyContent: "center", height: "auto", width: "700px"})}
  /* ${tablet({justifyContent: "center", height: "auto", width: "450px"})} */
  ${tablet({height: "61px", width: "100vw",
  display: "flex", alignItem: "center", flexDirection: "row", justifyContent: "space-between"
  })}
`;
export const Image5 = styled.img`
  display: flex;
  justify-content: baseline;
  height: 1px;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${tablet({flexWrap: "nowrap", width: "100vw"})}
  /* ${mobile({flexWrap: "nowrap", width: "100vw"})} */
`;
export const Image6 = styled.img` //logo
  height: 66px;
  width: 156px;
  ${tablet({height: "41px", width: "97px"})}
  /* ${mobile({height: "41px", width: "97px"})} */
`;
export const Link1 = styled.div`
  width: 192px;
  height: 59px;
  padding: 10px 19px;
  border-radius: 79px;
  background-color: #FFC85E;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const Text0 = styled.div`
  /* margin-left: 6px; */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`;
export const Image7 = styled.img`
  height: 15px;
  width: 15px;
  margin-left: 12px;
`;
export const Input = styled.div`
  /* margin-left: 15px; */
  height: 59px;
  width: 263px;
  padding: 13px 10px;
  background-color: #EDEDED;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const InputText = styled.div`
  padding-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
  opacity: 0.6;
  flex-grow: 0;
`;
export const Image8 = styled.img`
  height: 39px;
  width: 49px;
  padding-right: 10px;
`;
export const Info = styled.div`
  /* margin-left: 35px; */
  width: 236px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const PhoneInfo = styled.div`
  width: 152px;
  height: 64px;
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: space-between;
`;
export const Text1 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`;
export const Text2 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
`;
export const Text3 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #3F4E65;
`;
export const Image9 = styled.img`
  height: 92px;
  width: 70px;
`;
export const Image10 = styled.img`
  /* margin-left: 25px; */
  height: 49px;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const Link2 = styled.div`
  width: 200px;
  height: 59px;
  padding: 10px 19px;
  border-radius: 79px;
  background-color: #FFC85E;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const Image11 = styled.img`
  height: 17px;
  width: 17px;
  margin-left: 12px;
`;
export const Image12 = styled.img`
  /* margin-left: 25px; */
  height: 49px;
  ${tablet({display: "none"})}
  /* ${mobile({display: "none"})} */
`;
export const Cart = styled.div`
  /* margin-left: 25px; */
  width: 128px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${tablet({width: "33px", marginRight: "15px"})}
  /* ${mobile({width: "33px", marginRight: "15px"})} */
`;
export const Cart1 = styled.div`
  /* margin-left: 50px; */
  /* width: 128px; */
  /* height: 46px; */
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* justify-content: "space-around"; */
  
`;
export const Image13 = styled.img`
  height: 46px;
  width: 46px;
  ${tablet({height: "25px", width: "25px"})}
`;
export const Image14 = styled.img`
  /* height: 23px;
  width: 23px; */
  /* padding: 1px; */
  margin-left: calc(-46px + 36px);
  margin-top: 1px;
  ${tablet({height: "17px", width: "17px", marginLeft: "-10px", marginTop: "-5px"})}
`;
export const Text4 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  margin-left: 41px;
  margin-top: -40px;
  ${tablet({fontSize: "10px", lineHeight: "12px", marginLeft: "20px", marginTop: "-27px" })}
  /* ${mobile({fontSize: "10px", lineHeight: "12px", marginLeft: "20px", marginTop: "-27px" })} */
`;
export const Cart2 = styled.div`
  /* margin-left: 50px; */
  /* width: 128px; */
  /* height: 46px; */
  ${tablet({display: "none"})}
  ${mobile({display: "none"})}
`;
export const Text5 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
`;
export const Text6 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`;
export const Image15 = styled.img`
  display: none;
  ${tablet({display: "flex", height: "32px", width: "32px", marginLeft: "15px"})}
`;
export const Image16 = styled.img`
  display: flex;
  justify-content: baseline;
  height: 1px;
`;
export const Header2 = styled.div`
  display: none;
  ${tablet({height: "41px", width: "100vw",
    display: "flex", alignItem: "center", flexDirection: "row", justifyContent: "space-between",
  })}
`;
export const Header2Part1 = styled.div`
  display: flex;
  margin: auto;
`;
export const Image17 = styled.img`
  height: 15px;
  width: 15px;
`;
export const Text7 = styled.div`
  margin-left: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
export const Image18 = styled.img`
  height: 30px;
`;
export const Header2Part2 = styled.div`
  display: flex;
  /* flex-direction: row;
  align-items: center;
  justify-content: center; */
  margin: auto;
`;
export const Image19 = styled.img`
  height: 15px;
  width: 15px;
`;
export const Text8 = styled.div`
  margin-left: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
export const Image20 = styled.img`
  display: none;
  ${tablet({display: "flex", justifyContent: "baseline", height: "1px"})}
`;
