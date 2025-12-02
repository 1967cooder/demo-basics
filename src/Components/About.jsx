import { useNavigate } from "react-router";
import CustomKideImage from "./CustomKideImage";

const About = () => {
  const navigate = useNavigate();

  //   const handleNavigate = () => {
  //     navigate("/");
  //   };
  return (
    <>
      <p>About will be here</p>

      {/* <button onClick={() => handleNavigate()}> return to Home</button> */}
      <button onClick={() => navigate("/")}> return to Home</button>
      <span style={{ width: "100%", height: "500px" }}>
        <CustomKideImage />
      </span>
    </>
  );
};
export default About;
