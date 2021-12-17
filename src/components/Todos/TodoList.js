import React from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import SingleTodo from "./SingleTodo";

const todos = [
  { id: "0", name: "Hello", status: "pending" },
  { id: "1", name: "Hello", status: "pending" },
  { id: "2", name: "Hello", status: "completed" },
  { id: "3", name: "Hello", status: "pending" },
  { id: "4", name: "Hello", status: "completed" },
  { id: "5", name: "Hello", status: "pending" },
];

const TodoList = () => {
  return (
    <Container className="py-3 px-4 shadow rounded-3 w-50">
      <h4 className="text-center colored-text">Todos</h4>
      <Stack className=" mx-auto mt-3" direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add new task" />
        <Button variant="" className="edufied-outline-btn px-3">
          ADD
        </Button>
      </Stack>
      <div className=" mx-auto mt-3">
        {todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default TodoList;
