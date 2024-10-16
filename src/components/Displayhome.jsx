import React from 'react'
import { albumData, Popular, radio, chart, Zzzzzzz } from '../assets/assets'
import AlbumDatas from '../assets/AlbumDatas'
import Song from '../assets/Song'

function Displayhome() {
  return (
    <div>
         <div className="px-[10px] flex gap-[10px] ">
        <button className='px-4 mt-2 cursor-pointer py-1 text-black rounded-full font-semibold bg-white'>ALL</button>
        <button className='px-4 mt-2 cursor-pointer py-1 text-white hover:bg-[white]/10 rounded-full font-semibold '>Music</button>
        <button className='px-4 mt-2 cursor-pointer py-1 text-white hover:bg-[white]/10 rounded-full font-semibold '>Poadcast</button>
      </div>
      {/* artists start */}
      <div className="flex justify-between px-[10px] mt-4 ">
        <h3 className='font-semibold text-[25px] hover:underline cursor-pointer'>Popular artists</h3>
        <button className='cursor-pointer'>Show all</button>
      </div>
     
      <div className="my-5 font-bold flex items-center overflow-auto ">
        {albumData.map((v,i)=>(<AlbumDatas key={v} name={v.name} images={v.images} desc={v.desc}/>))}
      </div>
      {/* artists end */}


      {/* albums start */}
      <div className="flex justify-between px-[10px] mt-7 ">
        <h3 className='font-semibold text-[25px] hover:underline cursor-pointer'>Popular Albums</h3>
        <button className='cursor-pointer'>Show all</button>
      </div>
      <div className="my-5 font-bold flex items-center overflow-auto ">
        {Popular.map((v,i)=>(<Song key={v} name={v.name} images={v.images} desc={v.desc}/>))}
      </div>
      {/* albums end */}


      {/* radio start */}
      <div className="flex justify-between px-[10px] mt-7 ">
        <h3 className='font-semibold text-[25px] hover:underline cursor-pointer'>Popular Radio</h3>
        <button className='cursor-pointer'>Show all</button>
      </div>
      <div className="my-5 font-bold flex items-center overflow-auto ">
        {radio.map((v,i)=>(<Song key={v}  images={v.images} desc={v.desc}/>))}
      </div>
      {/* radio end */}


      {/* chart start */}
      <div className="flex justify-between px-[10px] mt-7 ">
        <h3 className='font-semibold text-[25px] hover:underline cursor-pointer'>Popular Radio</h3>
        <button className='cursor-pointer'>Show all</button>
      </div>
      <div className="my-5 font-bold flex items-center overflow-auto ">
        {chart.map((v,i)=>(<Song key={v}  images={v.images} desc={v.desc}/>))}
      </div>
      {/* chart end */}

        {/* Zzzzz start */}
        <div className="flex justify-between px-[10px] mt-7 ">
        <h3 className='font-semibold text-[25px] hover:underline cursor-pointer'>Popular Radio</h3>
        <button className='cursor-pointer'>Show all</button>
      </div>
      <div className="my-5 font-bold flex items-center overflow-auto ">
        {Zzzzzzz.map((v,i)=>(<Song key={v}  images={v.images} desc={v.desc}/>))}
      </div>    WQDQ 2 2EQD  R
      {/* Zzzzz end */}

    </div>

  )
}

export default Displayhome
