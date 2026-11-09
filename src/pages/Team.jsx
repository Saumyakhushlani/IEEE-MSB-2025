import React from "react";
import { motion } from "framer-motion";
import TeamHero from "../components/TeamComponents/TeamHero";
import TeamImg from "../components/TeamComponents/TeamImg";
import Footer from "../components/Footer";
import MobileTeamImg from "../components/TeamComponents/MobileTeamImg";
import { useSelector } from "react-redux";
import { getCloudinaryImage } from "../utils/cloudinary";

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
                img={getCloudinaryImage("Team/Dheeraj_Agrawal_Sir")}
                name="Dr. Dheeraj Kumar Agarwal"
                post="Branch Counsellor"
                membershipNumber="92205335"
              />{" "}
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img={getCloudinaryImage("Team/VijayBhaskarSemwal")}
                name="Dr. Vijay Bhaskar Semwal"
                post="Faculty Co-Coordinator (CSE)"
                membershipNumber="92809398"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img={getCloudinaryImage("Team/priyankapaliwal")}
                name="Dr. Priyanka Paliwal"
                post="Faculty Co-Coordinator (EE)"
                membershipNumber="92215569"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img={getCloudinaryImage("Team/Dr.Atul.Kumar")}
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
                img={getCloudinaryImage("Team/Dheeraj_Agrawal_Sir")}
                name="Dr. Dheeraj Kumar Agarwal"
                post="Branch Counsellor"
                membershipNumber="92205335"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img={getCloudinaryImage("Team/VijayBhaskarSemwal")}
                name="Dr. Vijay Bhaskar Semwal"
                post="Faculty Co-Coordinator (CSE)"
                membershipNumber="92809398"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img={getCloudinaryImage("Team/priyankapaliwal")}
                name="Dr. Priyanka Paliwal"
                post="Faculty Co-Coordinator (EE)"
                membershipNumber="92215569"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img={getCloudinaryImage("Team/Dr.Atul.Kumar")}
                name="Dr. Atul Kumar"
                post="Faculty Co-Coordinator (ECE)"
                membershipNumber="94817808"
              />
            </motion.div>
          </motion.div>
        </section>
      </motion.div>

      {/* Final year team */}
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
              <div className="flex flex-wrap justify-center gap-8">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/Ayush")}
                    name="Ayush Kumar"
                    post="Chairperson"
                    membershipNumber="101641565"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/RahulAgarwal")}
                    name="Rahul Agarwal"
                    post="Vice Chair Admin"
                    membershipNumber="101833521"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/tanvi")}
                    name="Tanvi Sundarkar"
                    post="Vice Chair Finance"
                    membershipNumber="101833618"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/surbhi")}
                    name="Surbhi Sreejith"
                    post="WIE Chair"
                    membershipNumber="101833685"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/arunima")}
                    name="Arunima Pathak"
                    post="Aarambh Coordinator, Head-Content"
                    membershipNumber="101837200"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/hemant")}
                    name="Hemant Rajput"
                    post="Student's Convenor"
                    membershipNumber="101837609"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/prerna")}
                    name="Prerna Chaurasiya"
                    post="Event Coordinator"
                    membershipNumber="101835115"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/nitin")}
                    name="Nitin Jangid"
                    post="Head-General Affairs"
                    membershipNumber="101833591"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/dhanvi")}
                    name="Dhanvi Shah"
                    post="Head Management"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/priyansh")}
                    name="Priyansh Mathur"
                    post="Head-Student Management & Welfare"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/akash")}
                    name="Akash Anand"
                    post="Head Sponsorship & Marketing"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/prachi")}
                    name="Prachi Soni"
                    post="Student Coordinator"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/Suryansh")}
                    name="Suryansh Sarathe"
                    post="Head-Web Development"
                    membershipNumber="101837872"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/Abhishek")}
                    name="Abhishek Yadav"
                    post="Head-Logistics & Operations"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/rishab")}
                    name="Rishabh Sonkar"
                    post="Head-PR & Publicity"
                    membershipNumber="101878276"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/nidhi")}
                    name="Nidhi Meshram"
                    post="Head-Media & Communications"
                  />
                </motion.div>
                <div className="md:col-span-3 lg:col-span-4 flex justify-center">
                  <motion.div variants={item} className="w-full max-w-[18rem]">
                    <TeamImg
                      img={getCloudinaryImage("Team/aaditya")}
                      name="Aaditya Jain"
                      post="Photography & Video Editing Secretary"
                      membershipNumber="101862726"
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
                    img={getCloudinaryImage("Team/Ayush")}
                    name="Ayush Kumar"
                    post="Chairperson"
                    membershipNumber="101641565"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/RahulAgarwal")}
                    name="Rahul Agarwal"
                    post="Vice Chair Admin"
                    membershipNumber="101833521"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/tanvi")}
                    name="Tanvi Sundarkar"
                    post="Vice Chair Finance"
                    membershipNumber="101833618"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/surbhi")}
                    name="Surbhi Sreejith"
                    post="WIE Chair"
                    membershipNumber="101833685"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/arunima")}
                    name="Arunima Pathak"
                    post="Aarambh Coordinator, Head-Content"
                    membershipNumber="101837200"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/hemant")}
                    name="Hemant Rajput"
                    post="Student's Convenor"
                    membershipNumber="101837609"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/prerna")}
                    name="Prerna Chaurasiya"
                    post="Event Coordinator"
                    membershipNumber="101835115"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/nitin")}
                    name="Nitin Jangid"
                    post="Head-General Affairs"
                    membershipNumber="101833591"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/dhanvi")}
                    name="Dhanvi Shah"
                    post="Head Management"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/priyansh")}
                    name="Priyansh Mathur"
                    post="Head-Student Management & Welfare"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/akash")}
                    name="Akash Anand"
                    post="Head Sponsorship & Marketing"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/prachi")}
                    name="Prachi Soni"
                    post="Student Coordinator"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/Suryansh")}
                    name="Suryansh Sarathe"
                    post="Head-Web Development"
                    membershipNumber="101837872"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/Abhishek")}
                    name="Abhishek Yadav"
                    post="Head-Logistics & Operations"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/rishab")}
                    name="Rishabh Sonkar"
                    post="Head-PR & Publicity"
                    membershipNumber="101878276"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/nidhi")}
                    name="Nidhi Meshram"
                    post="Head-Media & Communications"
                  />
                </motion.div>
                <div className="col-span-2 flex justify-center">
                  <motion.div variants={item} className="w-full max-w-[18rem]">
                    <MobileTeamImg
                      img={getCloudinaryImage("Team/aaditya")}
                      name="Aaditya Jain"
                      post="Photography & Video Editing Secretary"
                      membershipNumber="101862726"
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
              <div className="flex flex-wrap justify-center gap-8">
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/arnavM")}
                    name="Arnav Mahajan"
                    post="General Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/bhaskarK")}
                    name="Bhaskar Kumawat"
                    post="Finance Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/mahimaM")}
                    name="Mahima Mehra"
                    post="WIE Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/samarthK")}
                    name="Samarth Khare"
                    post="Event Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/nikitaV")}
                    name="Nikita Verma"
                    post="General Affairs Secretary"
                    objectPosition="center 70%"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/ajayK")}
                    name="Ajay Kumawat"
                    post="Management Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/hemantD")}
                    name="Hemant Dangi"
                    post="Student Engagement and Welfare Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/shivamD")}
                    name="Shivam Dhakrey"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/gouravM")}
                    name="Gourav Mishra"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/vivekV")}
                    name="Vivek Vijaywargiya"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/amanS")}
                    name="Aman Shivawedy"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/shubhankarR")}
                    name="Shubhankar Rai"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/vinodeetD")}
                    name="Vinodeet Dewangan"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/kunalraje")}
                    name="Kunalraje Bhalerao"
                    post="Media & Publicity Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/silky")}
                    name="Silky Gupta"
                    post="Content & Communication Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/usmaanM")}
                    name="Usman Mansoor"
                    post="Technical Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/krishV")}
                    name="Krish Varshney"
                    post="Joint Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/anjaliV")}
                    name="Anjali Vemula"
                    post="Technical Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/rishabhA")}
                    name="Rishabh Anand"
                    post="Technical Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/gauravR")}
                    name="Gaurav Raj"
                    post="Joint Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/chetanA")}
                    name="Chetan Agrawal"
                    post="Membership Drive Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/saumyaK")}
                    name="Saumya Khushlani"
                    post="Web Developement Secretary"
                  />
                </motion.div>

                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <TeamImg
                    img={getCloudinaryImage("Team/sumayJ")}
                    name="Sumay Jain"
                    post="Photography & Video Editing Secretary"
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
                    img={getCloudinaryImage("Team/arnavM")}
                    name="Arnav Mahajan"
                    post="General Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/bhaskarK")}
                    name="Bhaskar Kumawat"
                    post="Finance Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/mahimaM")}
                    name="Mahima Mehra"
                    post="WIE Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/samarthK")}
                    name="Samarth Khare"
                    post="Event Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/nikitaV")}
                    name="Nikita Verma"
                    post="General Affairs Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/ajayK")}
                    name="Ajay Kumawat"
                    post="Management Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/hemantD")}
                    name="Hemant Dangi"
                    post="Student Engagement and Welfare Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/shivamD")}
                    name="Shivam Dhakrey"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/gouravM")}
                    name="Gourav Mishra"
                    post="Sponsorship & Marketing Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/vivekV")}
                    name="Vivek Vijaywargiya"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/amanS")}
                    name="Aman Shivawedy"
                    post="Pr & Promotion Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/shubhankarR")}
                    name="Shubhankar Rai"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/vinodeetD")}
                    name="Vinodeet Dewangan"
                    post="Logistics & Operations Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/kunalraje")}
                    name="Kunalraje Bhalerao"
                    post="Media & Publicity Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/silky")}
                    name="Silky Gupta"
                    post="Content & Communication Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/usmaanM")}
                    name="Usman Mansoor"
                    post="Technical Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/krishV")}
                    name="Krish Varshney"
                    post="Joint Secretary CSE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/anjaliV")}
                    name="Anjali Vemula"
                    post="Technical Secretary ECE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/rishabhA")}
                    name="Rishabh Anand"
                    post="Technical Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/gauravR")}
                    name="Gaurav Raj"
                    post="Joint Secretary EE"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/chetanA")}
                    name="Chetan Agrawal"
                    post="Membership Drive Secretary"
                  />
                </motion.div>
                <motion.div variants={item} className="w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/saumyaK")}
                    name="Saumya Khushlani"
                    post="Web Developement Secretary"
                  />
                </motion.div>

                <motion.div variants={item} className="col-span-2 w-full max-w-[18rem]">
                  <MobileTeamImg
                    img={getCloudinaryImage("Team/sumayJ")}
                    name="Sumay Jain"
                    post="Photography & Video Editing Secretary"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Team;
