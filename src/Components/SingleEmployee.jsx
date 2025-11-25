import axios from "axios"; //Imports the axios library, which is used to make HTTP requests (GET, POST, PUT, DELETE).
//Here, we use it to fetch employee data from a backend server and to update it.
import { useEffect, useState } from "react"; //iuseState s a React Hook that allows you to create state variables in functional components.
//useEffect is a React Hook used for side effects, like fetching data from an API or subscribing to
//events. It runs after the component renders.
import { useParams } from "react-router"; //This hook allows you to access dynamic parameters from the URL.
//For example, if your route is /employees/5, useParams() will give you { id: "5" }.
import useAxios from "../hooks/useAxios";
import "./SingleEmployee.css";

const SingleEmployee = () => {
  const { id } = useParams(); //Extracts the id parameter from the URL.For example, if your URL is /employees/3, id will be "3".
  // This id is later used to fetch the specific employee from the server.

  const [employee, setEmployee] = useState(null); //null because we haven’t fetched the employee data yet.
  // employee will later store the employee object retrieved from the backend.
  console.log("Employee: ", employee);

  const [isLoading, setIsLoading] = useState(false); //Creates a loading state variable to track if the data is still being fetched.
  //Initially true, because when the component loads, we haven’t finished fetching data yet.
  //Later, setLoading(false) is called once the data is retrieved.

  const [isEditing, setIsEditing] = useState(false); //State variable to track if the user is editing the employee information.
  //Initially false, because the component first shows the employee’s details in read-only mode.

  const [formData, setFormData] = useState({
    //formData stores the values from the form inputs when editing.setFormData is used to update these values.

    name: "",
    title: "",
    age: "",
  });

  const url = `https://demo-basics.onrender.com/employees/${id}`;

  const { data, loading, error } = useAxios(url);

  const handleChange = (e) => {
    //This function handles input changes in the form.
    setFormData((prevState) => {
      //updates the specific field while keeping the other fields unchanged using the spread operator ...prevState.
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toggleEdit = () => {
    //Toggles the edit mode on and off.
    setIsEditing(!isEditing); //If isEditing is false, it becomes true (showing the form).
    //If true, it becomes false (showing the read-only view).
  };

  const handleSave = () => {
    //when the user clicks the "Save" button.
    axios ////axios .put sends a PUT request to update the employee data on the server.
      .put(`https://demo-basics.onrender.com/employees/${id}`, formData) //updates the specific employee.formData → contains the updated name, title, and age.
      .then((response) => {
        //Runs if the request is successful.
        setEmployee(response.data); //Updates the employee state with the new data and exits edit mode.
        setIsEditing(false);
      })
      .catch((error) => {
        //Runs if there’s an error, e.g., server offline or invalid data
        console.log("Error: ", error.message);
      })
      .finally(() => {
        //Runs regardless of success or failure.Stops the loading indicator.
        setIsLoading(false);
      });
  };

  useEffect(() => {
    //runs after the component first renders.
    if (data) {
      setEmployee(data);
      setFormData({
        name: data.name,
        title: data.title,
        age: data.age,
      });
    }
  }, [id, data, loading]); //dependency array
  //The effect runs again only if id changes.

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }
  if (isEditing) {
    //if isEditing is true, show the editable form.
    //Cancel → toggles edit mode off without saving.
    //Save → calls handleSave to update the employee.
    return (
      <div className="employee-page-container">
        <form className="single-employee-container">
          <h3>Employee Details</h3>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            autoComplete="organization-title"
          />
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            autoComplete="off"
          />
        </form>
        <button onClick={toggleEdit}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }

  return (
    //{employee?.name}If employee exists, use employee.name.
    //If employee is null or undefined, it won’t throw an error and will display nothing.
    //{employee?.isFavourite ? "Yes" : "No"}if the employee exists with isFavourite property, it displays "Yes".If it’s false or undefined, it displays "No".
    //onClick={toggleEdit} sets an event handler: when the button is clicked, the toggleEdit function runs.
    //toggleEdit switches the state isEditing between true and false, which toggles between the display view and the edit form.
    //The button shows the text "Edit" on the page.
    <div className="employee-page-container">
      <h3>Employee Details</h3>
      <p>Name: {employee?.name}</p>
      <p>Title: {employee?.title}</p>
      <p>Age: {employee?.age}</p>
      <p>Is Favourite: {employee?.isFavourite ? "Yes" : "No"}</p>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
};

export default SingleEmployee;
