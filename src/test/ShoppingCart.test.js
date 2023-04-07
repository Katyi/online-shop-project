import { getAllByTestId, render } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart";
import { HashRouter } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "AOS средство для мытья посуды Crystal",
    url: "./assets/productItem/product1.png",
    amount: 1,
    size: 450,
    sizeType: "мл",
    barcode: "4604049097548",
    producer: "Нэфис",
    brand: "AOS",
    description: "AOS средство для мытья посуды Crystal",
    price: 48.76,
    caretype: ["Бытовая химия"],
    quantity: 2
  },
  {
    id: 2,
    name: "ARIEL Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
    url: "./assets/productItem/product2.png",
    amount: 15,
    size: 28.8,
    sizeType: "г",
    barcode: "4604049097548",
    producer: "Нэфис",
    brand: "AOS",
    description: "Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
    price: 20.00,
    caretype: ["Бытовая химия"],
    quantity: 3
  }
];

describe(ShoppingCart, ()=>{
  it('ShoppingCart displays correct total price', ()=>{
    const {getByTestId, getAllByTestId} = render(
        <HashRouter>
          <ShoppingCart products={products}/>
        </HashRouter>
    );
    const quantity = Number(getAllByTestId("quantity")[0].textContent);
    const price = Number(getAllByTestId("price")[0].textContent);
    const total = Number(getByTestId("totalPrice").textContent);
    expect(total).toEqual(price * quantity);
  });
});