import { Box, Button, Card } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100vw',
    }}  >
        <h1>Smart Booking</h1>
        <Box>
            <Button variant="contained" onClick={()=> navigate('/sign-up')} sx={{m: 1}}>sign up</Button>
            <Button variant="contained" onClick={()=> navigate('/sign-in')}>sign in</Button>
        </Box>
    </Box>
  )
}

export default Root