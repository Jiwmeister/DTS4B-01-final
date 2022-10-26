import React from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <Box sx={{
      height: '83vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '30px',
        '& .MuiTextField-root': { my: 1, }
      }}>
        <Typography variant="h1" sx={{fontSize: '22px'}}>Login</Typography>
        <TextField id="username" label="Username" variant="outlined" />
        <TextField id="password" label="pasword" type="password" variant="outlined" />
        <Button variant="contained" sx={{backgroundColor: '#000', my: 1, '&:hover': {backgroundColor: '#4a4a4a'}}}>Login</Button>
        <Typography sx={{fontSize: '14px'}}>Don't have account? <Link to="/register">register now</Link> </Typography>
      </Box>
    </Box>
  )
}