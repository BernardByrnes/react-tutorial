import "./search-box.style.css";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <input className="search-box" type="search" onChange={onChangeHandler} />
  );
};
export default SearchBox;
