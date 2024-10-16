import React from 'react'
import { assets } from '../assets/assets';
import { Route, Routes } from 'react-router-dom';
import Displayhome from '../components/Displayhome';

function Player() {
  return (
    
    <div className='w-[96%] xs:mx-auto mx-0  px-6 pt-4 rounded bg-[#161616] text-white overflow-auto lg:w-[75%] lg:ml-0'>
     <Routes>
      <Route path='/' element={<Displayhome/>}/>
     </Routes>
      
      
    </div>
 
  )
}

export default Player
