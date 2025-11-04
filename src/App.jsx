import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card.jsx";
import Counter from "./Components/Counter.jsx";
import Footer from "./Components/Footer.jsx";
import data from "./data";
import Form from "./Components/Form.jsx";

function App() {
  // const { count, setCount } = useCounter(); // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    age: "",
  });

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1, //for form to work properly
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
      },
    ]);
  };

  const togleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id && employee.isFavourite === undefined) {
        return { ...employee, isFavourite: false };
      } else if (employee.id === id) {
        return { ...employee, isFavourite: !employee.isFavourite };
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  };
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
      </header>

      <div className="container">
        {employees.map((employee) => {
          console.log(employee);
          let age = employee.age;
          age = age + 100;

          return (
            <Card
              key={employee.id}
              {...employee}
              togleFavourite={togleFavourite}
            />
          );
        })}

        <Counter count={count} setCount={setCount} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </div>

      <div className="attribution">
        <Footer count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
