import React from 'react'
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} p={2} sx={{position: 'sticky', background: '#000', top:0, justifyContent: 'space-between'}}>
      <Link to={"/"} style={{display:'flex',alignItems:'center', gap: '14px'}}>
        <img src={logo} alt='logo' height={45} />
        <Typography variant='h6' fontWeight={"bold"} color={"#FFF"}>Youtube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar