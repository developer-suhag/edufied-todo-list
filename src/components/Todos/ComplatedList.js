import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleTodo from "./SingleTodo";

const ComplatedList = () => {
  const completedList = useSelector((state) => state.todos.completedList);
  return (
    <Container className="py-3 px-4 shadow rounded-3 w-50">
      <h4 className="text-center colored-text">Completed Todos</h4>
      <div className=" mx-auto mt-3">
        {completedList.length === 0 && (
          <p>Look like you don't have any completed todo</p>
        )}
        {completedList?.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="text-end mt-4">
        <Link className="text-info" to="/todos">
          Pending Todos
        </Link>
      </div>
    </Container>
  );
};

export default ComplatedList;
