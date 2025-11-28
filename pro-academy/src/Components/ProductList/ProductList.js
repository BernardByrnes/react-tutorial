import React, { useState } from "react";
import Products from "./Products";

const ProductList = (props) => {
  return (
    <ul className="list-group shadow">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product?.pID} // 👈 always add a key when mapping
            id={product?.pID}
            name={product?.pName}
            description={product?.desc}
            isAvailable={product?.isAvailable}
            imageUrl={product?.image}
            price={product?.price}
          />
        );
      })}
    </ul>
  );
};
export default ProductList;
