import { Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constants'
const Sidebar = () => {
  return (
    <Stack sx={{overflowY:'auto' ,height:{sx:"auto", md:'95%' ,flexDirection:{md:'column'}}}}>
        {
            categories.map((catagory) => (<button className='category-btn'>
                <span>{catagory.icon}</span>
                <span>{catagory.name}</span>
            </button>))
        }
    </Stack>
  )
}

export default Sidebar