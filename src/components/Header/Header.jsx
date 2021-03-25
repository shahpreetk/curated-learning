import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaDev } from "react-icons/fa";
// bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
// local assets
import curatedLearningLogo from "../../assets/curatedLearningLogo.png";

const Styles = styled.div`
  .navbar {
    background-color: #69d8aa;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-item {
    color: #245760;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  .navbar-toggler,
  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

const Header = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="curatedLearning Logo"
              src={curatedLearningLogo}
              width="35"
              height="auto"
              className="d-inline-block align-center"
            />{" "}
            curatedLearning
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="shadow-none">
            <Nav className="ml-auto">
              <Nav.Item className="pl-0 pr-4 py-2">
                <Link to="/curations">
                  <FaClipboardList />
                  <span className="align-middle px-1">Curations</span>
                </Link>
              </Nav.Item>
              <Nav.Item className="pl-0 pr-4 py-2">
                <Link to="/blogs">
                  <FaDev />
                  <span className="align-middle px-1">Blogs</span>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;
