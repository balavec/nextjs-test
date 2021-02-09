import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home'
import DescriptionIcon from '@material-ui/icons/Description'
import ShareIcon from '@material-ui/icons/Share'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

const Content = styled.div`
  height: 100%;
  width: ${props => props.drawerWidth}px;
  color: ${({ theme }) => theme.navFontColor};
  background-color: ${({ theme }) => theme.navBg};
`

const Span = styled.span`
  padding-bottom: 10px;
`

const StyledButton = styled(Button)`
`

const Icon = styled(SvgIcon)`
  color: ${({ theme }) => theme.navFontColor};
`

const UsedScans = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
`

const SideBarContent = ({drawerWidth}) => {
  return (
    <Content drawerWidth={drawerWidth}>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button color="red">
          <ListItemIcon>
            <Icon component={HomeIcon} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon component={DescriptionIcon} />
          </ListItemIcon>
          <ListItemText primary="All files" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon component={ShareIcon} />
          </ListItemIcon>
          <ListItemText primary="All files" />
        </ListItem>
      </List>
      <Divider />
      <UsedScans>
        <Span>
          25 / 100 Scans Used
        </Span>
        <StyledButton variant="outlined" color="primary">
          Primary
        </StyledButton>
      </UsedScans>
    </Content>
  )
}

SideBarContent.propsTypes = {
  drawerWidth: PropTypes.number,
}

export default SideBarContent
