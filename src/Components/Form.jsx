function Form({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }; //ottaa edellinen data talteen ja päivitä vain se mikä muuttui
    });
  };

  const handlSubmit = (e) => {
    e.preventDefault(); //handle form submission logic here to prevent page reload
    handleClick(); //call the handleClick function passed as prop
    setFormData({
      //reset form data after submission
      name: "",
      title: "",
      age: "",
    }); //optional resetting of the form
  };

  return (
    <div>
      <form className="formcontainer" onSubmit={handlSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
        {/* Alternatively you can use just button without submit type, and you have to take off e.preventDefault(); */}
        {/* <button type="button"onClick={handleClick}>Add Employee</button> */}

        <p>Your name is: {formData.name}</p>
        <p>Your title is: {formData.title}</p>
        <p>Your age is: {formData.age}</p>
      </form>
    </div>
  );
}
export default Form;
