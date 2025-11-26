import ProductForm from "./ProductForm";

const CreateProduct = () => {
  return (
    <div className="row">
      <div
        className="col-lg-8 mx-auto"
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        <ProductForm />
      </div>
    </div>
  );
};
export default CreateProduct;
