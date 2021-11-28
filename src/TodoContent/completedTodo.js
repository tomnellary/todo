import React from "react";
import "./Todo.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function Todo({ todo }) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
    </div>
  );
}

function CompletedTodo() {
  const completedTodos = useSelector((state) => state.todo.completedTodos);

  return (
    <div className="app">
      <div className="container">
        <div>
          <Card className="card">
            <Card.Header>Done Task</Card.Header>
            {completedTodos.map((todo) => (
              <Card.Body key={todo.id}>
                <Todo todo={todo} />
              </Card.Body>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CompletedTodo;
