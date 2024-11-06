import React from 'react'
import { IconBox } from './Navbar'
import { Badge } from '@mui/material'

function Notifications() {
  return (
    <IconBox> 
    <Badge badgeContent={4} variant="small" color="secondary">
        <Notifications/>
    </Badge>
</IconBox>
  )
}

export default Notifications