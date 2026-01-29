import React from 'react'
import { motion } from 'framer-motion'
import TeamHero from '../components/TeamComponents/TeamHero'
import TeamImg from '../components/TeamComponents/TeamImg'
import Footer from '../components/Footer'
import MobileTeamImg from '../components/TeamComponents/MobileTeamImg'
import {useSelector} from 'react-redux'

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

    const mode = useSelector((state) => state.theme.mode);
    return (
        <motion.div
            className={`${mode==='dark' ? "bg-black" : "bg-white"} overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}>

            {/* hero section */}
            <TeamHero />

            {/* faculty team */}
            <motion.div className='mt-[5rem] mb-[4rem]'>
                <motion.h1
                    className={`text-center mb-8 ${mode==='dark' ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
                >Faculty <span className='text-blue-500'>Team</span></motion.h1>

                {/* All the images */}
                <section className="w-full">
                    {/* Desktop grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:grid grid-cols-4 gap-6">
                        <motion.div variants={item}><TeamImg img='/public/team/Dheeraj_Agrawal_sir.jpg' name="Dr. Dheeraj Kumar Agarwal" post="Branch Counsellor" membershipNumber="92205335"/> </motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/VijayBhaskarSemwal.jpg' name="Dr. Vijay Bhaskar Semwal" post="Faculty Co-Coordinator (CSE)" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/priyankapaliwal.jpg' name="Dr. Priyanka Paliwal" post="Faculty Co-Coordinator (EE)" membershipNumber="92215569"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Dr.Atul.Kumar.jpg' name="Dr. Atul Kumar" post="Faculty Co-Coordinator (ECE)" membershipNumber="94817808"/></motion.div>
                    </motion.div>

                    {/* Mobile + Tablet grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 justify-items-center gap-4 md:hidden">
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Dheeraj_Agrawal_sir.jpg' name="Dr. Dheeraj Kumar Agarwal" post="Branch Counsellor" membershipNumber="92205335"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/VijayBhaskarSemwal.jpg' name="Dr. Vijay Bhaskar Semwal" post="Faculty Co-Coordinator (CSE)" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/priyankapaliwal.jpg' name="Dr. Priyanka Paliwal" post="Faculty Co-Coordinator (EE)" membershipNumber="92215569"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Dr.Atul.Kumar.jpg' name="Dr. Atul Kumar" post="Faculty Co-Coordinator (ECE)" membershipNumber="94817808"/></motion.div>
                    </motion.div>
                </section>
            </motion.div>

            {/* final year team */}
            <motion.div className='mt-[5rem] mb-[4rem]'>
                <motion.h1
                    className={`text-center mb-8 ${mode==='dark' ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
                >Final <span className='text-blue-500'>Year</span></motion.h1>

                {/* All the images */}
                <section className="w-full">
                    {/* Desktop grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:grid grid-cols-4 gap-6 justify-items-center">
                        <motion.div variants={item}><TeamImg img='/public/team/vedant.jpg' name="Vedant Jaiswal" post="Chairperson" membershipNumber="101392018" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Yashika.jpeg' name="Yashika Lawani" post="Vice Chair Admin" membershipNumber="101217691" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/vvk.jpg' name="Vivek Kumar" post="Vice Chair Finance" membershipNumber="101295401" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/prachi.jpeg' name="Prachi Agarwal" post="WIE Chair" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/ARYAN.jpg' name="Aryan Saxena" post="Aarambh Coordinator" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/priyanshi_khandelwal.jpg' name="Priyanshi Khandelwal" post="Student's Convener" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Tanushree.jpg' name="Tanushree Dhote" post="Event Coordinator" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/PriyanshiRana.jpg' name="Priyanshi Rana" post="Head-General Affairs" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/shivani.jpeg' name="Shivani Gupta" post="Head-Management" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/anshul.jpg' name="Anshul Sharma" post="Head-Student Engagement & Welfare" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/amanmittal.jpg' name="Aman Mittal" post="Head-Sponsorship & Marketing" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Deependra.jpg' name="Deependra Yadav" post="Head-PR & Promotions" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/jatin.jpg' name="Jatin Chandel" post="Head-Web Developement" membershipNumber="98765435" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Grv.jpg' name="Gaurav Barwal" post="Head-Logistics and Operations" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/naincy priya.jpg' name="Naincy Priya" post="Head-Media & Publicity" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Shristi .jpg' name="Shristi Saxena" post="Head-Content & Communication" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/vivek.jpg' name="Vivek Kumar More" post="Head-Video Editing & Photography" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Padmasri.JPG' name="Pallagani Padamsri" post="Technical Coordinator-CSE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/saurya.jpg' name="Saurya Singh" post="Technical Coordinator-ECE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Shivashish .jpg' name="Shivashish Chaurasiya" post="Technical Coordinator-EE" /></motion.div>
                        <div className="col-span-4 flex justify-center">
                             <motion.div variants={item}><TeamImg img='/public/team/Soumya .jpg' name="Soumya Sridhi" post="Head-Membership Drive" /></motion.div>
                        </div>
                    </motion.div>

                    {/* Mobile + Tablet grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 justify-items-center gap-4 md:hidden">
                        <motion.div variants={item}><MobileTeamImg img='/public/team/vedant.jpg' name="Vedant Jaiswal" post="Chairperson" membershipNumber=" 101392018" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Yashika.jpeg' name="Yashika Lawani" post="Vice Chair Admin" membershipNumber="101217691" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/vvk.jpg' name="Vivek Kumar" post="Vice Chair Finance" membershipNumber="101295401" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/prachi.jpeg' name="Prachi Agarwal" post="WIE Chair" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/ARYAN.jpg' name="Aryan Saxena" post="Aarambh Coordinator" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/priyanshi_khandelwal.jpg' name="Priyanshi Khandelwal" post="Student's Convener" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Tanushree.jpg' name="Tanushree Dhote" post="Event Coordinator" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/PriyanshiRana.jpg' name="Priyanshi Rana" post="Head-General Affairs" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/shivani.jpeg' name="Shivani Gupta" post="Head-Management" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/anshul.jpg' name="Anshul Sharma" post="Head-Student Engagement & Welfare" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/amanmittal.jpg' name="Aman Mittal" post="Head-Sponsorship & Marketing" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Deependra.jpg' name="Deependra Yadav" post="Head-PR & Promotions" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/jatin.jpg' name="Jatin Chandel" post="Head-Web Developement" membershipNumber="98765435" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Grv.jpg' name="Gaurav Barwal" post="Head-Logistics and Operations" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/naincy priya.jpg' name="Naincy Priya" post="Head-Media & Publicity" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Shristi .jpg' name="Shristi Saxena" post="Head-Content & Communication" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/vivek.jpg' name="Vivek Kumar More" post="Head-Video Editing & Photography" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Padmasri.JPG' name="Pallagani Padamsri" post="Technical Coordinator-CSE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/saurya.jpg' name="Saurya Singh" post="Technical Coordinator-ECE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Shivashish .jpg' name="Shivashish Chaurasiya" post="Technical Coordinator-EE" /></motion.div>
                        <div className="col-span-2 flex justify-center">
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Soumya .jpg' name="Soumya Sridhi" post="Head-Membership Drive" /></motion.div>
                        </div>
                    </motion.div>
                </section>
            </motion.div>


            {/* Pre-final year team */}
            <motion.div className='mt-[5rem] mb-[4rem]'>
                <motion.h1
                    className={`text-center mb-8 ${mode==='dark' ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
                >Pre-Final <span className='text-blue-500'>Year</span></motion.h1>

                {/* All the images */}
                <section className="w-full">
                    {/* Desktop grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}

                        className="hidden md:grid grid-cols-4 gap-6">
                        <motion.div variants={item}><TeamImg img='/public/team/saurabh.jpg' name="Saurabh Yadav" post="General Secretary" membershipNumber="101832648"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Ayush.jpg' name="Ayush Kumar" post="Finance Secretary" membershipNumber="101641565"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/dhanvi.jpg' name="Dhanvi Shah" post="WIE Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/arunima.jpg' name="Arunima Pathak" post="Aarambh Secretary" membershipNumber="101837200"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/RahulAgarwal.jpg' name="Rahul Agarwal" post="Event Secretary" membershipNumber="101833521"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/prerna.jpeg' name="Prerna Chaurasiya" post="General Affairs Secretary" membershipNumber="101835115"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/surbhi.jpg' name="Surbhi Sreejith" post="Management Secretary" membershipNumber="101833685"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/rishab.jpg' name="Rishabh Sonkar" post="Student Engagement and Welfare Secretary" membershipNumber="101878276"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/akash.jpg' name="Akash Anand" post="Sponsorship & Marketing Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/tanvi.jpg' name="Tanvi Sundarkar" post="Sponsorship & Marketing Secretary" membershipNumber="101833618"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/parth.jpg' name="Parth Arora" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/nishant.jpg' name="Nishant Tiwari" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/pratham.jpeg' name="Pratham Raghav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Abhishek.jpg' name="Abhishek Yadav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/hemant.jpg' name="Hemant Rajput" post="Media & Publicity Secretary Design Secretary" membershipNumber="101837609"/></motion.div>
                        {/* <motion.div variants={item}><TeamImg img='/public/team/akshita.jpeg' name="Akshita Sahu" post="Content & Communication Secretary" /></motion.div> */}
                        <motion.div variants={item}><TeamImg img='/public/team/prachi.jpg' name="Prachi Soni" post="Technical Secretary CSE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/amanchoudhary.jpg' name="Aman Choudhary" post="Joint Secretary CSE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/nitin.jpg' name="Nitin Jangid" post="Technical Secretary ECE" membershipNumber="101833591"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/nidhi.jpg' name="Nidhi Meshram" post="Joint Secretary ECE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/jinisha.jpg' name="Jinisha Jain" post="Technical Secretary EE Joint Secretary EE" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/priyansh.jpg' name="Priyansh Mathur" post="Membership Drive Secretary" /></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/Suryansh.jpg' name="Suryansh Sarathe" post="Web Developement Secretary" membershipNumber="101837872"/></motion.div>
                        <motion.div variants={item}><TeamImg img='/public/team/aaditya.jpg' name="Aaditya Jain" post="Photography & Video Editing Secretary" membershipNumber="101862726"/></motion.div>
                    </motion.div>

                    {/* Mobile + Tablet grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 justify-items-center gap-4 md:hidden">
                        <motion.div variants={item}><MobileTeamImg img='/public/team/saurabh.jpg' name="Saurabh Yadav" post="General Secretary" membershipNumber="101832648"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Ayush.jpg' name="Ayush Kumar" post="Finance Secretary" membershipNumber="101641565"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/dhanvi.jpg' name="Dhanvi Shah" post="WIE Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/arunima.jpg' name="Arunima Pathak" post="Aarambh Secretary" membershipNumber="101837200"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/RahulAgarwal.jpg' name="Rahul Agarwal" post="Event Secretary" membershipNumber="101833521"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/prerna.jpeg' name="Prerna Chaurasiya" post="General Affairs Secretary" membershipNumber="101835115"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/surbhi.jpg' name="Surbhi Sreejith" post="Management Secretary" membershipNumber="101833685"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/rishab.jpg' name="Rishabh Sonkar" post="Student Engagement and Welfare Secretary" membershipNumber="101878276"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/akash.jpg' name="Akash Anand" post="Sponsorship & Marketing Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/tanvi.jpg' name="Tanvi Sundarkar" post="Sponsorship & Marketing Secretary"  membershipNumber="101833618"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/parth.jpg' name="Parth Arora" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/nishant.jpg' name="Nishant Tiwari" post="Pr & Promotion Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/pratham.jpeg' name="Pratham Raghav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Abhishek.jpg' name="Abhishek Yadav" post="Logistics & Operations Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/hemant.jpg' name="Hemant Rajput" post="Media & Publicity Secretary Design Secretary" membershipNumber="101837609"/></motion.div>
                        {/* <motion.div variants={item}><MobileTeamImg img='/public/team/akshita.jpeg' name="Akshita Sahu" post="Content & Communication Secretary" /></motion.div> */}
                        <motion.div variants={item}><MobileTeamImg img='/public/team/prachi.jpg' name="Prachi Soni" post="Technical Secretary CSE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/amanchoudhary.jpg' name="Aman Choudhary" post="Joint Secretary CSE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/nitin.jpg' name="Nitin Jangid" post="Technical Secretary ECE" membershipNumber="101833591"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/nidhi.jpg' name="Nidhi Meshram" post="Joint Secretary ECE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/jinisha.jpg' name="Jinisha Jain" post="Technical Secretary EE Joint Secretary EE" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/priyansh.jpg' name="Priyansh Mathur" post="Membership Drive Secretary" /></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/Suryansh.jpg' name="Suryansh Sarathe" post="Web Developement Secretary" membershipNumber="101837872"/></motion.div>
                        <motion.div variants={item}><MobileTeamImg img='/public/team/aaditya.jpg' name="Aaditya Jain" post="Photography & Video Editing Secretary" membershipNumber="101862726"/></motion.div>
                    </motion.div>
                </section>
            </motion.div>

            <Footer />
        </motion.div>
    )
}

export default Team
