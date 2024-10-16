import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { TbBrandBitbucket } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";
import { assets } from '../assets/assets';
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";



function Header() {
  let[showMenuBox,setShowMenuBox]=useState(false)
  let showbtn=()=>{
    setShowMenuBox(!showMenuBox)

  }

  return (
    <>
     <div className={showMenuBox==true ?"active":"canvas"}>
      <div className=" w-[400px] bg-black h-screen ">
      <div className=" relative">


      <div className="pl-8 mt-24 bg-[#1d1d1d] py-3  rounded-lg">
        <h1 className='font-bold pb-2 text-white'>Create your first playlist</h1>
        <p className='text-white'>it's easy,we'll help you</p>
        <button className='px-3 py-1 mt-5 bg-white text-black rounded-full font-bold'>Create Playlist</button>
      </div>
      <div className="pl-8 bg-[#1d1d1d] py-3  rounded-lg mt-4">
        <h1 className=' text-white font-bold pb-2'>let's find some podcasts to follow</h1>
        <p className='text-white '>we'll keep you updated on new episodes</p>
        <button className='px-3 py-1 mt-5 bg-white text-black rounded-full font-bold'>Browse poadcasts</button>
      </div>

      <div className="flex-col text-[30px] font-bold text-white mt-6 ms-2">
          <p>PoPular Artists</p>
          <p>Popular Albums</p>
          <p>Pipular Radio</p>
          <p>Deep Song</p>
          <p>Top Song</p>
      </div>
      </div>

      </div>
    </div>
    <section className='max-w-100%'>
      <nav className='max-w-[1400px] mx-auto py-3 flex justify-between px-[14px]  '>
        <aside>
          <figure>
            <img src={assets.logo} className='w-[35px] cursor-pointer' alt="" />
          </figure>
        </aside>
        <aside className=' lg:inline-flex xs:hidden '>
          <div className="flex gap-[10px]">
          <MdHomeFilled className='bg-[white]/15 text-white w-12 h-12 rounded-full p-2' />
            <div className="flex bg-[white]/15 text-white px-2 py-0 rounded-full shadow-lg items-center">
            <IoSearchOutline className='text-[30px]' />
            <input type="text" className='bg-transparent  w-[450px]  placeholder:text-white placeholder:ps-2 outline-none ' placeholder='What do you want to play?' autoFocus/> <span className='text-gray-400'>|</span> &nbsp; &nbsp;
            <TbBrandBitbucket className='text-[25px] pr-1 text-gray-300' />
            </div>
            </div>
          </aside>
        <aside className='flex gap-[20px] lg:inline-flex xs:hidden '>
          <button className='text-gray-300 font-semibold'>Sign Up</button>
          <button className='text-black bg-white w-[100px] rounded-full font-bold'>Log In</button>
        </aside>
    
        <aside className=' flex  gap-[20px] lg:hidden'>
        <button className='text-black bg-white w-[120px] rounded-full font-bold md:hidden  py-2'>Open App</button>
        <HiBars3BottomRight className='text-white text-[40px] lg:hidden xs:inline-flex ' onClick={showbtn} />
           </aside>
       
      </nav>
    </section>

   
    
  </>
    
  )
}

export default Header
