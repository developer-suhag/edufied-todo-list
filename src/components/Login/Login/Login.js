import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { BsGoogle } from "react-icons/bs";
import loginTodo from "../../../images/Checklist.gif";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle(navigate);
  };
  return (
    <Container className="py-5">
      <div className="text-center">
        <h1 className="colored-text">Edufied Todos</h1>
        <h4>Get Started for Free</h4>
        <img className="img-fluid" src={loginTodo} alt="" />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button
          variant=""
          className="px-3 py-1 edufied-outline-btn login-btn d-flex align-items-center"
          onClick={handleGoogleLogin}
        >
          <BsGoogle className="me-2" />
          Login with Google
        </Button>
      </div>
    </Container>
  );
};

export default Login;
