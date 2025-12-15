// 2. Controlled Input With Live Character Count

// Pseudocode (problem)

// Create a text input.
// Store its value in component state.
// Show text: "You typed X characters" under the input.
// Update X as the user types.
// If X > 20, show the text in red, otherwise normal.

import { useState } from "react";

const TextWithCounter = () => {
  const [text, setText] = useState("");

  const length = text.length;
  const isTooLong = length > 20;

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p style={{ color: isTooLong ? "red" : "black" }}>
        You typed {length} characters
      </p>
    </div>
  );
};

export default TextWithCounter;
