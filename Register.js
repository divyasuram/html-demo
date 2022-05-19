import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function register() {
  return ( 
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <h1>Register</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br/>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br/>
      <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
      <br/>
      <TextField id="outlined-password-input" label=" Confirm Password" type="password" autoComplete="current-password"/>
      <br/>
      <Button variant="contained">Submit</Button>

    </Box>
  );
}
