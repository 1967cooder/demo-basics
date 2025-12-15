// 6. Simple Filtered List

// Pseudocode (problem)

// You have a list of names: ["Alice", "Bob", "Charlie", "David"].
// Add an input box.
// As the user types, filter the list to show only names that contain the input text (case-insensitive).
// Render the filtered names.
import { useState } from "react";

const names = ["Alice", "Bob", "Charlie", "David"];

function FilteredList() {
  const [filter, setFilter] = useState("");

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Searche name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
