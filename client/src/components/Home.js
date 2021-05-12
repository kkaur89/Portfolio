import React from 'react'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import { Icon } from 'semantic-ui-react'
import { WindupChildren, Pace } from 'windups'
import Projects from './Projects'
import Experience from './Experience'
import Interests from './Interests'
import Contact from './Contact'


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
      <div className="aboutpage">
        <AboutMe />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="experience">
        <Experience />
      </div>
      <div className="interests">
        <Interests />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </>
  )


}
export default Home