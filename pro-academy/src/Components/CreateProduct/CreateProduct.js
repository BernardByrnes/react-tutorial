import ProductForm from "./ProductForm";
import React, { useState } from "react";

const CreateProduct = (props) => {
  function onCreateProduct(product) {
    // console.log(product);
    props.createProduct(product);
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 20px",
        borderRadius: "2px",
        // marginBottom: "20px",
      }}
    >
      <ProductForm createProduct={onCreateProduct} />
    </div>
  );
};
export default CreateProduct;
