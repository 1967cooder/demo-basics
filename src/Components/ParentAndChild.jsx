// 4. Parent–Child Communication via Props
// Pseudocode (problem)
// Create a parent component with a number in its state, starting at 0.
// Create a child button component.
// Parent passes:
// The current number.
// A function to increase the number by 1
// Child shows the current number and a button labeled "Increment".
// Clicking the child’s button updates the parent’s state.

import { useState } from "react";

function Child({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}
function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Child
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
}

export default Parent;
