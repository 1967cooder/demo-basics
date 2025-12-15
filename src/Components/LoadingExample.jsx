// 5. Conditional Rendering Based on State

// Pseudocode (problem)

// Make a component that simulates “loading”.
// Have state isLoading that starts as true.
// After 2 seconds, set isLoading to false.
// While loading: show "Loading...".
// After loading: show "Data loaded".

import { useEffect, useState } from "react";

const LoadingExample = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); //2 seconds

    return () => clearTimeout(timer); //cleanup function
  }, []); //empty dependency array means it runs once on mount
  return <div>{loading ? <p>Loading...</p> : <p>Data loaded!</p>}</div>;
};

export default LoadingExample;
