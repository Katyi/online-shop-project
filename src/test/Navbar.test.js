import { render } from "@testing-library/react";
import Navbar from "../components/Navbar/index";
import { HashRouter } from "react-router-dom";


describe(Navbar, ()=>{
  it('Navbar displays correct total price', ()=>{
    const {getByTestId} = render(
      <HashRouter>
        <Navbar selectedProductQuantity={2} totalPrice={40}/>
      </HashRouter>
    );
    const countValue = Number(getByTestId("totalPrice").textContent);
    expect(countValue).toEqual(40);
  });
});