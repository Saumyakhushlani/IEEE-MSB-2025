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
            className="hidden md:grid grid-cols-4 gap-6"
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
            className="hidden md:grid grid-cols-4 gap-6 justify-items-center"
          >
            <motion.div variants={item}>
              <TeamImg
                img="/team/Ayush.jpg"
                name="Ayush Kumar"
                post="Chairperson"
                membershipNumber="101641565"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/RahulAgarwal.jpg"
                name="Rahul Agarwal"
                post="Vice Chair Admin"
                membershipNumber="101833521"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/tanvi.jpg"
                name="Tanvi Sundarkar"
                post="Vice Chair Finance"
                membershipNumber="101833618"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/surbhi.jpg"
                name="Surabhi Sreejith"
                post="WIE Chair"
                membershipNumber="101833685"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/arunima.jpg"
                name="Arunima Pathak"
                post="Aarambh Coordinator, Head-Content"
                membershipNumber="101837200"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/hemant.jpg"
                name="Hemant Singh Rajput"
                post="Student's Convener"
                membershipNumber="101837609"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/prerna.jpeg"
                name="Prerna Chaurasiya"
                post="Event Coordinator"
                membershipNumber="101835115"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/nitin.jpg"
                name="Nitin Jangid"
                post="Head-General Affairs"
                membershipNumber="101833591"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/dhanvi.jpg"
                name="Dhanvi Shah"
                post="Head-Management"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/priyansh.jpg"
                name="Priyansh Mathur"
                post="Head-Student Management & Welfare"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/akash.jpg"
                name="Akash Anand"
                post="Head-Sponsorship & Marketing"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/prachi.jpg"
                name="Prachi Soni"
                post="Student Coordinator"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/Suryansh.jpg"
                name="Suryansh Sarathe"
                post="Head-Web Developement"
                membershipNumber="101837872"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/Abhishek.jpg"
                name="Abhishek Yadav"
                post="Head-Logistics and Operations"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/rishab.jpg"
                name="Rishabh Sonkar"
                post="Head-Pr & Publicity"
                membershipNumber="101878276"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/nidhi.jpg"
                name="Nidhi Meshram"
                post="Head-Media & Communications"
              />
            </motion.div>

            <div className="col-span-4 flex justify-center">
              <motion.div variants={item}>
                <TeamImg
                  img="/team/aaditya.jpg"
                  name="Aaditya Jain"
                  post="Head-Video Editing & Photography"
                  membershipNumber="101862726"
                />
              </motion.div>
            </div>
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
                img="/team/Ayush.jpg"
                name="Ayush Kumar"
                post="Chairperson"
                membershipNumber="101641565"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/RahulAgarwal.jpg"
                name="Rahul Agarwal"
                post="Vice Chair Admin"
                membershipNumber="101833521"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/tanvi.jpg"
                name="Tanvi Sundarkar"
                post="Vice Chair Finance"
                membershipNumber="101833618"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/surbhi.jpg"
                name="Surabhi Sreejith"
                post="WIE Chair"
                membershipNumber="101833685"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/arunima.jpg"
                name="Arunima Pathak"
                post="Aarambh Coordinator, Head-Content"
                membershipNumber="101837200"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/hemant.jpg"
                name="Hemant Singh Rajput"
                post="Student's Convener"
                membershipNumber="101837609"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/prerna.jpeg"
                name="Prerna Chaurasiya"
                post="Event Coordinator"
                membershipNumber="101835115"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/nitin.jpg"
                name="Nitin Jangid"
                post="Head-General Affairs"
                membershipNumber="101833591"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/dhanvi.jpg"
                name="Dhanvi Shah"
                post="Head-Management"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/priyansh.jpg"
                name="Priyansh Mathur"
                post="Head-Student Management & Welfare"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/akash.jpg"
                name="Akash Anand"
                post="Head-Sponsorship & Marketing"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/prachi.jpg"
                name="Prachi Soni"
                post="Student Coordinator"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/Suryansh.jpg"
                name="Suryansh Sarathe"
                post="Head-Web Developement"
                membershipNumber="101837872"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/Abhishek.jpg"
                name="Abhishek Yadav"
                post="Head-Logistics and Operations"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/rishab.jpg"
                name="Rishabh Sonkar"
                post="Head-Pr & Publicity"
                membershipNumber="101878276"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/nidhi.jpg"
                name="Nidhi Meshram"
                post="Head-Media & Communications"
              />
            </motion.div>
            <div className="col-span-4 flex justify-center">
              <motion.div variants={item}>
                <TeamImg
                  img="/team/aaditya.jpg"
                  name="Aaditya Jain"
                  post="Head-Video Editing & Photography"
                  membershipNumber="101862726"
                />
              </motion.div>
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
            className="hidden md:grid grid-cols-4 gap-6"
          >
            <motion.div variants={item}>
              <TeamImg
                img="/team/arnavM.jpg"
                name="Arnav Mahajan"
                post="General Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/bhaskarK.jpg"
                name="Bhaskar Kumawat"
                post="Finance Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/mahimaM.jpg"
                name="Mahima Mehra"
                post="WIE Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/anjaliM.png"
                name="Anjali Meena"
                post="Aarambh Secretary"
                objectPosition="center 30%"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/samarthK.jpg"
                name="Samarth Khare"
                post="Event Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/nikitaV.webp"
                name="Nikita Verma"
                post="General Affairs Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/ajayK.jpg"
                name="Ajay Kumawat"
                post="Management Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/hemantD.jpg"
                name="Hemant Dangi"
                post="Student Engagement and Welfare Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/shivamD.jpg"
                name="Shivam Dhakrey"
                post="Sponsorship & Marketing Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/gouravM.jpg"
                name="Gourav Mishra"
                post="Sponsorship & Marketing Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/vivekV.jpg"
                name="Vivek Vijaywargiya"
                post="Pr & Promotion Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/amanS.png"
                name="Aman Shivawedy"
                post="Pr & Promotion Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/shubhankarR.jpg"
                name="Shubhankar Rai"
                post="Logistics & Operations Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/vinodeetD.jpg"
                name="Vinodeet Dewangan"
                post="Logistics & Operations Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/kunalraje.jpg"
                name="Kunalraje Bhalerao"
                post="Media & Publicity Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/silky.jpg"
                name="Silky Gupta"
                post="Content & Communication Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/usmaanM.jpeg"
                name="Usmaan Mansoor"
                post="Technical Secretary CSE"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/krishV.jpg"
                name="Krish Varshney"
                post="Joint Secretary CSE"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/anjaliV.jpeg"
                name="Anjali Vemula"
                post="Technical Secretary ECE"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/sushantD.jpg"
                name="Sushant Dwivedi"
                post="Joint Secretary ECE"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/rishabhA.webp"
                name="Rishabh Anand"
                post="Technical Secretary EE"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/gauravR.jpg"
                name="Gaurav Raj"
                post="Joint Secretary EE"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/chetanA.jpg"
                name="Chetan Agrawal"
                post="Membership Drive Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <TeamImg
                img="/team/saumyaK.webp"
                name="Saumya Khushlani"
                post="Web Developement Secretary"
              />
            </motion.div>
            <div className="col-span-4 flex justify-center">
              <motion.div variants={item}>
                <TeamImg
                  img="/team/sumayJ.png"
                  name="Sumay Jain"
                  post="Photography & Video Editing Secretary"
                />
              </motion.div>
            </div>
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
                img="/team/arnavM.jpg"
                name="Arnav Mahajan"
                post="General Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/bhaskarK.jpg"
                name="Bhaskar Kumawat"
                post="Finance Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/mahimaM.jpg"
                name="Mahima Mehra"
                post="WIE Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/anjaliM.png"
                name="Anjali Meena"
                post="Aarambh Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/samarthK.jpg"
                name="Samarth Khare"
                post="Event Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/nikitaV.webp"
                name="Nikita Verma"
                post="General Affairs Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/ajayK.jpg"
                name="Ajay Kumawat"
                post="Management Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/hemantD.jpg"
                name="Hemant Dangi"
                post="Student Engagement and Welfare Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/shivamD.jpg"
                name="Shivam Dhakrey"
                post="Sponsorship & Marketing Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/gouravM.jpg"
                name="Gourav Mishra"
                post="Sponsorship & Marketing Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/vivekV.jpg"
                name="Vivek Vijaywargiya"
                post="Pr & Promotion Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/amanS.png"
                name="Aman Shivawedy"
                post="Pr & Promotion Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/shubhankarR.jpg"
                name="Shubhankar Rai"
                post="Logistics & Operations Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/vinodeetD.jpg"
                name="Vinodeet Dewangan"
                post="Logistics & Operations Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/kunalraje.jpg"
                name="Kunalraje Bhalerao"
                post="Media & Publicity Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/silky.jpg"
                name="Silky Gupta"
                post="Content & Communication Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/usmaanM.jpeg"
                name="Usmaan Mansoor"
                post="Technical Secretary CSE"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/krishV.jpg"
                name="Krish Varshney"
                post="Joint Secretary CSE"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/anjaliV.jpeg"
                name="Anjali Vemula"
                post="Technical Secretary ECE"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/sushantD.jpg"
                name="Sushant Dwivedi"
                post="Joint Secretary ECE"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/rishabhA.webp"
                name="Rishabh Anand"
                post="Technical Secretary EE"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/gauravR.jpg"
                name="Gaurav Raj"
                post="Joint Secretary EE"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/chetanA.jpg"
                name="Chetan Agrawal"
                post="Membership Drive Secretary"
              />
            </motion.div>
            <motion.div variants={item}>
              <MobileTeamImg
                img="/team/saumyaK.webp"
                name="Saumya Khushlani"
                post="Web Developement Secretary"
              />
            </motion.div>
            <div className="col-span-4 flex justify-center">
              <motion.div variants={item}>
                <TeamImg
                  img="/team/sumayJ.png"
                  name="Sumay Jain"
                  post="Photography & Video Editing Secretary"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Team;
