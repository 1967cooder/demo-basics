function Card({ name, title, age, isFavourite, togleFavourite, id }) {
  return (
    <div className="box">
      <button onClick={() => togleFavourite(id)}>Toggle Favourite</button>
      <h2> {name}</h2>
      <p>Title:{title}</p>
      <p>Age:{age}</p>
      <p>Favourite:{isFavourite && <span>❤️</span>}</p>
    </div>
  );
}
export default Card;
