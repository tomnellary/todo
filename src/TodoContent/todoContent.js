import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import CompletedTodo from "./completedTodo";

function TodoContent() {
  return (
    <div>
      <AddTodo />
      <div className="d-flex justify-content-sm-center">
        <TodoList />
        <CompletedTodo />
      </div>
    </div>
  );
}

export default TodoContent;
