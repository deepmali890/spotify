import { useState } from 'react'

import './App.css'


import Header from './components/header'
import Sidebar from './components/Sidebar'
import Player from './assets/player'


function App() {

  return (
    <>
   <Header/>

   <div className="h-[90%] max-w-[1400px] mx-auto flex gap-2 ">
    <Sidebar/>
    <Player/>
   </div>
  
    </>
  )
}

export default App
