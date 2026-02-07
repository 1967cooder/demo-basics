// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../../src/App.css";
// import Card from "../Components/Card.jsx";
// import Counter from "../Components/Counter.jsx";
// import Footer from "../Components/Footer.jsx";
// import Form from "../Components/Form.jsx";
// import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ToggleButton from "./ToggleButton.jsx";
// import TextWithCounter from "./TextWithCounter.jsx";
// import TodoList from "./TodoList.jsx";
// import ParentAndChild from "./ParentAndChild.jsx";
// import useEmployees from "../hooks/useEmployees.js";

// function Home() {
//   // const { count, setCount } = useCounter(); // Using custom hook
//   const [count, setCount] = useState(0);

//   const { employees, loading, error, fetchEmployees, handleDelete } =
//     useEmployees();

//   console.log("Employees: ", employees);
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     age: "",
//   });

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // const handleDelete = (id) => {
//   //   axios
//   //     .delete(`https://demo-basics.onrender.com/employees/${id}`)
//   //     .then(() => {
//   //       // setEmployees(employees.filter((employee) => employee.id !== id));
//   //     });
//   // };

//   const handleClick = () => {
//     axios
//       .post("https://demo-basics.onrender.com/employees", {
//         id: String(employees.length + 1), //for form to work properly
//         name: formData.name,
//         title: formData.title,
//         age: formData.age,
//         isFavourite: false,
//       })
//       .then((response) => {
//         // setEmployees([...employees, response.data]);
//       });
//   };

//   const toggleFavourite = (id) => {
//     const updatedEmployees = employees.map((employee) => {
//       if (employee.id && employee.isFavourite === undefined) {
//         return { ...employee, isFavourite: false };
//       } else if (employee.id === id) {
//         return { ...employee, isFavourite: !employee.isFavourite };
//       } else {
//         return employee;
//       }
//     });
//     // setEmployees(updatedEmployees);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="content">
//         <Button
//           variant="contained"
//           sx={{ padding: "50px" }}
//           startIcon={<DeleteIcon />}
//         >
//           {" "}
//           Click me I'm from MUI
//         </Button>

//         <ToggleButton />

//         {employees.map((employee) => {
//           console.log(employee);
//           let age = employee.age;
//           age = age + 100;

//           return (
//             <Card
//               key={employee.id}
//               {...employee}
//               toggleFavourite={toggleFavourite}
//               handleDelete={handleDelete}
//             />
//           );
//         })}

//         <Counter count={count} setCount={setCount} />
//         <TextWithCounter />
//         <TodoList />
//         <Form
//           formData={formData}
//           setFormData={setFormData}
//           handleClick={handleClick}
//         />
//         <ParentAndChild />
//       </div>
//     </>
//   );
// }

// export default Home;

//-------------------------------7.2.2026-----------------------
import axios from "axios";
import { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../Components/Card.jsx";
import Counter from "../Components/Counter.jsx";
import Footer from "../Components/Footer.jsx";
import Form from "../Components/Form.jsx";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "./ToggleButton.jsx";
import TextWithCounter from "./TextWithCounter.jsx";
import TodoList from "./TodoList.jsx";
import ParentAndChild from "./ParentAndChild.jsx";
import useEmployees from "../hooks/useEmployees.js";

function Home() {
  const [count, setCount] = useState(0);

  const { employees, loading, error, fetchEmployees, handleDelete } =
    useEmployees();

  // --- NEW: local state to trigger UI updates for favourites ---
  const [localEmployees, setLocalEmployees] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    age: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  // --- Sync localEmployees whenever employees change ---
  useEffect(() => {
    // Ensure all employees have isFavourite defined
    const initialized = employees.map((emp) => ({
      ...emp,
      isFavourite: emp.isFavourite ?? false,
    }));
    setLocalEmployees(initialized);
  }, [employees]);

  const handleClick = () => {
    axios
      .post("https://demo-basics.onrender.com/employees", {
        id: String(employees.length + 1),
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
      })
      .then((response) => {
        // --- Update local state immediately ---
        setLocalEmployees([
          ...localEmployees,
          { ...response.data, isFavourite: false },
        ]);
        setFormData({ name: "", title: "", age: "" }); // reset form
      });
  };

  const toggleFavourite = (id) => {
    const updatedEmployees = localEmployees.map((employee) =>
      employee.id === id
        ? { ...employee, isFavourite: !employee.isFavourite } // toggle
        : employee
    );
    setLocalEmployees(updatedEmployees); // --- trigger re-render ---
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="content">
        <Button
          variant="contained"
          sx={{ padding: "50px" }}
          startIcon={<DeleteIcon />}
        >
          Click me I'm from MUI
        </Button>

        <ToggleButton />

        {localEmployees.map((employee) => {
          console.log(employee);
          let age = employee.age;
          age = age + 100;

          return (
            <Card
              key={employee.id}
              {...employee}
              toggleFavourite={() => toggleFavourite(employee.id)}
              handleDelete={() => handleDelete(employee.id)}
            />
          );
        })}

        <Counter count={count} setCount={setCount} />
        <TextWithCounter />
        <TodoList />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
        <ParentAndChild />
      </div>
    </>
  );
}

export default Home;
