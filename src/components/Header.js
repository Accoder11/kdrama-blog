import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mylogo from '../image/kdrama-logo.png';

const Header = () => {
  return (
      
        <Navbar sticky="top" bg="black" expand="lg" className="nav-border">
      <Container fluid className="mx-auto">
        <Navbar.Brand><Link to="/"><img src={mylogo} alt= "logo" className="mylogo"/>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/"><Button className="btn = none">Home</Button></Link>
            <Link to="kdrama-series"><Button className="btn = none">
            K-Drama Series</Button></Link>
            <Link to="upcoming"><Button className="btn = none">Upcoming K-Dramas</Button></Link>
            <Link to="blogs"><Button className="btn = none">Blog</Button></Link>
            <Link to="about-us"><Button className="btn = none">About Us</Button></Link>
          </Nav>
          <Outlet />
          <Form className="d-flex btn">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn border = none">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default Header;