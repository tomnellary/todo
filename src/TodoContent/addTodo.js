import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { addNewTodo } from "../store/todo-slice";
import { useDispatch } from "react-redux";
import "./Todo.css";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="d-flex justify-content-sm-center">
      <Form onSubmit={handleSubmit}>
        <div className="input-group">
          <Form.Control
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new todo"
          />
          <Button variant="primary ml-12" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

function AddTodo() {
  const dispatch = useDispatch();

  const addTodo = (text) => {
    dispatch(addNewTodo({ id: Date.now().toString(), text: text }));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default AddTodo;
