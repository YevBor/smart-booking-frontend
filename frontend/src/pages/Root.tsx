import { Box, Button, Card } from '@mui/material'
import React from 'react'

const Root = () => {
  return (
    <Box sx={{display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100vw',
    }}  >
        <h1>Smart Booking</h1>
        <Box>
            <Button variant="contained">sign up</Button>
            <Button variant="contained">sign in</Button>
        </Box>
    </Box>
  )
}

export default Root