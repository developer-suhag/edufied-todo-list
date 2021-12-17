import React, { useRef } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../../redux/slices/todoSlice";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const todoRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: `${todoList.length + 1}`,
      name: todoRef.current.value,
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
  };
  return (
    <Container className="py-3 px-4 shadow rounded-3 w-50">
      <h4 className="text-center colored-text">Todos</h4>
      <Form onSubmit={handleAdd}>
        <Stack className=" mx-auto mt-3" direction="horizontal" gap={3}>
          <Form.Control
            ref={todoRef}
            className="me-auto"
            placeholder="Add new task"
          />
          <Button type="submit" variant="" className="edufied-outline-btn px-3">
            ADD
          </Button>
        </Stack>
      </Form>
      <div className=" mx-auto mt-3">
        {todoList.length === 0 && <p>Look like you don't have any todo</p>}
        {todoList?.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="text-end mt-4">
        <Link className="text-info" to="/todos/completed">
          Completed todos
        </Link>
      </div>
    </Container>
  );
};

export default TodoList;
