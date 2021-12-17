import React from "react";
import { Form } from "react-bootstrap";

const SingleTodo = ({ todo }) => {
  const handleDone = (e) => {
    console.log("adadf");
  };
  return (
    <div style={{ backgroundColor: "#edf6f9" }} className="mb-3 px-2 py-1">
      <h3>{todo.name}</h3>
    </div>
  );
};

export default SingleTodo;
