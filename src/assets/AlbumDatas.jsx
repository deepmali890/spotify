import React from 'react'

function AlbumDatas({images,name,id,desc}) {
  return (
    <div className='min-w-[180px]  p-2 px-4 rounded-lg cursor-pointer hover:bg-[white]/10'>
      <img className='rounded-full ' src={images} alt="" />
      <p className='font-semibold mt-2 mb-1'>{name}</p>
      <p className='text-[white]/70 font-normal'>{desc}</p>
      
    </div>
  )
}

export default AlbumDatas


