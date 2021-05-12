import React from 'react'
import { Grid, Header, Icon, Image } from 'semantic-ui-react'

const Interests = () => {
 
  

  return (
    <>
      <div className="project-header" id="interests">
        <Header as='h1' className="projectsheader">
          <Icon name='map outline' />
  INTERESTS
        </Header>
      </div>
      <div>
        <div className="interest-container">
          <Grid stackable columns={1} className="grid-container">
            <Grid.Column className="travelling">
              <Image src='../assets/travelling.png' size='big' floated='left'/>
            </Grid.Column>
            <Grid.Column className="travelling">
              <Image src='../assets/Screenshot 2021-05-12 at 18.39.03.png' size='big' floated='right'/>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </>
  )

}
export default Interests