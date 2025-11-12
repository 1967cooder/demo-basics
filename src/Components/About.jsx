import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  //   const handleNavigate = () => {
  //     navigate("/");
  //   };
  return (
    <div>
      <p>About will be here</p>

      {/* <button onClick={() => handleNavigate()}> return to Home</button> */}
      <button onClick={() => navigate("/")}> return to Home</button>
    </div>
  );
};
export default About;
