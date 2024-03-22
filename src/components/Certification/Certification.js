import React from 'react'

import Card from 'react-bootstrap/Card';
import { Certifications } from '../../data/constant';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Certification = () => {
  return (
    <div className='sectionGap pb-5'>
        {/* <Container> */}
            <div className='text-center'>
                <h1 className='header1'>Certifications And Achivement</h1>
                <p className='peragraph'>I have worked on a wide range of projects. Here are some of my projects.</p>
            </div>

            <div className='mt-5'>
                <Row xs={1} md={4} className="g-4 px-5">
                    {Certifications.map((Certification, index) => (
                        <Col key={Certification.id}>
                            <Card className='border-0 shadow h-100'>
                                {/* <Card.Body className='card-hover'> */}
                                    <div className='rounded-3 p-2'>
                                        <Image
                                            src={Certification?.img}                                           
                                            height={300}
                                            // width={180}
                                            rounded
                                            fluid 
                                            className=''
                                        />
                                    </div>
                                    <Card.Title className='p-3'>
                                        {Certification.title}
                                    </Card.Title>
                                    {/* <Card.Text>
                                        {expert.desc}
                                    </Card.Text> */}
                                {/* </Card.Body> */}
                            </Card>
                        </Col>
                    ))}  
                </Row>   
            </div>
            
        {/* </Container> */}
        
        
    </div>
  )
}

export default Certification