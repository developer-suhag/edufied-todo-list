import React from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
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
        {todoList?.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default TodoList;
