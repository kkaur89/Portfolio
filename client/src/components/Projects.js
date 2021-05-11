/* eslint-disable react/display-name */
import React from 'react'
import { Tab, Image, Header, Icon, Divider, Modal, Button } from 'semantic-ui-react'

const Projects = () => {

  const [open, setOpen] = React.useState(false)
  const [openOne, setOpenOne] = React.useState(false)
  const [openTwo, setOpenTwo] = React.useState(false)
  const [openThree, setOpenThree] = React.useState(false)

  const panes = [
    { menuItem: 'FitBox', render: () => <Tab.Pane>
      <div className="image-container">
        <Divider horizontal>
          <Header as='h3'>
        Project Four: FitBox
          </Header>
        </Divider>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Image src="../assets/Screenshot 2021-05-11 at 16.07.27.png" alt="" size='massive' className="project-image"/>}
        >
        </Modal>
        <Divider horizontal>
          <Header as='h5'>
         React | Python | Django | PostgreSQL | Table Plus | Bootstrap 
          </Header>
        </Divider>
        <br />
      </div>
    </Tab.Pane> },
    { menuItem: 'Icelander', render: () => <Tab.Pane>
      <div className="image-container">
        <Divider horizontal>
          <Header as='h3'>
        Project Three: Icelander
          </Header>
        </Divider>
        <Modal
          onClose={() => setOpenOne(false)}
          onOpen={() => setOpenOne(true)}
          open={openOne}
          trigger={
            <Image src="../assets/Screenshot 2021-05-11 at 16.07.42.png" alt="" size='massive' className="project-image"/>}>
        </Modal>
        <Divider horizontal>
          <Header as='h5'>
        React | Node.js | MongoDB | Express | Insomnia | Bootstrap 
          </Header>
        </Divider>
      </div>
    </Tab.Pane> },
    { menuItem: 'Tipple Your Fancy?', render: () => <Tab.Pane>
      <div className="image-container">
        <Divider horizontal>
          <Header as='h3'>
        Project Two: Tipple Your Fancy?
          </Header>
        </Divider>
        <Modal
          onClose={() => setOpenTwo(false)}
          onOpen={() => setOpenTwo(true)}
          open={openTwo}
          trigger={
            <Image src="../assets/Screenshot 2021-05-11 at 16.08.09.png" alt="" size='massive' className="project-image"/>}>
        </Modal>
        <Divider horizontal>
          <Header as='h5'>
        React | Insomnia | Bulma
          </Header>
        </Divider>
      </div>
    </Tab.Pane> },
    { menuItem: 'Connect 4', render: () => <Tab.Pane>
      <div className="image-container">
        <Divider horizontal>
          <Header as='h3'>
        Project One: Connect 4
          </Header>
        </Divider>
        <Modal
          onClose={() => setOpenThree(false)}
          onOpen={() => setOpenThree(true)}
          open={openThree}
          trigger={
            <Image src="../assets/Screenshot 2021-05-11 at 16.07.57.png" alt="" size='massive' className="project-image"/>}>
        </Modal>
        <Divider horizontal>
          <Header as='h5'>
        Javascript | HTML | CSS
          </Header>
        </Divider>
      </div>
    </Tab.Pane> }
  ]

  return (
    <>
      <div className="project-header">
        <Header as='h1' className="projectsheader">
          <Icon name='laptop' />
          PROJECTS
        </Header>
      </div>
      <div className="tab-container">
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <div className="project-text">
                <p>{'FitBox is an app related to all things Health and Fitness. When logged in the user is able to browse a series of videos, recipes and articles.'}</p>
                <p>{'Each user will have their own profile page when successfully registered where they can then save content to their profile as well as follow other users.'}</p>
                <p>{'This was a pair coded project which was completed in 9 days. This project uses the Django rest Framework with React on the frontend.'}</p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
          Back to Image
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal
          onClose={() => setOpenOne(false)}
          onOpen={() => setOpenOne(true)}
          open={openOne}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <div className="project-text">
                <p>{'Icelander is an app where users can explore self-drive tours of the country.'}</p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpenOne(false)}>
          Back to Image
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal
          onClose={() => setOpenTwo(false)}
          onOpen={() => setOpenTwo(true)}
          open={openTwo}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <div className="project-text">
                <p>{'Tipple Your Fancy is an app that was build in 48 hours.'}</p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpenTwo(false)}>
          Back to Image
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal
          onClose={() => setOpenThree(false)}
          onOpen={() => setOpenThree(true)}
          open={openThree}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <div className="project-text">
                <p>{'This game is a modern spin on the classic game Connect 4.'}</p>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpenThree(false)}>
          Back to Image
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </>
  )
}
export default Projects