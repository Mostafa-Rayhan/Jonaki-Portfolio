import React from 'react'
import {Bio} from "../../data/constant"
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import '../../styles/HomePage.css'
import Image from 'react-bootstrap/Image';
// import svgImg from '../../Image/1166086_ORSJP41.svg'

const HeroSection = () => {

    
  return (
    <div className='heroBg'>
        <div className='container sectionPad'>
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
                    <Button variant="primary" size="lg">Check Resume</Button>
                </div>
                
                <div className='col-sm-12 col-md-6 text-center position-relative'>
                    {/* <Image src={svgImg} alt="SVG Image" className='' /> */}
                    <Image src="https://i.ibb.co/sjpHqBz/jonaki-khanam.png" className='position-absolute top-50 start-50 translate-middle border1 border-primary bg-primary' roundedCircle />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection