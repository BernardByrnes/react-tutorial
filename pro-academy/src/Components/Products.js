import "../app.css";

let productCount = 0;

let style = {
  padding: "0px 20px",
  "font-size": 14,
};

function displayFormattedCount() {
  return productCount > 0 ? productCount : <h1>Zero</h1>;
}

function Products(props) {
  let badgeClass = "badge-margin badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";
  return (
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">
            {props.description}
          </p>
          <div className="d-flex align-items-center justify-content-start mt-1">
            <h6
              className="font-weight-bold my-2"
              style={{ "margin-right": 20 }}
            >
              {props.price}
            </h6>
            <button className="btn btn-primary">-</button>
            <span style={style}>{displayFormattedCount()}</span>
            <button className="btn btn-primary">+</button>
            <span className={badgeClass}>
              {props.isAvailable ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>
        <img
          src={props.imageUrl} // put a real image url here
          alt="Fresh milk"
          width="200"
          className="ml-lg-5 order-1 order-lg-2"
        />
      </div>
    </li>
  );
}

export default Products;
