import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <img className="profile" src={user.photoURL} alt="" />
            <div className="ms-3 mt-2 mt-md-0">
              <Button
                onClick={logOut}
                className="px-3 py-1 edufied-outline-btn login-btn d-flex align-items-center"
                variant=""
              >
                Log Out
                <AiOutlineLogout className="ms-2" />
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
