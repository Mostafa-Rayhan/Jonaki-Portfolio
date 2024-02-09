import React from 'react'
import {Bio} from "../../data/constant"
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import '../../styles/HomePage.css'
import Image from 'react-bootstrap/Image';

const HeroSection = () => {

    
  return (
    <div className='bg-white'>
        <div className='container sectionGap'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h6 className='header1 fw-bold'>Hi, I am <br /> {Bio.name}</h6>
                    <div className='typing d-flex fw-bold'>
                        I am a 
                        <span className='typingSpan mx-2'>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        
                    </div>
                    <p className='peragraph'>{Bio.description}</p>
                    <Button variant="primary" size="lg" className=''>Check Resume</Button>
                </div>
                
                <div className='col-sm-12 col-md-6 text-center'>
                    <Image src="https://i.ibb.co/sjpHqBz/jonaki-khanam.png" className='' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection