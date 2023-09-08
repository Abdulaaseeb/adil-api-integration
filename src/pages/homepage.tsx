import React from 'react';
import ResponsiveAppBar from '../components/Navbar';
import {Routes , Route} from 'react-router-dom'
import { Box } from '@mui/material';
import SinglePage from './nestedPage/singlepage';
import HomePage from './nestedPage/mainpage';
export default function MainPage() {
  return (
    <div >

       <Box>
                <ResponsiveAppBar />
              
               
            </Box>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
             <Route path='singlepage/:id' element={<SinglePage/>}/>
        </Routes>
    </div>
  );
}


