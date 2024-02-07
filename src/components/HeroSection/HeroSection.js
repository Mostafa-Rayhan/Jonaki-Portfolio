import React from 'react'
import {Bio} from "../../data/constant"
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';


const HeroSection = () => {

    
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 mt-5'>
                    <h6>Hi, I am <br /> {Bio.name}</h6>
                    <div>
                        I am a
                        <Typewriter
                            options={{
                                strings: Bio.roles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p>{Bio.description}</p>
                    <Button variant="primary">Check Resume</Button>
                </div>
                
                <div className='col-sm-12 col-md-6'>img</div>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection