import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link} from "react-router-dom";
import logoImg from "../../../../assets/logo-1.png";
import useAuth from "../../../hooks/useAuth";

const Menubar = () => {
  const { user, handleLogout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="nav ">
      <Container>
        <Navbar.Brand>
          <img src={logoImg} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav">
          <i class="fas fa-sliders-h"></i>
        </Navbar.Toggle>
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
            <Link className="nav-item pe-2" to="/addDestination">
              Add Destination 
            </Link>
            {user.email && (
              <span style={{ color: "orange",fontWeight:"900",fontSize:"16px" }}>
              
                {user?.displayName}
              </span>
            )}
            {user.email ? (
            <button
              onClick={handleLogout}
              className="ms-2 btn  login-btn text-uppercase"
            >
              
              Logout
            </button>
          ) : (
            <Link className="login-btn text-decoration-none" to="/login">
              LOGIN
            </Link>
          )}

            <i className="fas fa-shopping-cart text-white mt-2 ms-2 fs-5"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;

// {user.email && (
//   <span style={{ color: "orange" }}>{user?.photoUrl}{user?.displayName}</span>
// )}
// {user.email ? (
//   <button
//     onClick={handleLogout}
//     className="ms-2 btn  psychare-btn w-25 text-uppercase"
//   >
//     {" "}
//     Logout
//   </button>
// ) : (
//   <Link className="nav-item" to="/login">
//   Login
// </Link>
// )}
