import React from 'react'

const MobileTeamImg = ({img,name,post}) => {
  
  return (
    <div className='flex flex-col gap-5 hover:shadow-blue-500 mx-4'>
      <img className={`w-24 h-24 sm:w-55 sm:h-55 rounded-full border-2 border-gray-700 p-1 hover:scale-95 hover:opacity-60 hover:border-transparent duration-500`} src={`${img}`} alt="" />
      <div className="flex flex-col justify-start gap-1.5">
        <p className='font-bold text-[0.7rem] sm:text-[1.3rem] text-blue-500'>{name}</p>
        <p className='text-[0.5rem] sm:text-[1rem] text-white'>{post}</p>
      </div>
    </div>
  )
}

export default MobileTeamImg
