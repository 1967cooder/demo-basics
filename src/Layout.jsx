// import { useState } from "react";
// import { Outlet } from "react-router";
// import Footer from "./Components/Footer.jsx";
// import Header from "./Components/Header.jsx";

// const Layout = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Header />
//       <div>
//         <Outlet />
//       </div>
//       <Footer count={count} setCount={setCount} />
//     </div>
//   );
// };

// export default Layout;

//-----------------------------------------------------
import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";

const Layout = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      {/* FULL WIDTH HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="content">
        <Outlet />
      </main>

      {/* FULL WIDTH FOOTER */}
      <Footer count={count} setCount={setCount} />
    </div>
  );
};

export default Layout;
