import ProductForm from "./ProductForm";
import React, { useState } from "react";

const CreateProduct = (props) => {
  let [showForm, updateShowForm] = useState(false);

  function onCreateProduct(product) {
    // console.log(product);
    props.createProduct(product);
  }

  function onProductSubmittedOrCancelled() {
    updateShowForm(false);
  }

  function onCreateNewProduct() {
    updateShowForm(true);
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
      {!showForm && (
        <button className="my-btn my-btn-main" onClick={onCreateNewProduct}>
          Create Product
        </button>
      )}
      {showForm && (
        <ProductForm
          createProduct={onCreateProduct}
          onCancel={onProductSubmittedOrCancelled}
        />
      )}
    </div>
  );
};
export default CreateProduct;
