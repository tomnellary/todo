import React from "react";
import "./Todo.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { doneTodo, removeTodo } from "../store/todo-slice";
import { useDispatch, useSelector } from "react-redux";

function Todo({ todo, index, completedTodo, deleteTodo }) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <div>
        <Button
          className="button"
          variant="outline-success"
          onClick={() => completedTodo(todo.id)}
        >
          Done
        </Button>
        <Button variant="outline-danger" onClick={() => deleteTodo(index)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const completedTodo = (index) => {
    dispatch(doneTodo(index));
  };

  const deleteTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="app">
      <div className="container">
        <div>
          <Card className="card">
            <Card.Header>Planned Task</Card.Header>
            {todos.map((todo, index) => (
              <Card.Body key={todo.id}>
                <Todo
                  index={index}
                  todo={todo}
                  completedTodo={completedTodo}
                  deleteTodo={deleteTodo}
                />
              </Card.Body>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
