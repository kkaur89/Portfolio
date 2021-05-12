import React from 'react'
import { Header, Icon, Grid, Image, Segment } from 'semantic-ui-react'

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
            <Segment>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}
export default Experience