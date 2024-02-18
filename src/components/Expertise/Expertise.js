import React from 'react'
import Card from 'react-bootstrap/Card';
import { Experts } from '../../data/constant';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Expertise = () => {
  return (
    <div className='sectionGap bg-light pb-5'>
        <Container>
            <div className='text-center pt-5'>
                <h1 className='header1'>Digital Marketing Expertise</h1>
                <p className='peragraph'>Here are some of my skills on which I have been working on for the past 3 years.</p>
            </div>

            <div className='mt-5'>
                <Row xs={1} md={3} className="g-4">
                    {Experts.map((expert, index) => (
                        <Col key={expert.id}>
                            <Card className='border-0 shadow'  style={{ width: '25rem' }}>
                                <Card.Body className='text-center card-hover'>
                                    <div className='my-3'>
                                        <Image
                                            src={expert?.img} 
                                            roundedCircle
                                            height={120}
                                            width={120} 
                                            className='bg-light p-3'
                                        />
                                    </div>
                                    <Card.Title>
                                        {expert.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {expert.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}  
                </Row>   
            </div>
            
        </Container>
        
        
    </div>
  )
}

export default Expertise