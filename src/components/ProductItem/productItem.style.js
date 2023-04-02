import styled from 'styled-components';
import {mobile, tablet, xl} from "../../responsive";

export const Container = styled.div`
  width: 326px;
  height: 490px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  margin-bottom: 21px;
  padding-bottom: 29px;
  box-shadow: 0px 14px 39px -11px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  ${xl({width: "400px"})};
  ${tablet({width: "96vw", marginBottom:"10px"})};
`;
// Фото товара
export const Part0 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 194px;
  margin-top: 42px;
`;
export const Image1 = styled.img`
  /* margin-top: 42px; */
  height: 149px;
`;
// вес и объем товара
export const Part1 = styled.div`
  /* position: absolute; */
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 25px;
`;
export const Image2 = styled.img`
  width: 9px;
  height: 15px;
`;
export const Image3 = styled.img`
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
export const BottomPart = styled.div`
  display: flex;
  height: calc(490px - 194px - 42px - 4px);
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
`;
// Название товара
export const Part1_1 = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: 25px;
  /* margin-bottom: 15px; */
`;
export const Text1 = styled.p`
  /* margin-left: 5px; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #111111;
`;
// Штрихкод, производитель, бренд
export const Part1_2 = styled.div`
  
`;
export const Part2 = styled.div`
  margin-top: 5px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Text2 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #3F4E65;
`;
export const Barcode = styled.div`
  margin-left: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #111111;
`;
// Цена и корзина
export const PriceLine = styled.div`
  /* margin-top: 15px; */
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  color: #111111;
`;
export const Button = styled.button`
  width: 153px;
  height: 45px;
  margin-left: 40px;
  background: #FFC85E;
  border-radius: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 19px;
  gap: 5px;
`;
export const Text3 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
  flex-grow: 0;
`;
export const Image4 = styled.img`
  width: 27px;
  /* height: 27px; */
  flex-grow: 0;
`;