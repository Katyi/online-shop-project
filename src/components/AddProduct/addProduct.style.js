import styled from 'styled-components';
import {xs, mobile, tablet, lg, xxl} from "../../responsive";

export const Wrapper = styled.div`
  overflow: hidden;
	background: #FFFFFF;
`;
export const Container = styled.div`
  max-width: 1366px;
  margin: 45px auto;
`;
export const Part1 = styled.div`
  width: 100vw;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
`;
export const Part2 = styled.div`
  margin-top: 65px;
  display: flex;
  justify-content: center;
  ${lg({flexDirection:"column", marginTop:"25px"})}
`;
export const Form = styled.form`
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({paddingLeft: "20px", paddingRight:"5px"})}
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  
  ${tablet({flexDirection:"column", marginTop: "30px"})}
`;
export const Text1 = styled.div`
  width: 180px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3F4E65;
  text-align: end;
  ${tablet({textAlign: "start"})}
  ${mobile({width: "100vw", marginLeft:"0px", paddingLeft:"15px"})}
`;
export const Input = styled.input`
  width: 300px;
  height: 20px;
  background: #EDEDED;
  margin-left: 25px;
  border-radius: 20px;
  color: #111111;
  padding-left: 10px;
  padding-right: 10px;
  ${tablet({marginTop: "5px"})}
  ${mobile({width: "95vw", marginLeft:"0px"})}
`;
export const SelecDiv =styled.div`
  margin-left: 25px;
  width: 300px;
  ${tablet({marginTop: "5px", marginLeft:"0px"})}
  ${mobile({width:"95vw"})}
`;
export const Button = styled.button`
  margin-top: 50px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background: #EDEDED;
  font-weight: 700;
  font-style: 14px;
`;