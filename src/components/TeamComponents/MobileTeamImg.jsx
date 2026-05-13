import React from 'react'
import {useSelector} from 'react-redux'

const MobileTeamImg = ({ img, name, post, membershipNumber }) => {

 const mode = useSelector((state) => state.theme.mode);
return (
  <div className="flex flex-col justify-center items-center gap-2 w-full">
    <img
      className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 border-2 object-cover aspect-square
        transition duration-500 ease-in-out
        hover:scale-105 hover:brightness-125 hover:contrast-110 hover:saturate-125 
        ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`}
      src={img}
      alt={`${name} - ${post}`}
    />
    <div className="flex flex-col justify-start gap-1">
      <p className="font-bold text-[0.7rem] sm:text-[1.3rem] text-blue-500 text-center">{name}</p>
      <p
        className={`text-[0.5rem] sm:text-[1rem] text-center ${
          mode === "dark" ? "text-white" : "text-black"
        }`}
      >
        {post}
      </p>
      {membershipNumber && (
        <p
          className={`text-[0.4rem] sm:text-[0.8rem] font-medium text-center ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Membership No - {membershipNumber}
        </p>
      )}
    </div>
  </div>
);

}

export default MobileTeamImg
