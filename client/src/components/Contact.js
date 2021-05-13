import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import { WindupChildren, Pace } from 'windups'

const Contact = () => {



  return (
    <>
      <div className="project-header" id="contact">
        <Header as='h1' className="projectsheader">
          <Icon name='address card outline' />
CONTACT
        </Header>
      </div>
      <div className="contact-container">
        <div className="contact-buttons">
          <WindupChildren>
            <Pace ms={100}> 
              <h1>{'GET IN TOUCH...'}</h1>
            </Pace>
          </WindupChildren>
          <div className="each-contact">
            <Button circular color='grey' icon='mail outline' size='huge' className="each-button"/>
            <a href='mailto:karenjeetkaurp@gmail.com' className="contact-link">karenjeetkaurp@gmail.com</a>
          </div>
          <div className="each-contact">
            <Button circular color='grey' icon='twitter' size='huge' className="each-button"/>
            <a href='https://twitter.com/KarenKa30889409' className="contact-link"> @KarenKa30889409</a>
          </div>
          <div className="each-contact">
            <Button circular color='grey' icon='linkedin' size='huge'className="each-button"/>
            <a href='https://www.linkedin.com/in/karen-kaur-p/' className="contact-link">linkedin.com/in/karen-kaur-p</a>
          </div>
          <div className="each-contact">
            <Button circular color='grey' icon='github' size='huge'className="each-button"/>
            <a href='https://github.com/kkaur89' className="contact-link">github.com/kkaur89</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact