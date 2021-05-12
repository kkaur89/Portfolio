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
              <a href='#about'>
                <Dropdown.Item text='About'style={{ color: 'black' }}/>
              </a>
              <a href='#projects'>
                <Dropdown.Item text='Projects' style={{ color: 'black' }}/>
              </a>
              <a href='#experience'>
                <Dropdown.Item text='Experience' style={{ color: 'black' }}/>
              </a>
              <a href='#interests'>
                <Dropdown.Item text='Interests' style={{ color: 'black' }}/>
              </a>
              <a href='#contact'>
                <Dropdown.Item text='Contact' style={{ color: 'black' }}/>
              </a>
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
              <a href='#about'>About</a>
            </Menu.Item>
            <Menu.Item
              name='Projects'
              target='_blank'
              active={activeItem === 'Projects'}
            >
              <Icon name='laptop' />
              <a href='#projects'>Projects</a>
            </Menu.Item>
            <Menu.Item
              name='Experience'
              target='_blank'
              active={activeItem === 'Experience'}
            >
              <Icon name='file alternate outline' />
              <a href='#experience'>Experience</a>
            </Menu.Item>
            <Menu.Item
              name='Interests'
              target='_blank'
              active={activeItem === 'Interests'}>
              <Icon name='map outline' />
              <a href='#interests'>Interests</a>
            </Menu.Item>
            <Menu.Item
              name='Contact'
              target='_blank'
              active={activeItem === 'Contact'}
            >
              <Icon name='address card outline' />
              <a href='#contact'>Contact</a>
            </Menu.Item>
          </Menu>
        </Segment>
      </MediaContextProvider>
    </>
  )
  

}
export default Navbar 