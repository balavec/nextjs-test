import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'


const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.navFontColor};
  @media screen and (min-width: 600px) {
    width: calc(100% - ${props => props.width}px);
    margin-left: ${props => props.width};
  }
`

const StyledIconButton = styled(IconButton)`
  margin-right: 20px;
  @media screen and (min-width: 600px) {
    display: none;
  }
`

const NavBar = ({handleDrawerToggle, drawerWidth}) => {
  const {value, toggle} = useDarkMode()
  const handleChange = () => {
    toggle()
  }

  return (
    <StyledAppBar width={drawerWidth} position="fixed">
      <Toolbar>
        <StyledIconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </StyledIconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
        <Switch
          checked={value}
          onChange={handleChange}
          color="default"
        />
      </Toolbar>
    </StyledAppBar>
  )
}

NavBar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  drawerWidth: PropTypes.number
}

export default NavBar
