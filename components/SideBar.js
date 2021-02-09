import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import SideBarContent from './SideBarContent'

const Nav = styled.nav`
  @media screen and (min-width: 600px) {
    width: ${props => props.drawerWidth}px;
    flex-shrink: 0;
  }
`

const SideBar = ({mobileOpen, window, handleDrawerToggle, drawerWidth}) => {

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Nav drawerWidth={drawerWidth} aria-label="mailbox folders">
      <Hidden smUp>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SideBarContent drawerWidth={drawerWidth} />
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          open
        >
          <SideBarContent drawerWidth={drawerWidth} />
        </Drawer>
      </Hidden>
    </Nav>
  )
}

SideBar.propTypes = {
  window: PropTypes.func,
  mobileOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  drawerWidth: PropTypes.number,
};

export default SideBar
