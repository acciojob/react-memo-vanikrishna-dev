import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

function UseMemo() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New Todo"]);
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>React.useMemo</h2>

      <h3>My todos</h3>
      <p>New Todo</p>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <hr />

      <p>
        Count: {count}{" "}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </p>

      <h3>Expensive Calculation</h3>
      <p>{calculation}</p>
    </div>
  );
}

export default UseMemo;