import { Outlet } from "react-router";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
