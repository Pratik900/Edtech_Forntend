import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const loginImageUrl = 'https://accounts.pwskills.com/images/signin-banner.svg'; 
    return (
        <Container fluid>
            <Row>
                {/* Image Section */}
                <Col lg={7} className="d-none d-lg-block mt-5">
                    <Image src={loginImageUrl} alt="Login" fluid />
                </Col>

                {/* Form Section */}
                <Col lg={5} className="p-5">
                <Form>

                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
                        Don't have an account?
                        <Link to="/register" style={{ color: '#6674cc', marginLeft: '5px' }}>
                        Register here
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;