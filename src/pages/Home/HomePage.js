import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Expertise from '../../components/Expertise/Expertise'
import Project from '../../components/Project/Project'
import Question from '../../components/Question/Question'

const Home = () => {
  return (
      <div>
        <HeroSection />
        <Expertise />
        <Project />  
        <Question />
      </div>   
  )
}

export default Home

