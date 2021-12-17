import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Header from "../Header/Header";
import "./Todos.css";

const Todos = () => {
  const { user } = useAuth();
  return (
    <>
      {/* header  */}
      <Header />
      <Container className="py-5">
        <div className="text-center">
          <h3>
            Welcome back{" "}
            <span className="colored-text"> {user.displayName}</span>
          </h3>
        </div>
      </Container>
    </>
  );
};

export default Todos;
