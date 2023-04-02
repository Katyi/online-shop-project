import styled from "styled-components";
import {mobile, lg, tablet, xl} from "../responsive";

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 1366px;
  padding-bottom: 60px;
`;
export const Part1 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;
export const Text1 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: #111111;
  ${tablet({fontSize:"20px", marginTop:"25px", marginLeft: "15px"})};
`;
export const CreateButton = styled.button`
  width: 250px;
  height: 45px;
  margin-top: 20px;
  margin-left: 40px;
  background: #FFC85E;
  border-radius: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 19px;
  gap: 5px;
  ${tablet({width: "180px"})}
`;
export const Text2 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #FFFFFF;
  flex-grow: 0;
  ${tablet({fontSize: "10px"})}
`;
export const MainPart = styled.div`
  margin-top: 50px;
`;
export const ProductListPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  justify-content: space-between;
  margin-left: 15px;
  ${lg({justifyContent: "space-around"})};
`;