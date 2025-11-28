import "./app.css";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import ProductList from "./Components/ProductList/ProductList";
import React, { useState } from "react";

let products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/milk-glass.png",
    price: 12,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cheese.png",
    price: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/broccoli.png",
    price: 15,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
];

function App() {
  let [newProductList, updateProductList] = useState(products);
  let [filterTextValue, updateFilterText] = useState("all");

  let FilterProductList = newProductList.filter((product) => {
    if (filterTextValue === "available") {
      return product.isAvailable;
    } else if (filterTextValue === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });

  function createProduct(product) {
    product.pID = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct} />
        <FilterProduct onFilterValueSelected={onFilterValueSelected} />
        <ProductList newProductList={FilterProductList} />
      </div>
    </div>
  );
}

export default App;
