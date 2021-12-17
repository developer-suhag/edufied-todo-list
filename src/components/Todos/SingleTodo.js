import React from "react";
import { Form } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteFromTodoList,
  markAsCompleted,
} from "../../redux/slices/todoSlice";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);
  const { id, name } = todo;
  return (
    <div
      style={{ backgroundColor: "#edf6f9" }}
      className="mb-3 px-2 py-1 d-flex align-items-center rounded-3 shadow-sm"
    >
      <p className="m-0 fs-5">{name}</p>
      <div className="ms-auto">
        {todoList.find((todo) => todo.id === id) && (
          <AiOutlineCheckCircle
            onClick={() => {
              dispatch(markAsCompleted(todo));
              toast.success("Mark as completed");
            }}
            style={{ color: "#006d77", cursor: "pointer" }}
            title="Mark as completed"
            className="fs-4 me-2"
          />
        )}
        <AiOutlineDelete
          onClick={() => {
            dispatch(deleteFromTodoList(id));
            toast.info("Deleted todo");
          }}
          style={{ color: "#d90429", cursor: "pointer" }}
          title="Delete from todos"
          className="fs-4"
        />
      </div>
    </div>
  );
};

export default SingleTodo;
