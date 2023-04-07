import { render } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart";


// interface Props { 
//   selectedProductQuantity: number;
//   totalPrice: number;
// }


describe(ShoppingCart, ()=>{
  it('ShoppingCart displays correct total price', ()=>{
    const {getByTestId} = render(<ShoppingCart/>);
    
    const quantity = Number(getAllByTestId("quantity").textContent);
    const price = Number(getAllByTestId("price").textContent);
    const total = Number(getByTestId("totalPrice").textContent);
    expect(total).toEqual(price*quantity);
  });
});