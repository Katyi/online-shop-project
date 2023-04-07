import { render } from "@testing-library/react";
import Navbar from "../components/Navbar/index";

// interface Props { 
//   selectedProductQuantity: number;
//   totalPrice: number;
// }


describe(Navbar, ()=>{
  it('Navbar displays correct total price', ()=>{
    const {getByTestId} = render(<Navbar selectedProductQuantity={2} totalPrice={40}/>);
    const countValue = Number(getByTestId("totalPrice").textContent);
    expect(countValue).toEqual(40);
  });
});