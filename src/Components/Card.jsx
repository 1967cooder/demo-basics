import { useNavigate } from "react-router";

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
export default Card;
