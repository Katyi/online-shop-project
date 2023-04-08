import { fireEvent, render } from "@testing-library/react";
import AddProduct from "../components/AddProduct";
import { HashRouter } from "react-router-dom";


describe(AddProduct, () => {
  it('clicking on the Add button takes you to the admin screen', ()=>{
    const {getByRole} = render(
      <HashRouter>
        <AddProduct/>
      </HashRouter>
    );
    const oldScreen = window.location.hash.split('/')[2];
    const AddNewBttn = getByRole("button", { name: "Добавить товар" });
    expect(oldScreen === 'createProduct');
    fireEvent.click(AddNewBttn);
    const newScreen = window.location.hash.split('/')[2];
    expect(newScreen === 'admin');
    });    
});

describe(AddProduct, () => {
  it ('clicking on the Back link takes you to the admin screen', ()=>{
    const {getByText} = render(
      <HashRouter>
        <AddProduct/>
      </HashRouter>
    );
    const oldScreen = window.location.hash.split('/')[2];
    const link = getByText("Назад");
    expect(oldScreen === 'createProduct');
    fireEvent.click(link);
    const newScreen = window.location.hash.split('/')[2];
    expect(newScreen === 'admin');
  });
});



