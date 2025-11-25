const Counter = ({ count, setCount }) => {
  //   const handleBackgroundColor = () => {
  //     if (count === 0) {
  //       return "grey";
  //     } else if (count > 0) {
  //       return "green";
  //     } else if (count < 0) {
  //       return "red";
  //     }
  //   };
  const handleBackgroundColor = () => {
    //jos on aika paljon buttonit ja halutaan selkeyttaa koodia
    switch (true) {
      case count === 0:
        return "grey";
      case count > 0:
        return "green";
      case count < 0:
        return "red";
      default:
        return "grey";
    }
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* <div style={{ backgroundColor: count > 0 ? "green" : "red" }}>
        {count}
      </div> */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: handleBackgroundColor(),
        }}
      >
        {count}
      </div>
    </div>
  );
};
export default Counter;
