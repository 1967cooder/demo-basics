import { useNavigate } from "react-router";
import CustomKideImage from "./CustomKideImage";

const About = () => {
  const navigate = useNavigate();

  const image =
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80";

  //   const handleNavigate = () => {
  //     navigate("/");
  //   };
  return (
    <>
      <p>About</p>

      {/* <button onClick={() => handleNavigate()}> return to Home</button> */}
      <button onClick={() => navigate("/")}> return to Home</button>
      <div style={{ width: "100%", height: "500px" }}>
        <CustomKideImage image={image} />
      </div>
    </>
  );
};
export default About;
