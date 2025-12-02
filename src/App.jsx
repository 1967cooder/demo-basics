// import "./App.css";
//import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import ErrorPage from "./Components/ErrorPage";
import Todos from "./Components/Todos";
import SingleEmployee from "./Components/SingleEmployee";
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "employees/:id",
        element: <SingleEmployee />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
