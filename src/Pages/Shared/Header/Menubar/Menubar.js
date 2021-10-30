import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../../../../assets/logo-1.png";
const Menubar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav ">
      <Container>
        <Navbar.Brand>
          <img src={logoImg} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle
         id="toggle"
          aria-controls="responsive-navbar-nav"
        ><i class="fas fa-sliders-h"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-item" to="/home">
              Home
            </Link>
            <Link className="nav-item" to="/destinations">
              Destinations
            </Link>
            <Link className="nav-item" to="/myOrder">
              My Booking
            </Link>
            <Link className="nav-item" to="/manageOrder">
              Manage All Booking
            </Link>
            <Link className="nav-item" to="/addDestination">
              Add Destination
            </Link>
            <Link className="nav-item" to="/login">
              Login
            </Link>
            <i className="fas fa-shopping-cart text-white mt-2 ms-2 fs-5"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
