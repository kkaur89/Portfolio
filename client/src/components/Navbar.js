import React from 'react'
import { createMedia } from '@artsy/fresnel'
import { Menu, Segment, Icon, Dropdown } from 'semantic-ui-react'

const Navbar = () => {

  const state = { activeItem: 'About me' }


  const { activeItem } = state

  const AppMedia = createMedia({
    breakpoints: {
      mobile: 300,
      tablet: 768,
      computer: 992,
      largeScreen: 1200,
      widescreen: 1920,
    },
  })
  const mediaStyles = AppMedia.createMediaStyle()
  
  const { Media, MediaContextProvider } = AppMedia

  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Segment inverted as={Media} at="mobile">
          <Dropdown
            item
            icon ='bars'
          >
            <Dropdown.Menu>
              <Dropdown.Item text='About'/>
              <Dropdown.Item text='Projects'/>
              <Dropdown.Item text='Experience'/>
              <Dropdown.Item text='Interests'/>
              <Dropdown.Item text='Contact'/>
            </Dropdown.Menu>
          </Dropdown>
        </Segment>
      </MediaContextProvider>
      <MediaContextProvider>
        <Segment inverted as={Media} greaterThanOrEqual="tablet">
          <Menu inverted pointing secondary icon='labeled' className="center" >
            <Menu.Item
              name='About'
          
            >
              <Icon name='user outline' />
          About
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
      </MediaContextProvider>
    </>
  )
  

}
export default Navbar 