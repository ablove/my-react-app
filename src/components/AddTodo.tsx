import React, { useState } from "react";
import styles from "../styles/AddTodo.module.css";

interface AddTodoProps {
  addTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form className={styles["add-todo"]} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
