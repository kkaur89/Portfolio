import React from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

const Navbar = () => {

  const state = { activeItem: 'About me' }


  const { activeItem } = state

  return (

    <Segment inverted >
      <Menu inverted pointing secondary icon='labeled' className="center" >
        <Menu.Item
          name='About Me'
          
        >
          <Icon name='user outline' />
          About Me
        </Menu.Item>
        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
        >
          <Icon name='laptop' />
          Projects
        </Menu.Item>
        <Menu.Item
          name='Experience'
          active={activeItem === 'Experience'}
        >
          <Icon name='file alternate outline' />
          Experience
        </Menu.Item>
        <Menu.Item
          name='Interests'
          active={activeItem === 'Interests'}>
          <Icon name='map outline' />
          Interests
        </Menu.Item>
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
        >
          <Icon name='address card outline' />
          Contact
        </Menu.Item>
      </Menu>
    </Segment>

  )
  

}
export default Navbar 