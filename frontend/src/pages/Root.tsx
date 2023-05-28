import { Box, Button, Card } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Root = () => {
  return (
    <Box sx={{display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100vw',
    }}  >
        <h1>Main Page</h1>

    </Box>
  )
}

export default Root