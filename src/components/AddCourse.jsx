import React, { Fragment, useState } from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { useEffect } from 'react';
import { sentCourses } from '../services/CourseService';
import { Alert } from "react-bootstrap";

export function AddCourse() {
    useEffect(
        () => {
            document.title = "Add Course";
        }, []
    );

    const [course, setCourse] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);

    const handleForm = (e) => {
        console.log(course);
        try {
            const result = sentCourses(course);
            setCourse({
                id: "",
                title: "",
                description: "",
                duration: "",
                price: "",
            });
            setisSubmitted(true);
            setTimeout(() => {
                setisSubmitted(false);
            }, 1500);
            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
        e.preventDefault();
    };


    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh'  }}
        >
            <div style={{ maxWidth: '500px', width: '100%' }}>
                <Form
                    onSubmit={handleForm}
                    style={{
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        padding: '30px',
                        borderRadius: '10px',
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    <h2 className="mb-4 text-center">Add Course</h2>
                    <FormGroup>
                        <Form.Label className="font-weight-bold ">Course Id</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Id Of The Course"
                            id="userId"
                            onChange={(e) => setCourse({ ...course, id: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label className="font-weight-bold pt-2">Enter Course Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Title Of The Course"
                            id="title"
                            onChange={(e) => setCourse({ ...course, title: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label className="font-weight-bold pt-2">Enter Course Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter Description Of The Course"
                            id="description"
                            onChange={(e) => setCourse({ ...course, description: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label className="font-weight-bold pt-2 ">Course Duration</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Course Duration"
                            id="duration"
                            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label className="font-weight-bold pt-2 ">Enter Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Price"
                            id="Price"
                            onChange={(e) => setCourse({ ...course, price: e.target.value })}
                        />
                    </FormGroup>
                    <div className="d-flex justify-content-center mt-3">
                        <Button className='border-0 text-dark mb-3 w-48 me-3' type='submit' style={{ backgroundColor: '#6674cc' }}>
                            Add Course
                        </Button>
                        <Button className='border-0 text-dark mb-3 w-48' type='reset' style={{ backgroundColor: '#6674cc' }}>
                            Reset
                        </Button>
                    </div>

                    {isSubmitted && (
                        <Alert variant="success" className="mt-3">
                            Details Inserted
                        </Alert>
                    )}
                </Form>
            </div>
        </Container>
    );
};

