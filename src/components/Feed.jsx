import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:'column' ,md:'row'}}} >
      <Box sx={{height:{sx:'auto' ,md:"92vh"}, borderRight:'1px solid #3d3d3d',px:{sx:0 ,md:2}}}>
     <Sidebar/>
     <Typography variant='body2'>Copyright 2023 By Saad Srabon</Typography>
      </Box>
    </Stack>
  )
}

export default Feed