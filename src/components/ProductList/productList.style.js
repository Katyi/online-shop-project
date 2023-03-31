import styled from 'styled-components';
import {xs, mobile, tablet, xl, xxl} from "../../responsive";

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
  background: #FFFFFF;
`;
export const Container = styled.div`
  max-width: 1366px;
`;
export const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  ${tablet({display:"none"})}
`;
export const Text1 = styled.div`
  height: 17px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
`;
export const Image1 = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  height: 16px;
`;

export const Part2 = styled.div`
  display: flex;
  /* width: 100vw; */
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  ${xl({flexWrap: "wrap"})};
  ${tablet({flexWrap: "nowrap", flexDirection: "column", marginTop:"20px"})};
`;
export const NavigateButtonLine = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  ${xxl({display: "none"})};
  ${tablet({display:"flex"})};
`;
export const Image5 = styled.img`
  width: 32px;
  height: 32px;
`;
export const Image6 = styled.img`
  margin-left: -18px;
`;
export const Text10 = styled.div`
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
  /* width: 495px; */
  /* height: 48px; */
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: #111111;
  ${tablet({fontSize:"20px", marginTop:"25px", marginLeft: "15px"})};
`;
export const Part_tablet1 = styled.div`
  ${xxl({display:"none"})}
  ${tablet({display:"block", marginTop:"19px", marginLeft:"15px"})};
`;

export const PartForHide = styled.div`
  
`;
export const ButtonOpenOrHide = styled.button`
  display: flex;
  margin-left: 43px;
  align-items: center;
  ${xs({marginLeft:"5px"})}
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${xl({marginTop:"25px"})};
  ${tablet({marginLeft:"15px"})}
`;
export const Filter = styled.div`
  /* ${mobile({margin:"0px 20px", display: "flex", flexDirection:"column"})} */
`;
export const FilterText1 = styled.span`
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: #111111;
  margin-right: 5px;
  /* ${mobile({marginRight:"0px"})} */
`;
export const Select1 = styled.select`
  /* padding: 10px; */
  margin-right: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  /* ${mobile({margin:"10px 0px"})} */
`;
export const Option1 = styled.option`
  width: 7px;
  height: 7px;
`;
export const Part3 = styled.div`
  display: flex;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  ${xl({display: "none"})}
`;
export const Filter1 = styled.button`
  width: 100px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: #3F4E65;
  text-align: center;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;
export const Filter2 = styled.button`
  width: 120px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: #3F4E65;
  text-align: center;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;
export const Filter3 = styled.button`
  width: 140px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: #3F4E65;
  text-align: center;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;
export const MainPart = styled.div`
  margin-bottom: 102px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  ${tablet({marginTop: "37px"})}
`;
export const SideBar = styled.div`
  width: 238px;
  margin-top: 20px;
  margin-right: 108px;
  ${xl({marginRight: "50px", marginLeft:"50px"})}
  ${tablet({display: "none"})}
  ${mobile({display: "none"})}
`;
export const ProductListPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  /* flex-direction: row-reverse; */
  /* ${xl({justifyContent: "space-evenly"})} */
`;
export const Text3 = styled.div`
  /* height: 24px;
  width: 215px; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
  cursor: pointer;
  align-items: center;
`;
export const Text3_1 = styled.div`
  height: 17px;
  /* width: 99px; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #3F4E65;
  cursor: pointer;
  /* ${tablet({marginTop:"19px"})} */
`;
export const Text4 = styled.div`
  margin-top: 10px;
  height: 21px;
  /* width: 35px; */
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
  display: flex;
  ${tablet({marginTop:"15px"})}
`;
export const Text5 = styled.div`
  margin-left: 10px;
  height: 21px;
  width: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`;
export const InputLine = styled.div`
  width: 232px;
  height: 23px;
  display: flex;
  margin-top: 16px;
`;
export const Input1 = styled.input`
  width: 100px;
  height: 23px;
  padding: 4px 14px;
  background: linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%);
  border-radius: 1000px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  ::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    color: #3F4E65;
    flex-grow: 0;
    text-align: center;
  }
  /* ${mobile({display: "none"})} */
`;
export const Text6 = styled.div`
  width: 7px;
  height: 18px;
  margin-left: 10px;
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #3F4E65;
`;
export const Text7 = styled.div`
  width: 124px;
  height: 24px;
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
`;
export const InputWithButton = styled.div`
  position: relative;
  width: 238px;
`;
export const Input2 = styled.input`
  margin-top: 15px;
  width: 238px;
  /* width: 70%; */
  height: 59px;
  padding: 13px 10px 13px 20px;
  background: #EDEDED;
  border-radius: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #5C6370;
    opacity: 0.6;
    flex-grow: 0;
  }
  /* ${mobile({display: "none"})} */
`;

export const InputText2 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5C6370;
  opacity: 0.6;
  flex-grow: 0;
`;
export const Image2 = styled.img`
  /* margin-left: 122px; */
  top: 10px;
  right: 10px;
  position: absolute;
  height: 39px;
  width: 39px;
`;
 export const CheckBox = styled.div`
  width: 135px;
  /* height: 98px; */
  margin-top: 10px;
 `;
export const CheckBoxLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
  text-align: center;
`;
export const Label1 = styled.label`
  height: 21px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
`;
export const Input3 = styled.input`
  width: 10px;
  height: 10px;
  border-radius: 1px;
  border: 0.5px solid #3F4E65;
  box-sizing: border-box;
  margin-right: 10px;
`;
export const Text8 = styled.div`
  /* height: 21px; */
  margin-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #3F4E65;
  /* text-align: center; */
`;
export const Image3 = styled.img`
  margin-top: 20px;
  /* width: 238px; */
  /* ${tablet({marginBottom:"19px"})} */
`;
export const ProducerButton = styled.button`
  margin-top: 15px;
  height: 18px;
  width: calc(80px + 5px + 7px);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
`;
export const Image4 = styled.img`
  width: 7px;
  height: 7px;
`;
export const SideBarMenu1 = styled.div`
  margin-top: 20px;
  ${tablet({marginTop:"19px"})}
`;
export const Filter4 = styled.div`
  height: 21px;
  margin-top: 10px;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #3F4E65;
`;
export const PaginationPart = styled.div`
  /* position: relative; */
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${tablet({marginTop:"45px"})}
`;
export const Text9 = styled.p`
  max-width: 910px;
  margin-top: 68px;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #3F4E65;
  ${tablet({paddingLeft:"15px", paddingRight:"15px", marginTop:"35px", marginBottom:"50px"})}
`;