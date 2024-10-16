import React from 'react'

function Song({images,name,id,desc}) {
  return (
    <div>
       <div className='min-w-[180px] rounded  p-2 px-4 cursor-pointer hover:bg-[white]/10'>
      <img className='rounded-lg  ' src={images} alt="" />
      <p className='font-semibold mt-2 mb-1'>{name}</p>
      <p className='text-[white]/70 font-normal '>{desc.slice(0,35)}</p>
      
    </div>
    </div>
  )
}

export default Song
