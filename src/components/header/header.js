import React from 'react';
import './header.css';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from '../../assets/images/cart.svg';


  const NavbarComponent =() => {
    return (
        <Navbar className='nav-bar' expand="lg">
        <Container >

        <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>Construction Company Landing</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
         <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end' >
                <Nav >
                <Nav.Link href='/project' >Project</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                    <Nav.Link href='/portfolio' >Portfolio</Nav.Link>
                    <Nav.Link href='/service'>Service</Nav.Link>
                    <Nav.Link href='/services' >Services</Nav.Link>
                    <Nav.Link href='/contact' >Contact</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <img src={cart} alt="App Logo" className="navbar-brand-img me-2" /> 
                </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  }

  export default NavbarComponent;