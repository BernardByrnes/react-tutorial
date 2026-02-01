import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};
export default HomeLayout;
