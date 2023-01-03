import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [search ,setSearch]=useState()
  return (
   <Paper
   component="form"
   sx={{borderRadius:20 ,
     border:"1px solid #e3e3e3",
     pl:2,
     boxShadow:'none',
     mr:{sm:5}
}}
   >
<input style={{border:'none' ,outline:'none'}} className='search-bar' placeholder='Search...'  onChange={(e)=>{console.log(e.target.value)}}/>
<IconButton >
    <Search/>
</IconButton>

   </Paper>
  )
}

export default SearchBar