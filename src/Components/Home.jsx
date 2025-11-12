import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../Components/Card.jsx";
import Counter from "../Components/Counter.jsx";
import Footer from "../Components/Footer.jsx";
import Form from "../Components/Form.jsx";

function Home() {
  // const { count, setCount } = useCounter(); // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    age: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/employees/${id}`).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:3001/employees", {
        id: String(employees.length + 1), //for form to work properly
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      });
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
              handleDelete={handleDelete}
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
    </>
  );
}

export default Home;
