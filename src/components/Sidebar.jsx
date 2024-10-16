import React from 'react'
import { MdLibraryMusic } from "react-icons/md";

import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

function Sidebar() {
  return (
    
    <div className='w-[23%] bg-[#090909] px-3 rounded-lg h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className="">
      <div className=" py-3 rounded flex flex-col justify-around ">
        <div className="flex items-center gap-3 pl-8 cursor-pointer relative">
        <BiLibrary className='text-[25px]' />
       <p>Your library</p>
       <FaPlus className='text-[23px] absolute right-2 ' />   
        </div>
      </div>

      <div className="pl-8 bg-[#1d1d1d] py-3  rounded-lg">
        <h1 className='font-bold pb-2'>Create your first playlist</h1>
        <p>it's easy,we'll help you</p>
        <button className='px-3 py-1 mt-5 bg-white text-black rounded-full font-bold'>Create Playlist</button>
      </div>
      <div className="pl-8 bg-[#1d1d1d] py-3  rounded-lg mt-4">
        <h1 className='font-bold pb-2'>let's find some podcasts to follow</h1>
        <p>we'll keep you updated on new episodes</p>
        <button className='px-3 py-1 mt-5 bg-white text-black rounded-full font-bold'>Browse poadcasts</button>
      </div>
      </div>
    </div>
  

  )
}

export default Sidebar
