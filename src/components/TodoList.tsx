import React from "react";
import styles from "../styles/TodoList.module.css";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newTask: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className={styles["todo-list"]}>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
