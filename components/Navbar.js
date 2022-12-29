import {useState, useEffect} from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function Navbar() {

    return <AppBar position="relative" sx={{mb: '1rem'}}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Ameya
      </Typography>

    </Toolbar>
  </AppBar>
}