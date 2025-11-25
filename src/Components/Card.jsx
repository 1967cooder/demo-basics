import { useNavigate } from "react-router";
import PropTypes from "prop-types";

function Card({
  name,
  title,
  age,
  isFavourite,
  togleFavourite,
  id,
  handleDelete,
}) {
  console.log("Cards props -ID:", id, "Name:");

  const navigate = useNavigate();
  return (
    <div className="box">
      <button onClick={() => togleFavourite(id)}>Toggle Favourite</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <h2> {name}</h2>
      <p>Title:{title}</p>
      <p>Age:{age}</p>
      <p>Favourite:{isFavourite && <span>❤️</span>}</p>
      <button onClick={() => navigate(`/employees/${id}`)}>
        View Employee
      </button>
    </div>
  );
}

Card.propsTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
};

export default Card;
