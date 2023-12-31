import { useEffect, useState } from "react";
import { fetchCourses } from "../services/CourseService";
import { Button, Card, Row , Col } from "react-bootstrap";

export function DashBoard(){
    const [course,setcourse]=useState([]);

    async function populateMachineState(){
        try{
            const data=await fetchCourses() 
            setcourse(data);
        } catch(error){
            console.log(error);
        } 
    }
    useEffect(()=>{
        populateMachineState();
    },[]);

    return (
        <Row xs={1} md={2} lg={3} xl={4} className="" style={{marginBottom:'160px'}} >
            {course.map((m) => (
                <Col key={m.id}>
                    <Card style={{ width: '18rem', margin: '10px', textAlign:'center' }} className="me-5 ms-5">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>
                                <h3>Title: {m.title}</h3>
                            </Card.Title>
                            <Card.Text>
                                <h5>Description: {m.description}</h5>
                                <h5>Duration: {m.duration} Weeks</h5>
                                <h6>Price: {m.price}</h6>
                            </Card.Text>
                            <Button variant="primary">Enroll Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
