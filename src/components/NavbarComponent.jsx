import React from 'react';
import { Navbar, Container, Nav, Form, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../Assets/logo.png'
function NavbarComponent() {
    return (
        <div className='sticky-top'>
            <Navbar expand="lg" style={{ background: '#6674cc' }} variant="dark" className="px-5 text-dark">
                <Container>

                    <Image src={logo} alt="Logo" className='mb-1 me-1 ' style={{ height: 60, width: 75 }} />

                    <Navbar.Brand as={NavLink} to="/" className="text-white me-4" style={{ fontFamily: 'Cursive', fontSize: '34px', fontWeight: 'bold' }}>
                        Ed-Tech
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto d-flex" style={{ fontFamily: 'Roboto Condensed', fontSize: '20px' }}>
                            <Nav.Link as={NavLink} to="/courses" className="navlink-wrap me-2 text-white">
                                Courses
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about-us" className="navlink-wrap me-2 text-white">
                                About Us
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact-us" className="navlink-wrap me-2 text-white">
                                Contact
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/addcourses" className="navlink-wrap me-2 text-white">
                                AddCourse
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/allcourses" className="navlink-wrap me-2 text-white">
                                Course List
                            </Nav.Link>
                        </Nav>


                        <Form className="d-flex">
                            {/* <Button as={NavLink} to="/dashboard" variant="outline-dark me-2 btn-dark" className='text-white' type="submit">
                                Dashboard
                            </Button> */}
                            <Button as={NavLink} to="/login" variant="outline-dark btn-dark" className='text-white'>
                                Login
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;