import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components';

function App() {
  return (
    <BrowserRouter>
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerms' element={<SearchFeed/>}/>
      </Routes>
      
    </Box>
    </BrowserRouter>
    
    
  );
}

export default App;
