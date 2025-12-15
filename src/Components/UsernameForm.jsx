// 7. Simple Form With Validation (Required Field)

//  Pseudocode (problem)
// Create a form with a single input for “username”.
// When the user submits:
// If username is empty, show "Username is required" in red and do nothing else.
// Otherwise, show an alert with "Hello, [username]!".
// Prevent the form’s default page reload.

import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // спира презареждането на страницата
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert(`Hello, ${username}`);
      setUsername(""); // изчистване на полето (по избор)
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (error) setError(""); // премахване на грешката при въвеждане
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default UsernameForm;
