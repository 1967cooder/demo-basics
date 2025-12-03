import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import CardMUI from "@mui/material/Card";
import Button from "@mui/material/Button";
import CustomButton from "./CustomButton";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

function Card({
  name,
  title,
  age,
  isFavourite,
  toggleFavourite,
  id,
  handleDelete,
}) {
  console.log("Cards props -ID:", id, "Name:");

  const navigate = useNavigate();
  return (
    <div className="box">
      <CardMUI>
        <CardActions>
          <CustomButton variant="contained" onClick={() => toggleFavourite(id)}>
            Toggle Favourite
          </CustomButton>
          <Button variant="outlined" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </CardActions>
        <CardContent>
          <Typography variant="h6"> {name}</Typography>
          <Typography variant="h6"> {title}</Typography>
          <Typography variant="h6"> {age}</Typography>
          <Typography variant="h6">
            Favourite: {isFavourite ? "❤️" : "No"}
          </Typography>
        </CardContent>

        {/* <h2> {name}</h2>
        <p>Title:{title}</p>
        <p>Age:{age}</p>
        <p>Favourite:{isFavourite && <span>❤️</span>}</p> */}
        <CardActions>
          <Button onClick={() => navigate(`/employees/${id}`)}>
            View Employee
          </Button>
        </CardActions>
      </CardMUI>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
};

export default Card;
