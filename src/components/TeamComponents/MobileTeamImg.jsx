import React from 'react'

const MobileTeamImg = ({img,name,post,size}) => {
  return (
    <div className='flex flex-col gap-5 hover:shadow-blue-500'>
      <img className={`${size} rounded-full hover:scale-98 hover:opacity-70 hover:border-4 hover:border-blue-500 hover:bg- duration-500`} src={img} alt="" />
      <div className="flex flex-col justify-start gap-1.5">
        <p className='font-bold text-[0.6rem] text-blue-500'>{name}</p>
        <p className='text-[0.5rem] text-white'>{post}</p>
      </div>
    </div>
  )
}

export default MobileTeamImg
