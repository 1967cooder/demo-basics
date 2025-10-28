import { useState } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);

  return { count, setCount };
};
export default useCounter;
