import { render } from "@testing-library/react";
import Navbar from "../components/Navbar/index";
import { HashRouter } from "react-router-dom";


describe(Navbar, ()=>{
  it('Navbar displays correct total price and quantity', ()=>{
    const {getByTestId} = render(
      <HashRouter>
        <Navbar selectedProductQuantity={2} totalPrice={40}/>
      </HashRouter>
    );
    const totalPrice = Number(getByTestId("totalPrice").textContent);
    const totalQuantity= Number(getByTestId("totalQuantity").textContent);
    expect(totalPrice).toEqual(40);
    expect(totalQuantity).toEqual(2);
  });
});


