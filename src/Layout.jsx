import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";

const Layout = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer count={count} setCount={setCount} />
    </div>
  );
};

export default Layout;
