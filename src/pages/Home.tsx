import React, { useState } from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (task: string) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index: number, newTask: string) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? newTask : todo));
    setTodos(updatedTodos);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default Home;
