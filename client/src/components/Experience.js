import React from 'react'
import { Header, Icon, Grid, Image, Segment, Divider } from 'semantic-ui-react'

const Experience = () => {



  return (
    <>
      <div className="project-header" id="experience">
        <Header as='h1' className="projectsheader">
          <Icon name='file alternate outline' />
      EXPERIENCE
        </Header>
      </div>
      <div className="experience-grids">
        <Grid stackable columns={3}>
          <Grid.Column>
            <Segment className="experience-container">
              <Image src='../assets/unnamed-2.png' className="ga-image" />
              <Divider horizontal className="experience-divider">
                <Header as='h5'>
          SOFTWARE ENGINEERING IMMERSIVE
                </Header>
              </Divider>
              <h5>FEB - APR 2021 | LONDON</h5>
              <p>{'A 12 week immersive course completed remotely with the use of Zoom and Slack. Covering the key fundamentals of full-stack development focusing on JavaScript, HTML, CSS, React on the frontend and Node.js, Python and Django in the backend.'}</p>
              <p>{'The course consisted of daily stand-ups, pair coding, and four solo/group projects.'}</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="experience-container">
              <Image src='../assets/ralph-lauren-customer-page_intro.png' className="experience-image"/>
              <Divider horizontal>
                <Header as='h5'>
          ASSOCIATE BUYER
                </Header>
              </Divider>
              <h5>2014 - 2020 | LONDON</h5>
              <p>{'Curating commercial apparel packages each season to drive departmental sales and meet/exceed business KPIs. Working across multiple sub brands, which each had their own critical path.'}</p>
              <p>{'Strategic financial planning behind each SKU to maximise potential, minimise discount and grow topline average unit retail. Also responsible for leading and coaching a team of 4, responsible for their everyday tasks and career development.'}</p>
              <p>{'Collaboration across internal counterparts within the UK, but also key partnerships with Global US and APAC partners to ensure collections are coherent as a global brand and inline with global strategies.'}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="experience-container">
              <Image src='../assets/ralph-lauren-customer-page_intro.png' className="experience-image"/>
              <Divider horizontal>
                <Header as='h5'>
          ASSISTANT BUYER 
                </Header>
              </Divider>
              <h5>2012 - 2014 | LONDON</h5>
              <p>{'Assisting my buyer with creating commercial packages across multiple apparel categories.'}</p>
              <p>{'Coaching and managing entry-level assistants, helping to prioritise day to day tasks as well as develop them for the next level. Ensuring deliveries were being tracked and on time, purchase orders were being raised correctly, and sample management.'}</p>
              <p>{'Offering solutions to any problems that occur, liaising with all the relevant departments before proposing to the line manager.'}</p>
              <br/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}
export default Experience