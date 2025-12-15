// 3. List Rendering With Unique Keys
// Pseudocode (problem)
// You have a list of todo items: ["Buy milk", "Walk dog", "Study React"].
// Render them as an unordered list.
// Each item should have a React key.
// When you click an item, log its text to the console.

const todos = ["Buy milk", "Walk dog", "Study React"];

function TodoList() {
  function handleClick(todo) {
    console.log("Clicked:", todo);
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo} onClick={() => handleClick(todo)}>
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
