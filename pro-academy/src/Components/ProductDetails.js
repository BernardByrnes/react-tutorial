import Button from "./Button";

let productCount = 0;

function displayFormattedCount() {
  return productCount > 0 ? productCount : <h1>Zero</h1>;
}

let style = {
  padding: "0px 20px",
  "font-size": 14,
};

const ProductDetails = (props) => {
  let badgeClass = "badge-margin badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";
  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ "margin-right": 20 }}>
        {props.price}
      </h6>
      <Button>-</Button>
      <span style={style}>{displayFormattedCount()}</span>
      <Button>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
};
export default ProductDetails;
