import React from 'react'
import '../../styles/HomePage.css'
import Image from 'react-bootstrap/Image';
import svgImg from '../../Image/1166086_ORSJP41.svg'

const AboutMe = () => {
  return (
    <div className='bg-white'>
        <div className='container sectionGap'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h6 className='header1 fw-bold'>About Me </h6>
                    <p className='peragraph'>Meet Jonaki Khanam, a skilled Certified Digital Marketer and SEO Specialist. I strongly believe in my customers’ success, as it forms the foundation of my own success.

With 05 years of experience in the digital industry, I have the technical ability to handle a wide range of tasks efficiently with Digital Marketer, SEO, Technical SEO, Backlinks, Email Marketing, and any Social Media Management. I am the founder of Upturn Idea, a successful digital marketing agency. With a passion for optimizing online presence, I can technically handle anything related to transforming businesses through strategic marketing and effective SEO strategies. I can assist you in expanding your business based on your needs, and objectives and reach your target audience effectively. I will manage your business very smoothly with my Expertise.</p>
                </div>
                
                <div className='col-sm-12 col-md-6 text-center position-relative'>
                    <Image src={svgImg} alt="SVG Image" className='' />
                    <Image src="https://i.ibb.co/sjpHqBz/jonaki-khanam.png" className='position-absolute top-50 start-50 translate-middle' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe