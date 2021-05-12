import React from 'react'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import { Icon } from 'semantic-ui-react'
import { WindupChildren, Pace } from 'windups'
import Projects from './Projects'
import Experience from './Experience'


const Home = () => {



  return (
    <>
      <div className="Home">
        <div className="home-text">
          <WindupChildren>
            <Pace ms={100}> <h1>{'KAREN KAUR'}</h1></Pace>
            <br />
            <Pace ms={100}> <h2>{'FULL STACK SOFTWARE ENGINEER'}</h2></Pace>
          </WindupChildren>
          <br />
          <Icon name='angle double down' size='huge' className="arrow"/>
        </div>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="about">
        <AboutMe />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="experience">
        <Experience />
      </div>
    </>
  )


}
export default Home