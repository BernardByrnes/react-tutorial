import "./app.css";
import Products from "./Components/Products";

const products = [
  {
    pId: 1,
    PName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, natus.",
    image: "images/",
  },
];

function App() {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}

export default App;
