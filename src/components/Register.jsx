import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const loginImageUrl = 'https://accounts.pwskills.com/images/signin-banner.svg'; 

    return (
        <Container fluid>
            <Row>
                {/* Image Section */}
                <Col lg={7} className="d-none d-lg-block mt-5">
                    <Image src={loginImageUrl} alt="register" fluid />
                </Col>

                {/* Form Section */}
                <Col lg={5} className="p-5">
                <Form>
                    <Form.Group controlId="formFullName">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordConfirm" className="mt-3">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <div>
                        <Button
                        className="border-0 text-dark mb-3 mt-3 w-100"
                        style={{ backgroundColor: '#6674cc' }}>
                        Register
                        </Button>
                    </div>
                    </Form>
                    <p className="mt-3">
                        already have an account?
                        <Link to="/login" style={{ color: '#6674cc', marginLeft: '5px' }}>
                        Login 
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;