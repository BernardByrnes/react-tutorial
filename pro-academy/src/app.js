import "./app.css";

function App() {
  let msg = "Awesome Bro";
  return (
    <div>
      <h1 className="myHeader">Welcome to my app</h1>
      <p className="myParagraph">This is First component {msg}!!! </p>
      <input className="myInput" type="text" placeholder="hello" />
    </div>
  );
}

export default App;
