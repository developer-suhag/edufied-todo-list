import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Header/Header";

const Todos = () => {
  const { user } = useAuth();
  return (
    <>
      {/* header  */}
      <Header />
      <Container className="py-3">
        <div className="text-center">
          <h3>
            Welcome back{" "}
            <span className="colored-text"> {user.displayName}</span>
          </h3>
        </div>
      </Container>
      {/* todo list  */}

      <Outlet />
    </>
  );
};

export default Todos;
