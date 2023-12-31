import React, { useState } from 'react';
import { Container, Row, Col, Image, Pagination, Button } from 'react-bootstrap';

function Courses() {
    const imageArray = [
        {
            id: 1,
            src: 'https://cdn.pwskills.com/assets/uploads/thumbnails/656f00f850c2449c5276c13e.jpg',
            alt: 'Image 1',
            courseName: 'C++ with DSA',
            instructor: 'Urvi Goel',
            startDate: "7 Feb 2024",
            price: '₹ 5999'
        },
        {
            id: 2,
            src: 'https://cdn.pwskills.com/assets/uploads/thumbnails/6569744750c244a030749278.png',
            alt: 'Image 2',
            courseName: 'Mastering Data Analytics',
            instructor: 'Vishwa Mohan',
            startDate: "15 Feb 2024",
            price: '₹ 12200'
        },
        {
            id: 3,
            src: 'https://cdn.pwskills.com/assets/uploads/thumbnails/6568179250c244fbec73aaf4.png',
            alt: 'Image 3',
            courseName: 'Full Stack Web Development',
            instructor: 'Vishwa Mohan',
            startDate: "30 Jan 2024",
            price: '₹ 14400'

        },
        {
            id: 4,
            src: 'https://cdn.pwskills.com/assets/uploads/thumbnails/6566ef9250c24422ac733e11.jpg',
            alt: 'Image 4',
            courseName: 'Master Generative AI: Data Science Course',
            instructor: 'Vishwa Mohan',
            startDate: "30 Jan 2024",
            price: '₹ 15000'
        },
        {
            id: 5,
            src: 'https://dgyugonj9a9mu.cloudfront.net/supreme_1_codehelp_5114b9ebd5.jpg',
            alt: 'Image 5',
            courseName: 'Data Structures & Algorithms Master Course',
            instructor: 'Vishwa Mohan',
            startDate: "1 Feb 2024",
            price: '₹ 14000'
        },
        {
            id: 6,
            src: 'https://codehelp.s3.ap-south-1.amazonaws.com/Web_Dev_670f900667.jpg', // Replace with your actual URL
            alt: 'Image 6',
            courseName: 'Web Development Bootcamp',
            instructor: 'Akhil Sharma',
            startDate: "5 Feb 2024",
            price: '₹ 1400'
        },
        {
            id: 7,
            src: 'https://dgyugonj9a9mu.cloudfront.net/Low_Level_Design_Supra_Batch_d3746a5a23.jpg', // Replace with your actual URL
            alt: 'Image 7',
            courseName: 'Low-Level Design Bootcamp',
            instructor: 'Akhil Sharma',
            startDate: "5 Feb 2024",
            price: '₹ 1000'
        },
        // {
        //     id: 8,
        //     src: 'https://shop.lakmesalon.in/cdn/shop/products/1_6f571f02-1f54-4725-9690-4972f15ddc43_300x.jpg?v=1623325701', // Replace with your actual URL
        //     alt: 'Image 8',
        //     prodName:'Moroccanoil Hydrating Shampoo 250ml',
        //     price: ' ₹ 2,340'
        // },
    ];

    const imagesPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = imageArray.slice(startIndex, endIndex);
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container className="w-100">
            <Row className="text-center">
                <Col xs={12} className="section-intro">
                    <h2 className='fw-bold' style={{ fontFamily: "Sedgwick Ave Display", paddingTop: '50px' }}>
                        What would you like to learn?
                    </h2>
                    <h3 className='fw-bold' style={{ fontFamily: "Sedgwick Ave Display", color: '#6674cc', paddingTop: '5px' }}>
                        Our Courses
                    </h3>

                </Col>
            </Row>
            <Row >
                {currentImages.map((image) => (
                    <Col key={image.id} md={4} lg={4} className="text-center bg-light rounded">
                        <Image
                            className="img-thumbnail mb-3 mt-2"
                            src={image.src}
                            alt={image.alt}
                            style={{ maxHeight: '300px' }}
                            fluid
                        />
                        <div clas>
                            <p className="fw-bold">{image.courseName}</p>
                            <p>Instructor: {image.instructor}</p>
                            <p>Start Date: {image.startDate}</p>
                            <p>Price: {image.price}</p>
                        </div>
                        <div>
                            <Button className='border-0 text-dark mb-3' style={{ backgroundColor: '#6674cc' }}>Enroll Now</Button>
                        </div>
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-4 d-flex justify-content-center">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    <Pagination.Next
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === Math.ceil(imageArray.length / imagesPerPage)}
                    />
                </Pagination>
            </div>
        </Container>
    );
}

export default Courses;
