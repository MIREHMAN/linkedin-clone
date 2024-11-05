import { DarkMode, Groups, Home, MonochromePhotos, NightShelter, Pages, Settings, Shop, Shop2 } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const ProfileCol = () => {
  return (
    <Box flex={1} sx={{display:{xs:'none', md:'block'}}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton comonent='a' href='#'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton comonent='a' href='#'>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton comonent='a' href='#'>
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton comonent='a' href='#'>
              <ListItemIcon>
                <Shop2 />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton comonent='a' href='#'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton comonent='a' href='#'>
              <ListItemIcon>
                <DarkMode/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
          
          </List>
          
    </Box>
  )
}

export default ProfileCol