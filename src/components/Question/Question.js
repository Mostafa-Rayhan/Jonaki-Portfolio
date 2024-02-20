import React from 'react'
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { Questions } from '../../data/constant';

const Question = () => {
  return (
    <div className='sectionGap pb-5'>
        <Container>
        <div className='text-center'>
            <h1 className='header1'>Frequently Ask Questions</h1>
            <p className='peragraph'>I have worked on a wide range of projects. Here are some of my projects.</p>
        </div>
        <div className='mt-5'>
            {Questions.map((question) => (
            <Accordion 
                className='p-2 card  border-0 m-3 rounded-4' 
                key={question.id} 
                defaultActiveKey={1} 
                flush
                >
                <Accordion.Item eventKey={question.id}>
                    <Accordion.Header className='fs-2 fw-bold'>
                        {question.title}
                    </Accordion.Header>
                    <Accordion.Body className=''>
                        {question.desc}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            ))}  
        </div>
        </Container>
    </div>
  )
}

export default Question