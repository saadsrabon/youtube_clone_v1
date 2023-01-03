import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'


const NavBar = () => {
  return (
    // Using Stack for one dimensional Lines
    <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{positon:'sticky' ,background:'#ffff', top:"0" ,justifyContent:'space-between'}}
    >
        <Link>
        <img src='https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png' alt="logo" height={45} />
        </Link>
        {/* seacrhBar */}
        <SearchBar/>
     

    </Stack>
  )
}

export default NavBar