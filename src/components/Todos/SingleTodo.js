import React from "react";
import { Form } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";

const SingleTodo = ({ todo }) => {
  const handleDone = (e) => {
    console.log("adadf");
  };
  return (
    <div
      style={{ backgroundColor: "#edf6f9" }}
      className="mb-3 px-2 py-1 d-flex align-items-center rounded-3 shadow-sm"
    >
      <p className="m-0 fs-5">{todo.name}</p>
      <div className="ms-auto">
        <AiOutlineCheckCircle
          style={{ color: "#006d77", cursor: "pointer" }}
          title="Mark as completed"
          className="fs-4 me-2"
        />
        <AiOutlineDelete
          style={{ color: "#d90429", cursor: "pointer" }}
          title="Delete from todos"
          className="fs-4"
        />
      </div>
    </div>
  );
};

export default SingleTodo;
