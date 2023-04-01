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
  max-width: 1366px;
  height: 100vh;
  padding-bottom: 60px;
`;
export const Part1 = styled.div`
  /* /* display: flex;
  flex-direction: row; */
  /* width: 100vw;  */
  margin-top: 45px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  color: #3F4E65;
  ${tablet({display:"none"})}
`;
export const NavigateButtonLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 15px;
  ${xxl({display: "none"})};
  ${tablet({display:"flex"})};
`;
export const Part2 = styled.div`
  margin-top: 65px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  ${lg({flexDirection:"column", marginTop:"25px"})}
`;
export const Image1 = styled.img`
  width: 34px;
  height: 23px;
`;
export const Image2 = styled.img`
  width: 27px;
  /* height: 27px; */
  flex-grow: 0;
`;
export const Text1 = styled.div`
  margin-left: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3F4E65;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Text2 = styled.div`
  width: 200px;
  margin-left: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3F4E65;
`;
export const Input = styled.input`
  width: 200px;
  background: #EDEDED;
  margin-left: 15px;
`;
export const Button = styled.button`
  margin-top: 50px;
`;