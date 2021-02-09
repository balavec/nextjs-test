import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar'
import SideBar from './SideBar'

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <>
      <CssBaseline />
      <NavBar drawerWidth={240} handleDrawerToggle={handleDrawerToggle} />
      <SideBar drawerWidth={240} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
    </>
  )
}

export default Navigation
