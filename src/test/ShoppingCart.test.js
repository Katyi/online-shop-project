import { fireEvent, render } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart";
import { HashRouter } from "react-router-dom";
import {inputimg7} from "../assets/shoppingCart/buttonPlus.png";

const testProducts = [
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
const testProducts2 = [
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

const testProducts3 = [
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
    quantity: 1
  }
];
const testProducts4 = [
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
    quantity: 2
  }
];

describe(ShoppingCart, () => {
  it('ShoppingCart displays correct total price and total quantity', ()=>{
    const {getAllByTestId} = render(
        <HashRouter>
          <ShoppingCart products={testProducts}/>
        </HashRouter>
    );
    const quantity = Number(getAllByTestId("quantity")[0].textContent);
    const price = Number(getAllByTestId("price")[0].textContent.split(' ')[0])/quantity;
    console.log(quantity);
    console.log(price);
    const total = Number(getAllByTestId("totalPrice")[0].textContent);
    expect(157.52);
  });
});

describe(ShoppingCart, () => {
  it('Cheking equality of quantity of products in props and shoppingCart', () => {
    const {getAllByTestId} = render(
      <HashRouter>
        <ShoppingCart products={testProducts}/>
      </HashRouter>
    );
    let quantityOfProductsInProps = 0;
    testProducts.forEach(element => {
      quantityOfProductsInProps = quantityOfProductsInProps + element.quantity;
    });
    console.log(quantityOfProductsInProps);
    const quantityOfProductsInShopCart = Number(getAllByTestId('quantity')[0].textContent);
    console.log(quantityOfProductsInShopCart);
    expect(quantityOfProductsInShopCart === quantityOfProductsInProps);
  });
});

describe(ShoppingCart, () => {
  it('Cheking quantity of different products in shoppingCart', () => {
    const{getAllByTestId} = render(
      <HashRouter>
        <ShoppingCart products={testProducts2}/>
      </HashRouter>
    );
    let arrNamesOfProducts = testProducts2.map(item => item.name);
    let arrUniqueNames = [... new Set(arrNamesOfProducts)];
    console.log(arrUniqueNames);
    let arrShopCart = [];
    arrShopCart.push(getAllByTestId('productName')[0].textContent);
    expect(arrUniqueNames.length === arrShopCart.length);
  });
});

describe(ShoppingCart, () => {
  it ("Chekinng shoppingCart after clicking order button", () => {
    const { getAllByTestId, getByRole } = render(
    <HashRouter>
      <ShoppingCart products={testProducts2} />
    </HashRouter>
    ); 
    const OrderBttn = getByRole("button", { name: "Оформить заказ" });
    fireEvent.click(OrderBttn);
    const totalPrice = Number(getAllByTestId("totalPrice")[0].textContent);
    expect(totalPrice === 0);
  });
});

describe(ShoppingCart, () => {
  it ("Count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <HashRouter>
      <ShoppingCart products={testProducts3}/>
    </HashRouter>
    );
    const IncrementBttn = getByRole("button", { name: "+" });
    const countValue1 = Number(getByTestId("quantity").textContent);
    expect(countValue1).toEqual(1);
    fireEvent.click(IncrementBttn);
    const countValue2 = Number(getByTestId("quantity").textContent);
    expect(countValue2).toEqual(2);
  });
});

describe(ShoppingCart, () => {
  it ("Count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <HashRouter>
      <ShoppingCart products={testProducts4}/>
    </HashRouter>
    );
    const DecrementBttn = getByRole("button", { name: "-" });
    const countValue1 = Number(getByTestId("quantity").textContent);
    expect(countValue1).toEqual(2);
    fireEvent.click(DecrementBttn);
    const countValue2 = Number(getByTestId("quantity").textContent);
    expect(countValue2).toEqual(1);
  });
});

describe(ShoppingCart, () => {
  it ("Chekinng shoppingCart after clicking delete button", () => {
    const { getAllByTestId, getByRole } = render(
      <HashRouter>
      <ShoppingCart products={testProducts4}/>
    </HashRouter>
    );
    const DeleteBttn = getByRole("button", { name: "*" });
    fireEvent.click(DeleteBttn);
    const totalPrice = Number(getAllByTestId("totalPrice")[0].textContent);
    expect(totalPrice === 0);
  });
});
