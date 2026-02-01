import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh🤣🤣</h3>
          <p>We cant find that page man🙄🙄🙄</p>
          <Link to="/">Go Home😏</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went Wrong😪</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
