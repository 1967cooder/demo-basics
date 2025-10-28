import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card.jsx";
import Counter from "./Components/Counter.jsx";
import Footer from "./Components/Footer.jsx";
import data from "./data";

function App() {
  // const { count, setCount } = useCounter(); // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1, //for form to work properly
        name: "Jhon", //formData.name.value
        title: "Developer", //formData.title.value
        age: 66, //formData.age.value
      },
    ]);
  };
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
      </header>

      <div className="container">
        <button onClick={handleClick}>Add Employee</button>
        {employees.map((employee) => {
          console.log(employee);
          let age = employee.age;
          age = age + 100;

          return (
            <Card
              key={employee.id}
              name={employee.name}
              title={employee.title}
              age={age}
            />
          );
        })}

        <Counter count={count} setCount={setCount} />
      </div>

      <div className="attribution">
        <Footer count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
