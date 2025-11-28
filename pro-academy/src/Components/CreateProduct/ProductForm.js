import React, {useState } from "react";

const ProductForm = (props) => {
  let [pName, setName] = useState("");
  let [pPrice, setPrice] = useState("");
  let [pDesc, setDescription] = useState("");
  let [pAvailable, setAvailability] = useState(false);
  let [pImageUrl, setImageUrl] = useState("");

  // let [userInput, updateUserInput] = useState({
  //   pName: "",
  //   pPrice: "",
  //   pDesc: "",
  //   pAvailable: "",
  //   pAvailable: "",
  //   pImageUrl: "",
  // });

  function nameInputHandler(event) {
    setName(event.target.value);
    // updateUserInput({
    //   ...userInput,
    //   pName: event.target.value,
    // });
    // updateUserInput((prevState) => {
    //   return { ...prevState, pName: event.target.value };
    // });
  }
  function priceInputHandler(event) {
    // updateUserInput({
    //   ...userInput,
    //   pPrice: event.target.value,
    // });
    setPrice(event.target.value);
  }
  function descInputHandler(event) {
    // updateUserInput({
    //   ...userInput,
    //   pDesc: event.target.value,
    // });
    setDescription(event.target.value);
  }
  function availabilityInputHandler(event) {
    // updateUserInput({
    //   ...userInput,
    //   pAvailable: event.target.value,
    // });
    setAvailability(event.target.checked);
  }
  function imageInputHandler(event) {
    // updateUserInput({
    //   ...userInput,
    //   pImageUrl: event.target.value,
    // });
    setImageUrl(event.target.value);
  }

  function createProductEventHandler(event) {
    event.preventDefault();
    let product = {
      pID: 1,
      pName: pName,
      desc: pDesc,
      isAvailable: Boolean(pAvailable),
      image: pImageUrl,
      price: Number(pPrice),
    };
    setAvailability(false);
    setDescription("");
    setImageUrl("");
    setName("");
    setPrice("");

    props.createProduct(product);
  }

  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={pName}
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={pPrice}
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDesc}
          onChange={descInputHandler}
        />
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailable}
          onChange={availabilityInputHandler}
        />
        <label class="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImageUrl}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};
export default ProductForm;
