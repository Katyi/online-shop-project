import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
	display: flex;
	flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* margin: 0px auto; */
`;
export const Container = styled.div`
  max-width: 1370px;
  /* height: 3136px; */
  background-color: lightblue;
`;

export const Part1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin-top: 45px;
`;
export const Text1 = styled.div`
  height: 17px;
  width: 56px;
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
export const Text2 = styled.div`
  height: 48px;
  width: 195px;
  margin-top: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: #111111;
  text-transform: uppercase;
`;
export const Part2 = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: flex-start; */
  /* flex-direction: row; */
  /* width: 100vw; */
  margin-top: 45px;
`;
export const Image2 = styled.img`
  /* width: 100vw; */
`;
export const CartItem = styled.div`
  margin-top: 50px;
  /* height: 191px; */
  background: lightcoral;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CartItemImg = styled.div`
  height: 191px;
  width: 281px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image3 = styled.img`
  /* height: 191px;
  width: 281px; */
`;
export const CartItemInfo = styled.div`
  margin-left: 20px;
  height: 161px;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: red;
`;
export const Text3 = styled.div`
  height: 72px;
  width: 480px;
  /* margin-top: 50px; */
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #111111;
  /* text-transform: uppercase; */
`;
export const Text4 = styled.div`
  height: 54px;
  width: 444px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #3F4E65;
`;