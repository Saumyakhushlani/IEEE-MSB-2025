import React from 'react'
import { motion } from 'framer-motion'
import TeamHero from '../components/TeamComponents/TeamHero'
import TeamImg from '../components/TeamComponents/TeamImg'
import MobileTeamImg from '../components/TeamComponents/MobileTeamImg'

const Team = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,   // delay between children
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

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
            <motion.div className='mt-[5rem] mb-[4rem]'>
                <motion.h1
                    className="text-center mb-8 text-white font-bold text-2xl sm:text-4xl md:text-5xl"
                >Faculty <span className='text-blue-600'>Team</span></motion.h1>

                {/* All the images */}
                <section className="w-full">
                    {/* Desktop grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:grid grid-cols-4 gap-6">
                        <motion.div variants={item}><TeamImg img='/public/Dheeraj_Agrawal_sir.jpg' name="Dr. Dheeraj Kumar Agarwal" post="Branch Counsellor" /> </motion.div>
                        <motion.div variants={item}><TeamImg img='/public/VijayBhaskarSemwal.jpg' name="Dr. Vijay Bhaskar Semwal" post="Faculty Co-Coordinator (CSE)" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/priyankapaliwal.jpg' name="Dr. Priyanka Paliwal" post="Faculty Co-Coordinator (EE)" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Dr.Atul.Kumar.jpg' name="Dr. Atul Kumar" post="Faculty Co-Coordinator (ECE)" /></motion.div>
                    </motion.div>

                    {/* Mobile + Tablet grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 gap-4 md:hidden">
                        <motion.div variants={item}><MobileTeamImg img='/public/Dheeraj_Agrawal_sir.jpg' name="Dr. Dheeraj Kumar Agarwal" post="Branch Counsellor" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/VijayBhaskarSemwal.jpg' name="Dr. Vijay Bhaskar Semwal" post="Faculty Co-Coordinator (CSE)" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/priyankapaliwal.jpg' name="Dr. Priyanka Paliwal" post="Faculty Co-Coordinator (EE)" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Dr.Atul.Kumar.jpg' name="Dr. Atul Kumar" post="Faculty Co-Coordinator (ECE)" /></motion.div>
                    </motion.div>
                </section>
            </motion.div>

            {/* final year team */}
            <motion.div className='mt-[5rem] mb-[4rem]'>
                <motion.h1
                    className="text-center mb-8 text-white font-bold text-2xl sm:text-4xl md:text-5xl"
                >Final <span className='text-blue-600'>Year</span></motion.h1>

                {/* All the images */}
                <section className="w-full">
                    {/* Desktop grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:grid grid-cols-4 gap-6">
                        <motion.div variants={item}><TeamImg img='/public/vedant.jpg' name="Vedant Jaiswal" post="Chairperson" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Yashika.jpg' name="Yashika Lawani" post="Vice Chair Admin" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/vvk.jpg' name="Vivek Kumar" post="Vice Chair Finance" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Prachi Agarwal.jpg' name="Prachi Agarwal" post="WIE Chair" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/ARYAN.jpg' name="Aryan Saxena" post="Aarambh Coordinator" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/priyanshi_khandelwal.jpg' name="Priyanshi Khandelwal" post="Student's Convener" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Tanushree.jpg' name="Tanushree Dhote" post="Event Coordinator" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/PriyanshiRana.jpg' name="Priyanshi Rana" post="Head-General Affairs" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/shivanimam.jpg' name="Shivani Gupta" post="Head-Management" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/anshul.jpg' name="Anshul Sharma" post="Head-Student Engagement & Welfare" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/amanmittal.jpg' name="Aman Mittal" post="Head-Sponsorship & Marketing" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Deependra.jpg' name="Deependra Yadav" post="Head-PR & Promotions" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/jatin.jpg' name="Jatin Chandel" post="Head-Web Developement" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Grv.jpg' name="Gaurav Barwal" post="Head-Logistics and Operations" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/naincy priya.jpg' name="Naincy Priya" post="Head-Media & Publicity" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Shristi .jpg' name="Shristi Saxena" post="Head-Content & Communication" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/vivek.jpg' name="Vivek Kumar More" post="Head-Video Editing & Photography" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Padmasri.JPG' name="Pallagani Padamsri" post="Technical Coordinator-CSE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/saurya.jpg' name="Saurya Singh" post="Technical Coordinator-ECE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Shivashish .jpg' name="Shivashish Chaurasiya" post="Technical Coordinator-EE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Soumya .jpg' name="Soumya Sridhi" post="Head-Membership Drive" /></motion.div>
                    </motion.div>

                    {/* Mobile + Tablet grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 gap-4 md:hidden">
                        <motion.div variants={item}><MobileTeamImg img='/public/vedant.jpg' name="Vedant Jaiswal" post="Chairperson" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Yashika.jpg' name="Yashika Lawani" post="Vice Chair Admin" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/vvk.jpg' name="Vivek Kumar" post="Vice Chair Finance" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Prachi Agarwal.jpg' name="Prachi Agarwal" post="WIE Chair" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/ARYAN.jpg' name="Aryan Saxena" post="Aarambh Coordinator" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/priyanshi_khandelwal.jpg' name="Priyanshi Khandelwal" post="Student's Convener" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Tanushree.jpg' name="Tanushree Dhote" post="Event Coordinator" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/PriyanshiRana.jpg' name="Priyanshi Rana" post="Head-General Affairs" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/shivanimam.jpg' name="Shivani Gupta" post="Head-Management" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/anshul.jpg' name="Anshul Sharma" post="Head-Student Engagement & Welfare" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/amanmittal.jpg' name="Aman Mittal" post="Head-Sponsorship & Marketing" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Deependra.jpg' name="Deependra Yadav" post="Head-PR & Promotions" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/jatin.jpg' name="Jatin Chandel" post="Head-Web Developement" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Grv.jpg' name="Gaurav Barwal" post="Head-Logistics and Operations" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/naincy priya.jpg' name="Naincy Priya" post="Head-Media & Publicity" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Shristi .jpg' name="Shristi Saxena" post="Head-Content & Communication" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/vivek.jpg' name="Vivek Kumar More" post="Head-Video Editing & Photography" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Padmasri.JPG' name="Pallagani Padamsri" post="Technical Coordinator-CSE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/saurya.jpg' name="Saurya Singh" post="Technical Coordinator-ECE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Shivashish .jpg' name="Shivashish Chaurasiya" post="Technical Coordinator-EE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Soumya .jpg' name="Soumya Sridhi" post="Head-Membership Drive" /></motion.div>
                    </motion.div>
                </section>
            </motion.div>


            {/* Pre-final year team */}
            <motion.div className='mt-[5rem] mb-[4rem]'>
                <motion.h1
                    className="text-center mb-8 text-white font-bold text-2xl sm:text-4xl md:text-5xl"
                >Pre-Final <span className='text-blue-600'>Year</span></motion.h1>

                {/* All the images */}
                <section className="w-full">
                    {/* Desktop grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:grid grid-cols-4 gap-6">
                        <motion.div variants={item}><TeamImg img='/public/saurabh.jpg' name="Saurabh Yadav" post="General Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Ayush.jpeg' name="Ayush Kumar" post="Finance Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/dhanvi.jpg' name="Dhanvi Shah" post="WIE Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/arunima.jpg' name="Arunima Pathak" post="Aarambh Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/RahulAgarwal.jpg' name="Rahul Agarwal" post="Event Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/prerna.jpeg' name="Prerna Chaurasiya" post="General Affairs Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/surbhi.jpeg' name="Surbhi Sreejith" post="Management Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/rishabh.jpeg' name="Rishabh Sonkar" post="Student Engagement and Welfare Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/akash.jpeg' name="Akash Anand" post="Sponsorship & Marketing Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/tanvi.jpg' name="Tanvi Sundarkar" post="Sponsorship & Marketing Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/parth.jpg' name="Parth Arora" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/nishant.jpg' name="Nishant Tiwari" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/pratham.jpeg' name="Pratham Raghav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Abhishek.jpg' name="Abhishek Yadav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/hemant.jpg' name="Hemant Rajput" post="Media & Publicity Secretary Design Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/akshita.jpeg' name="Akshita Sahu" post="Content & Communication Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/prachi.jpg' name="Prachi Soni" post="Technical Secretary CSE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/amanchoudhary.jpg' name="Aman Choudhary" post="Joint Secretary CSE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/nitin.jpg' name="Nitin Jangid" post="Technical Secretary ECE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/nidhi.jpg' name="Nidhi Meshram" post="Joint Secretary ECE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/jinisha.jpeg' name="Jinisha Jain" post="Technical Secretary EE Joint Secretary EE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/priyansh.jpeg' name="Priyansh Mathur" post="Membership Drive Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/Suryansh.jpg' name="Suryansh Sarathe" post="Web Developement Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/aaditya.jpeg' name="Aaditya Jain" post="Photography & Video Editing Secretary" /></motion.div>
                    </motion.div>

                    {/* Mobile + Tablet grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 gap-4 md:hidden">
                        <motion.div variants={item}><MobileTeamImg img='/public/saurabh.jpg' name="Saurabh Yadav" post="General Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Ayush.jpeg' name="Ayush Kumar" post="Finance Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/dhanvi.jpg' name="Dhanvi Shah" post="WIE Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/arunima.jpg' name="Arunima Pathak" post="Aarambh Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/RahulAgarwal.jpg' name="Rahul Agarwal" post="Event Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/prerna.jpeg' name="Prerna Chaurasiya" post="General Affairs Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/surbhi.jpeg' name="Surbhi Sreejith" post="Management Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/rishabh.jpeg' name="Rishabh Sonkar" post="Student Engagement and Welfare Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/akash.jpeg' name="Akash Anand" post="Sponsorship & Marketing Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/tanvi.jpg' name="Tanvi Sundarkar" post="Sponsorship & Marketing Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/parth.jpg' name="Parth Arora" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/nishant.jpg' name="Nishant Tiwari" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/pratham.jpeg' name="Pratham Raghav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Abhishek.jpg' name="Abhishek Yadav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/hemant.jpg' name="Hemant Rajput" post="Media & Publicity Secretary Design Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/akshita.jpeg' name="Akshita Sahu" post="Content & Communication Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/prachi.jpg' name="Prachi Soni" post="Technical Secretary CSE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/amanchoudhary.jpg' name="Aman Choudhary" post="Joint Secretary CSE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/nitin.jpg' name="Nitin Jangid" post="Technical Secretary ECE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/nidhi.jpg' name="Nidhi Meshram" post="Joint Secretary ECE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/jinisha.jpeg' name="Jinisha Jain" post="Technical Secretary EE Joint Secretary EE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/priyansh.jpeg' name="Priyansh Mathur" post="Membership Drive Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/Suryansh.jpg' name="Suryansh Sarathe" post="Web Developement Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/aaditya.jpeg' name="Aaditya Jain" post="Photography & Video Editing Secretary" /></motion.div>
                    </motion.div>
                </section>
            </motion.div>
        </motion.div>
    )
}

export default Team
