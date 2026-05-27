import React from "react";
import { motion } from "framer-motion";
import TeamHero from "../components/TeamComponents/TeamHero";
import TeamImg from "../components/TeamComponents/TeamImg";
import Footer from "../components/Footer";
import MobileTeamImg from "../components/TeamComponents/MobileTeamImg";
import { useSelector } from "react-redux";

const Team = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between children
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
      className={`${mode === "dark" ? "bg-black" : "bg-white"} overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* hero section */}
      <TeamHero />

      {/* faculty team */}
      <motion.div className="mt-[5rem] mb-[4rem]">
        <motion.h1
          className={`text-center mb-8 ${mode === "dark" ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
        >
          Faculty <span className="text-blue-500">Team</span>
        </motion.h1>

        {/* All the images */}
        <section className="w-full">
          {/* Desktop grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={item}>
              <TeamImg
                img="/team/Dheeraj_Agrawal_Sir.jpg"
                name="Dr. Dheeraj Kumar Agarwal"
                post="Branch Counsellor"
                membershipNumber="92205335"
              />{" "}
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/VijayBhaskarSemwal.jpg"
                name="Dr. Vijay Bhaskar Semwal"
                post="Faculty Co-Coordinator (CSE)"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/priyankapaliwal.jpg"
                name="Dr. Priyanka Paliwal"
                post="Faculty Co-Coordinator (EE)"
                membershipNumber="92215569"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/Dr.Atul.Kumar.jpg"
                name="Dr. Atul Kumar"
                post="Faculty Co-Coordinator (ECE)"
                membershipNumber="94817808"
              />
            </motion.div>
          </motion.div>

          {/* Mobile + Tablet grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 justify-items-center gap-4 md:hidden"
          >
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/Dheeraj_Agrawal_Sir.jpg"
                name="Dr. Dheeraj Kumar Agarwal"
                post="Branch Counsellor"
                membershipNumber="92205335"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/VijayBhaskarSemwal.jpg"
                name="Dr. Vijay Bhaskar Semwal"
                post="Faculty Co-Coordinator (CSE)"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/priyankapaliwal.jpg"
                name="Dr. Priyanka Paliwal"
                post="Faculty Co-Coordinator (EE)"
                membershipNumber="92215569"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/Dr.Atul.Kumar.jpg"
                name="Dr. Atul Kumar"
                post="Faculty Co-Coordinator (ECE)"
                membershipNumber="94817808"
              />
            </motion.div>
          </motion.div>
        </section>
      </motion.div>

      {/* final year team */}
      <motion.div className="mt-[5rem] mb-[4rem]">
        <motion.h1
          className={`text-center mb-8 ${mode === "dark" ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
        >
          Final <span className="text-blue-500">Year</span>
        </motion.h1>

        {/* All the images */}
        <section className="w-full">
          {/* Desktop grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:block w-full"
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/vedant.jpg"
                    name="Vedant Jaiswal"
                    post="Chairperson"
                    membershipNumber="101392018"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Yashika.jpg"
                    name="Yashika Lawani"
                    post="Vice Chair Admin"
                    membershipNumber="101217691"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/vvk.jpg"
                    name="Vivek Kumar"
                    post="Vice Chair Finance"
                    membershipNumber="101295401"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Prachi Agarwal.jpg"
                    name="Prachi Agarwal"
                    post="WIE Chair"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/ARYAN.jpg"
                    name="Aryan Saxena"
                    post="Aarambh Coordinator"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/priyanshi_khandelwal.jpg"
                    name="Priyanshi Khandelwal"
                    post="Student's Convener"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Tanushree.jpg"
                    name="Tanushree Dhote"
                    post="Event Coordinator"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/PriyanshiRana.jpg"
                    name="Priyanshi Rana"
                    post="Head-General Affairs"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/shivani.jpeg"
                    name="Shivani Gupta"
                    post="Head-Management"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/anshul.jpg"
                    name="Anshul Sharma"
                    post="Head-Student Engagement & Welfare"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/amanmittal.jpg"
                    name="Aman Mittal"
                    post="Head-Sponsorship & Marketing"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Deependra.jpg"
                    name="Deependra Yadav"
                    post="Head-PR & Promotions"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/jatin.jpg"
                    name="Jatin Chandel"
                    post="Head-Web Developement"
                    membershipNumber="98765435"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Grv.jpg"
                    name="Gaurav Barwal"
                    post="Head-Logistics and Operations"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/naincy priya.jpg"
                    name="Naincy Priya"
                    post="Head-Media & Publicity"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Shristi .jpg"
                    name="Shristi Saxena"
                    post="Head-Content & Communication"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/vivek.jpg"
                    name="Vivek Kumar More"
                    post="Head-Video Editing & Photography"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Padmasri.JPG"
                    name="Pallagani Padamsri"
                    post="Technical Coordinator-CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/saurya.jpg"
                    name="Saurya Singh"
                    post="Technical Coordinator-ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Shivashish .jpg"
                    name="Shivashish Chaurasiya"
                    post="Technical Coordinator-EE"
                  />
                </motion.div>
                <div className="xl:col-start-2 xl:col-span-2 xl:justify-self-center">
                  <motion.div variants={item} className="w-full max-w-[18rem]">
                    <TeamImg
                      img="/team/Soumya .jpg"
                      name="Soumya Sridhi"
                      post="Head-Membership Drive"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile + Tablet grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="md:hidden w-full"
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 gap-x-2 gap-y-12 justify-items-center">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/vedant.jpg"
                    name="Vedant Jaiswal"
                    post="Chairperson"
                    membershipNumber="101392018"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Yashika.jpg"
                    name="Yashika Lawani"
                    post="Vice Chair Admin"
                    membershipNumber="101217691"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/vvk.jpg"
                    name="Vivek Kumar"
                    post="Vice Chair Finance"
                    membershipNumber="101295401"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Prachi Agarwal.jpg"
                    name="Prachi Agarwal"
                    post="WIE Chair"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/ARYAN.jpg"
                    name="Aryan Saxena"
                    post="Aarambh Coordinator"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/priyanshi_khandelwal.jpg"
                    name="Priyanshi Khandelwal"
                    post="Student's Convener"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Tanushree.jpg"
                    name="Tanushree Dhote"
                    post="Event Coordinator"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/PriyanshiRana.jpg"
                    name="Priyanshi Rana"
                    post="Head-General Affairs"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/shivani.jpeg"
                    name="Shivani Gupta"
                    post="Head-Management"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/anshul.jpg"
                    name="Anshul Sharma"
                    post="Head-Student Engagement & Welfare"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/amanmittal.jpg"
                    name="Aman Mittal"
                    post="Head-Sponsorship & Marketing"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Deependra.jpg"
                    name="Deependra Yadav"
                    post="Head-PR & Promotions"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/jatin.jpg"
                    name="Jatin Chandel"
                    post="Head-Web Developement"
                    membershipNumber="98765435"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Grv.jpg"
                    name="Gaurav Barwal"
                    post="Head-Logistics and Operations"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/naincy priya.jpg"
                    name="Naincy Priya"
                    post="Head-Media & Publicity"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Shristi .jpg"
                    name="Shristi Saxena"
                    post="Head-Content & Communication"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/vivek.jpg"
                    name="Vivek Kumar More"
                    post="Head-Video Editing & Photography"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Padmasri.JPG"
                    name="Pallagani Padamsri"
                    post="Technical Coordinator-CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/saurya.jpg"
                    name="Saurya Singh"
                    post="Technical Coordinator-ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Shivashish .jpg"
                    name="Shivashish Chaurasiya"
                    post="Technical Coordinator-EE"
                  />
                </motion.div>
                <div className="col-span-2">
                  <motion.div variants={item} className="w-full max-w-[18rem]">
                    <MobileTeamImg
                      img="/team/Soumya .jpg"
                      name="Soumya Sridhi"
                      post="Head-Membership Drive"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* Pre-final year team */}
      <motion.div className="mt-[5rem] mb-[4rem]">
        <motion.h1
          className={`text-center mb-8 ${mode === "dark" ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
        >
          Pre-Final <span className="text-blue-500">Year</span>
        </motion.h1>

        {/* All the images */}
        <section className="w-full">
          {/* Desktop grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:block w-full"
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/saurabh.jpg"
                    name="Saurabh Yadav"
                    post="General Secretary"
                    membershipNumber="101832648"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Ayush.jpg"
                    name="Ayush Kumar"
                    post="Finance Secretary"
                    membershipNumber="101641565"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/dhanvi.jpg"
                    name="Dhanvi Shah"
                    post="WIE Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/arunima.jpg"
                    name="Arunima Pathak"
                    post="Aarambh Secretary"
                    membershipNumber="101837200"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/RahulAgarwal.jpg"
                    name="Rahul Agarwal"
                    post="Event Secretary"
                    membershipNumber="101833521"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/prerna.jpeg"
                    name="Prerna Chaurasiya"
                    post="General Affairs Secretary"
                    membershipNumber="101835115"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/surbhi.jpg"
                    name="Surbhi Sreejith"
                    post="Management Secretary"
                    membershipNumber="101833685"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/rishab.jpg"
                    name="Rishabh Sonkar"
                    post="Student Engagement and Welfare Secretary"
                    membershipNumber="101878276"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/akash.jpg"
                    name="Akash Anand"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/gouravM.jpg"
                    name="Gourav Mishra"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/parth.jpg"
                    name="Parth Arora"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/nishant.jpg"
                    name="Nishant Tiwari"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/pratham.jpeg"
                    name="Pratham Raghav"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Abhishek.jpg"
                    name="Abhishek Yadav"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/hemant.jpg"
                    name="Hemant Rajput"
                    post="Media & Publicity Secretary Design Secretary"
                    membershipNumber="101837609"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/akshita.jpeg"
                    name="Akshita Sahu"
                    post="Content & Communication Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/prachi.jpg"
                    name="Prachi Soni"
                    post="Technical Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/amanchoudhary.jpg"
                    name="Aman Choudhary"
                    post="Joint Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/nitin.jpg"
                    name="Nitin Jangid"
                    post="Technical Secretary ECE"
                    membershipNumber="101833591"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/nidhi.jpg"
                    name="Nidhi Meshram"
                    post="Joint Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/jinisha.jpg"
                    name="Jinisha Jain"
                    post="Technical Secretary EE Joint Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/priyansh.jpg"
                    name="Priyansh Mathur"
                    post="Membership Drive Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/Suryansh.jpg"
                    name="Suryansh Sarathe"
                    post="Web Developement Secretary"
                    membershipNumber="101837872"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/aaditya.jpg"
                    name="Aaditya Jain"
                    post="Photography & Video Editing Secretary"
                    membershipNumber="101862726"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Mobile + Tablet grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="md:hidden w-full"
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 gap-x-2 gap-y-12 justify-items-center">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/saurabh.jpg"
                    name="Saurabh Yadav"
                    post="General Secretary"
                    membershipNumber="101832648"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Ayush.jpg"
                    name="Ayush Kumar"
                    post="Finance Secretary"
                    membershipNumber="101641565"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/dhanvi.jpg"
                    name="Dhanvi Shah"
                    post="WIE Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/arunima.jpg"
                    name="Arunima Pathak"
                    post="Aarambh Secretary"
                    membershipNumber="101837200"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/RahulAgarwal.jpg"
                    name="Rahul Agarwal"
                    post="Event Secretary"
                    membershipNumber="101833521"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/prerna.jpeg"
                    name="Prerna Chaurasiya"
                    post="General Affairs Secretary"
                    membershipNumber="101835115"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/surbhi.jpg"
                    name="Surbhi Sreejith"
                    post="Management Secretary"
                    membershipNumber="101833685"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/rishab.jpg"
                    name="Rishabh Sonkar"
                    post="Student Engagement and Welfare Secretary"
                    membershipNumber="101878276"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/akash.jpg"
                    name="Akash Anand"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/gouravM.jpg"
                    name="Gourav Mishra"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/parth.jpg"
                    name="Parth Arora"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/nishant.jpg"
                    name="Nishant Tiwari"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/pratham.jpeg"
                    name="Pratham Raghav"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Abhishek.jpg"
                    name="Abhishek Yadav"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/hemant.jpg"
                    name="Hemant Rajput"
                    post="Media & Publicity Secretary Design Secretary"
                    membershipNumber="101837609"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/akshita.jpeg"
                    name="Akshita Sahu"
                    post="Content & Communication Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/prachi.jpg"
                    name="Prachi Soni"
                    post="Technical Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/amanchoudhary.jpg"
                    name="Aman Choudhary"
                    post="Joint Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/nitin.jpg"
                    name="Nitin Jangid"
                    post="Technical Secretary ECE"
                    membershipNumber="101833591"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/nidhi.jpg"
                    name="Nidhi Meshram"
                    post="Joint Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/jinisha.jpg"
                    name="Jinisha Jain"
                    post="Technical Secretary EE Joint Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/priyansh.jpg"
                    name="Priyansh Mathur"
                    post="Membership Drive Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/Suryansh.jpg"
                    name="Suryansh Sarathe"
                    post="Web Developement Secretary"
                    membershipNumber="101837872"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/aaditya.jpg"
                    name="Aaditya Jain"
                    post="Photography & Video Editing Secretary"
                    membershipNumber="101862726"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* Pre-final year team
      <motion.div className="mt-[5rem] mb-[4rem]">
        <motion.h1
          className={`text-center mb-8 ${mode === "dark" ? "text-white" : "text-black"} font-bold text-2xl sm:text-4xl md:text-5xl`}
        >
          Pre-Final <span className="text-blue-500">Year</span>
        </motion.h1> */}

      {/* All the images */}
      {/* <section className="w-full"> */}
      {/* Desktop grid */}
      {/* <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:block w-full"
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/arnavM.jpg"
                    name="Arnav Mahajan"
                    post="General Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/bhaskarK.jpg"
                    name="Bhaskar Kumawat"
                    post="Finance Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/mahimaM.jpg"
                    name="Mahima Mehra"
                    post="WIE Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/anjaliM.png"
                    name="Anjali Meena"
                    post="Aarambh Secretary"
                    objectPosition="center 4%"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/samarthK.jpg"
                    name="Samarth Khare"
                    post="Event Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/nikitaV.webp"
                    name="Nikita Verma"
                    post="General Affairs Secretary"
                    objectPosition="center 70%"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/ajayK.jpg"
                    name="Ajay Kumawat"
                    post="Management Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/hemantD.jpg"
                    name="Hemant Dangi"
                    post="Student Engagement and Welfare Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/shivamD.jpg"
                    name="Shivam Dhakrey"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/gouravM.jpg"
                    name="Gourav Mishra"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/vivekV.jpg"
                    name="Vivek Vijaywargiya"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/amanS.png"
                    name="Aman Shivawedy"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/shubhankarR.jpg"
                    name="Shubhankar Rai"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/vinodeetD.jpg"
                    name="Vinodeet Dewangan"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/kunalraje.jpg"
                    name="Kunalraje Bhalerao"
                    post="Media & Publicity Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/silky.jpg"
                    name="Silky Gupta"
                    post="Content & Communication Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/usmaanM.jpeg"
                    name="Usman Mansoor"
                    post="Technical Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/krishV.jpg"
                    name="Krish Varshney"
                    post="Joint Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/anjaliV.jpeg"
                    name="Anjali Vemula"
                    post="Technical Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/sushantD.jpg"
                    name="Sushant Dwivedi"
                    post="Joint Secretary ECE"
                    objectPosition="center 70%"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/rishabhA.webp"
                    name="Rishabh Anand"
                    post="Technical Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/gauravR.jpg"
                    name="Gaurav Raj"
                    post="Joint Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/chetanA.jpg"
                    name="Chetan Agrawal"
                    post="Membership Drive Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img="/team/saumyaK.webp"
                    name="Saumya Khushlani"
                    post="Web Developement Secretary"
                  />
                </motion.div>
                <div className="md:col-span-3 lg:col-span-4 flex justify-center">
                  <motion.div variants={item} className="w-full max-w-[18rem]">
                    <TeamImg
                      img="/team/sumayJ.png"
                      name="Sumay Jain"
                      post="Photography & Video Editing Secretary"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div> */}

      {/* Mobile + Tablet grid */}
      {/* <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="md:hidden w-full"
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 gap-x-2 gap-y-12 justify-items-center">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/arnavM.jpg"
                    name="Arnav Mahajan"
                    post="General Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/bhaskarK.jpg"
                    name="Bhaskar Kumawat"
                    post="Finance Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/mahimaM.jpg"
                    name="Mahima Mehra"
                    post="WIE Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/anjaliM.png"
                    name="Anjali Meena"
                    post="Aarambh Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/samarthK.jpg"
                    name="Samarth Khare"
                    post="Event Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/nikitaV.webp"
                    name="Nikita Verma"
                    post="General Affairs Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/ajayK.jpg"
                    name="Ajay Kumawat"
                    post="Management Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/hemantD.jpg"
                    name="Hemant Dangi"
                    post="Student Engagement and Welfare Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/shivamD.jpg"
                    name="Shivam Dhakrey"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/gouravM.jpg"
                    name="Gourav Mishra"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/vivekV.jpg"
                    name="Vivek Vijaywargiya"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/amanS.png"
                    name="Aman Shivawedy"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/shubhankarR.jpg"
                    name="Shubhankar Rai"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/vinodeetD.jpg"
                    name="Vinodeet Dewangan"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/kunalraje.jpg"
                    name="Kunalraje Bhalerao"
                    post="Media & Publicity Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/silky.jpg"
                    name="Silky Gupta"
                    post="Content & Communication Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/usmaanM.jpeg"
                    name="Usman Mansoor"
                    post="Technical Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/krishV.jpg"
                    name="Krish Varshney"
                    post="Joint Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/anjaliV.jpeg"
                    name="Anjali Vemula"
                    post="Technical Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/sushantD.jpg"
                    name="Sushant Dwivedi"
                    post="Joint Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/rishabhA.webp"
                    name="Rishabh Anand"
                    post="Technical Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/gauravR.jpg"
                    name="Gaurav Raj"
                    post="Joint Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/chetanA.jpg"
                    name="Chetan Agrawal"
                    post="Membership Drive Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img="/team/saumyaK.webp"
                    name="Saumya Khushlani"
                    post="Web Developement Secretary"
                  />
                </motion.div>
                <div className="col-span-2 flex justify-center">
                  <motion.div variants={item} className="w-full max-w-[18rem]">
                    <MobileTeamImg
                      img="/team/sumayJ.png"
                      name="Sumay Jain"
                      post="Photography & Video Editing Secretary"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div> */}

      <Footer />
    </motion.div>
  );
};

export default Team;
