// import "./App.css";
//import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";

//----------------Create Browser Router v6.4+ -----------------
// import Home from "./Components/Home";
// import About from "./Components/About";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Layout from "./Layout";
// import ErrorPage from "./Components/ErrorPage";
// import Todos from "./Components/Todos";
// import SingleEmployee from "./Components/SingleEmployee";
// import EmployeesTable from "./Components/EmployeesTable";
//------------------------------------------------------------

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
//}
//----------------Create Browser Router v6.4+ -----------------

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         index: true,
//         element: <Home />,
//       },
//       // {
//       //   path: "EmployeeDataGrid",
//       //   element: <EmployeeDataGrid />,
//       // },
//       {
//         path: "employeesTable",
//         element: <EmployeesTable />,
//       },
//       {
//         path: "employees/:id",
//         element: <SingleEmployee />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "todos",
//         element: <Todos />,
//       },
//       {
//         path: "*",
//         element: <ErrorPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

//----------------Create Hash Router v6.4+ for GitHub-----------------
// import "./App.css";
// import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";

//----------------Create Hash Router v6.4+ for GitHub-----------------
// import { HashRouter, Routes, Route } from "react-router-dom";

// import Home from "./Components/Home";
// import About from "./Components/About";
// import Layout from "./Layout";
// import ErrorPage from "./Components/ErrorPage";
// import Todos from "./Components/Todos";
// import SingleEmployee from "./Components/SingleEmployee";
// import EmployeesTable from "./Components/EmployeesTable";

// function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           {/* <Route path="EmployeeDataGrid" element={<EmployeeDataGrid />} /> */}
//           <Route path="employeesTable" element={<EmployeesTable />} />
//           <Route path="employees/:id" element={<SingleEmployee />} />
//           <Route path="about" element={<About />} />
//           <Route path="todos" element={<Todos />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   );
// }

// export default App;
//---------------------------------------------------------------
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Layout from "./Layout";
import ErrorPage from "./Components/ErrorPage";
import Todos from "./Components/Todos";
import SingleEmployee from "./Components/SingleEmployee";
import EmployeesTable from "./Components/EmployeesTable";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="employeesTable" element={<EmployeesTable />} />
          <Route path="employees/:id" element={<SingleEmployee />} />
          <Route path="about" element={<About />} />
          <Route path="todos" element={<Todos />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
