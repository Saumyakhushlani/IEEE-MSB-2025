import React from 'react'
import TeamImg1 from '../assets/teamImg1.jpg'
import TeamImg2 from '../assets/teamImg2.jpeg'
import TeamImg3 from '../assets/teamImg3.jpeg'
import TeamImg4 from '../assets/teamImg4.jpg'
import TeamImg5 from '../assets/teamImg5.jpg'
import TeamImg6 from '../assets/teamImg6.jpg'
import TeamImg7 from '../assets/teamImg7.jpg'
import TeamImg8 from '../assets/teamImg8.jpg'
import TeamImg9 from '../assets/teamImg9.jpg'
import TeamImg10 from '../assets/teamImg10.jpeg'
import TeamImg11 from '../assets/teamImg11.jpeg'
import TeamImg12 from '../assets/teamImg12.jpeg'
import TeamImg13 from '../assets/teamImg13.jpeg'
import TeamImg14 from '../assets/teamImg14.jpg'
import TeamImg15 from '../assets/teamImg15.jpeg'
import TeamImg16 from '../assets/teamImg16.jpg'
import TeamImg17 from '../assets/teamImg17.jpeg'
import TeamImg18 from '../assets/teamImg18.jpg'
import MobileTeamImg from './MobileTeamImg'

const MobileTeam = () => {
  return (
    <div className='p-[2rem] bg-gray-950 flex flex-col items-center'>
      <h3 className='text-white text-4xl mb-[3rem] font-semibold'>Our <span className='text-blue-400'>Team</span></h3>
      <div className='grid grid-cols-2 gap-4'>
        <MobileTeamImg img={TeamImg1} name="Suryansh Sarathe" post="Web Developement Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg2} name="Aaditya Jain" post="Photography & Video Editing Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg3} name="Priyansh Mathur" post="Membership Drive Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg4} name="Tanvi Sundarkar" post="Sponsorship & Marketing Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg5} name="Parth Arora" post="Pr & Promotion Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg6} name="Rahul Agarwal" post="Event Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg7} name="Saurabh Yadav" post="General Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg8} name="Dhanvi Shah" post="WIE Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg9} name="Arunima Pathak" post="Aarambh Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg10} name="Ayush Kumar" post="Finance Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg11} name="Prerna Chaurasiya" post="General Affairs Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg12} name="Surbhi Sreejith" post="Management Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg13} name="Rishabh Sonkar" post="Student Engagement and Welfare Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg14} name="Abhishek Yadav" post="Logistics & Operations Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg15} name="Akshita Sahu" post="Content & Communication Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg16} name="Hemant Rajput" post="Media and publicity secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg17} name="Pratham Raghav" post="Logistics & Operations Secretary" size="w-[125px] h-[125px]" />
        <MobileTeamImg img={TeamImg18} name="Aman Choudhary" post="Joint Secretary CSE" size="w-[125px] h-[125px]" />
      </div>
    </div>

  )
}

export default MobileTeam
