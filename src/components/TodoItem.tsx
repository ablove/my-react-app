import React, { useState } from "react";
import styles from "../styles/TodoItem.module.css";

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo);

  const handleEdit = () => {
    editTodo(index, newTask);
    setIsEditing(false);
  };

  return (
    <li className={styles["todo-item"]}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <span>{todo}</span>
      )}
      <button onClick={() => deleteTodo(index)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
};

export default TodoItem;
