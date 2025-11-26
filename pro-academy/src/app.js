import "./app.css";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import ProductList from "./Components/ProductList/ProductList";
import React, { useState } from "react";

function App() {
  let [newProduct, updateProduct] = useState(null);

  function createProduct(product) {
    updateProduct(product);
  }

  return (
    <div>
      <CreateProduct createProduct={createProduct} />
      <ProductList newProduct={newProduct} />
    </div>
  );
}

export default App;
