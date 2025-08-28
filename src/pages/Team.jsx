import React from 'react'
import { motion } from 'framer-motion'
import TeamHero from '../components/TeamComponents/TeamHero'
import TeamImg from '../components/TeamComponents/TeamImg'
import facultyTeam1 from '../assets/Images/TeamImages/facultyTeam_1.jpg'
import facultyTeam2 from '../assets/Images/TeamImages/facultyTeam_2.jpg'
import facultyTeam3 from '../assets/Images/TeamImages/facultyTeam_3.jpg'
import facultyTeam4 from '../assets/Images/TeamImages/facultyTeam_4.jpg'

const Team = () => {
    const facultyTeam = [
        {img:facultyTeam1,name:"Dr. Dheeraj Kumar Agarwal",post:"Branch Counsellor"},
        {img:facultyTeam2,name:"Dr. Atul Kumar",post:"Faculty Co-Coordinator (ECE)"},
        {img:facultyTeam3,name:"Dr. Vijay Bhaskar Semwal",post:"Faculty Co-Coordinator (CSE)"},
        {img:facultyTeam4,name:"Dr. Priyanka Paliwal",post:"Faculty Co-Coordinator (EE)"},
    ];
    return (
        <motion.div
        className='bg-gray-950 overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}>
                {/* hero section */}
            <TeamHero />

            {/* faculty team */}
            <motion.div className='mt-[5rem]'>
            <motion.h1
             className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl"
            >Faculty <span className='text-blue-600'>Team</span></motion.h1>
            <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-[4rem] justify-center items-center mt-[3rem] flex-wrap'>
                {facultyTeam.map((member,index)=>{
                    return <TeamImg key={index} img={member.img} name={member.name} post={member.post} width={`${window.innerWidth/4}`} height={`${window.innerWidth/4}`}/>
                })}
            </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Team
