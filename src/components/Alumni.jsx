import React, { useState } from 'react'

const Alumni = () => {
    const [selectedAlumni, setSelectedAlumni] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const alumniData = [
        {
            year: 2025,
            members: [
                {
                    name: "Tilak Mangal",
                    branch: "CSE",
                    post: "Chairperson",
                    currentDesignation: "Upcoming Summer Intern at Deutsche Bank",
                    linkedin: "https://www.linkedin.com/in/tilak-mangal-768855241/",
                    image: "/Alumini/2025_batch/Tilak.jpg"
                },
                {
                    name: "Rohaan Khan",
                    branch: "EE",
                    post: "Vice Chairperson Finance",
                    currentDesignation: "Upcoming MTS at ZL technologies",
                    linkedin: "https://www.linkedin.com/in/rohaan-khan-334135244/",
                    image: "/Alumini/2025_batch/IMG_20230504_103227 - Rohaan khan.jpg"
                },
                {
                    name: "Ayush Verma",
                    branch: "ECE",
                    post: "Vice Chairperson Admin",
                    currentDesignation: "Upcoming Associate Data Engineer at Gramener",
                    linkedin: "https://www.linkedin.com/in/ayush-kr-verma-2b986922b/",
                    image: "/Alumini/2025_batch/1683175437356 - Ayush Verma.jpg"
                },
                {
                    name: "Vaishnavi Gupta",
                    branch: "CSE",
                    post: "WIE Chairperson",
                    currentDesignation: "SDE Intern'25 at Porter",
                    linkedin: "https://www.linkedin.com/in/vaishnavi-gupta-74a885241/",
                    image: "/Alumini/2025_batch/IMG_20230506_162452 - Vaishnavi Gupta.jpg"
                },
                {
                    name: "Shubh Srivastava",
                    branch: "MME",
                    post: "Aarambh Coordinator",
                    currentDesignation: "Operations Manager Intern at Amazon",
                    linkedin: "https://www.linkedin.com/in/shubh-s/",
                    image: "/Alumini/2025_batch/1681426647154 - Shubh Shrivastava.jpeg"
                },
                {
                    name: "Jatin Saraf",
                    branch: "CSE",
                    post: "Event Coordinator",
                    currentDesignation: "DE Intern at Sigmoid",
                    linkedin: "https://www.linkedin.com/in/jatin-saraf-209307225/",
                    image: "/Alumini/2025_batch/IMG_20230312_022324_479 - Jatin Saraf.jpg"
                },
                {
                    name: "Deepanshu Jain",
                    branch: "CSE",
                    post: "Convener",
                    currentDesignation: "Software Developer Intern at InfoEdge",
                    linkedin: "https://www.linkedin.com/in/deepanshu-jain-90831b208/",
                    image: "/Alumini/2025_batch/website_photo - Deepanshu Jain.jpg"
                },
                {
                    name: "Abin John",
                    branch: "ECE",
                    post: "Head-Sponsorship and Marketing",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/abinjohn2003/",
                    image: "/Alumini/2025_batch/Abin.jpg"
                },
                {
                    name: "Anumolu Yoktha Rosaiah",
                    branch: "CSE",
                    post: "Head-Logistics and Operations",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/anumolu-rosaiah/",
                    image: "/Alumini/2025_batch/Anumolu.jpg"
                },
                {
                    name: "Harsh Gautam",
                    branch: "MME",
                    post: "Head-General Affairs",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/iharshka/",
                    image: "/Alumini/2025_batch/dev - Harsh Gautam.png"
                },
                {
                    name: "Anushka Sharma",
                    branch: "ECE",
                    post: "Head-Public Realtions",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/anushka-sharma-25131b246/",
                    image: "/Alumini/2025_batch/37A0C588-91F5-4002-BF04-5A4D7E2F1EAA - Anushka Sharma.jpeg"
                },
                {
                    name: "Naved Sheikh",
                    branch: "EE",
                    post: "Technical Head",
                    currentDesignation: "Digital Technology Intern at GE Vernova",
                    linkedin: "https://www.linkedin.com/in/naved-sheikh/",
                    image: "/Alumini/2025_batch/IMG_4464 - Naved Sheikh.jpeg"
                },
                {
                    name: "Achyuta Gupta",
                    branch: "Civil",
                    post: "Head-Management",
                    currentDesignation: "Software Developer at Codesmith",
                    linkedin: "https://www.linkedin.com/in/achyuta-gupta-769104228/",
                    image: "/Alumini/2025_batch/Achyuta.jpg"
                },
                {
                    name: "Swapnil Sharma",
                    branch: "CSE",
                    post: "Head-content and communication",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/swapnil-sharma-819664241/",
                    image: "/Alumini/2025_batch/DSCN3843 - Swapnil Sharma.JPG"
                },
                {
                    name: "Swastik khare",
                    branch: "Mechanical",
                    post: "Head video editing",
                    currentDesignation: "Algorithm Development Intern at Reach Technologies",
                    linkedin: "https://www.linkedin.com/in/swastikkhare10/",
                    image: "/Alumini/2025_batch/IMG_20230507_004736 - The Youtube Guy.jpg"
                },
                {
                    name: "Yogesh Pratap Singh",
                    branch: "Mechanical",
                    post: "Head-Photography",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/yogesh-pratap-singh-906b571a5/",
                    image: "/Alumini/2025_batch/SAVE_20230506_154459 - Yogesh Pratap Singh.jpg"
                },
                {
                    name: "Chitransh Dubey",
                    branch: "EE",
                    post: "Head-PR and Promotions",
                    currentDesignation: "Upcoming GET at Reliance",
                    linkedin: "https://www.linkedin.com/in/chitransh-dubey-7b96b424a/",
                    image: "/Alumini/2025_batch/IMG_20220921_223316 - Chitransh Dubey.jpg"
                },
                {
                    name: "Parul Singh",
                    branch: "CSE",
                    post: "Head-PR and Promotions",
                    currentDesignation: "SDE Intern at WBD",
                    linkedin: "https://www.linkedin.com/in/parul-singh-01958b229/",
                    image: "/Alumini/2025_batch/20230122_183457 - Parul Singh.jpg"
                },
                {
                    name: "Nitesh Kumar Gond",
                    branch: "EE",
                    post: "Head-Membership drive",
                    currentDesignation: "Intern Trainee at NCL Singrauli",
                    linkedin: "https://www.linkedin.com/in/nitesh-kumar-a9625b246/",
                    image: "/Alumini/2025_batch/IMG-20230125-WA0000 - nitesh kumar.jpg"
                }
            ]
        },
        {
            year: 2024,
            members: [
                {
                    name: "Devansh Kapri",
                    branch: "CSE",
                    post: "Chairperson",
                    currentDesignation: "Engineering Analyst at Goldman Sachs",
                    linkedin: "https://www.linkedin.com/in/devansh-kapri/",
                    image: "/Alumini/2024_batch/2 - Devansh Kapri.jpeg"
                },
                {
                    name: "Aditya Pagnis",
                    branch: "MSME",
                    post: "Vice Chair Finance",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/aditya-pagnis-0a927b218/",
                    image: "/Alumini/2024_batch/IMG_20221125_210906~2 - Aditya Pagnis.jpg"
                },
                {
                    name: "Arya Jain",
                    branch: "Mechanical",
                    post: "Vice Chairperson Admin",
                    currentDesignation: "Software Engineering Associate at Dassault Systemes",
                    linkedin: "https://www.linkedin.com/in/arya-jain-0816421b8/",
                    image: "/Alumini/2024_batch/IMG_20230305_232239_950 - Arya Jain.jpg"
                },
                {
                    name: "Vidushi Sharma",
                    branch: "CSE",
                    post: "WIE Chair",
                    currentDesignation: "Analyst at Goldman Sachs",
                    linkedin: "https://www.linkedin.com/in/vidushi-sharma-719134204/",
                    image: "/Alumini/2024_batch/IMG_5335 - Vidushi Sharma.JPG"
                },
                {
                    name: "Vinayak Tiwari",
                    branch: "CSE",
                    post: "Aarambh coordinator",
                    currentDesignation: "SDE at JPMorgan Chase & Co.",
                    linkedin: "https://www.linkedin.com/in/vinayak-tiwari-4844aa216/",
                    image: "/Alumini/2024_batch/IMG_20230416_002720 - Vinayak Tiwari.jpg"
                },
                {
                    name: "Anshul Garg",
                    branch: "EE",
                    post: "Event Coordinator",
                    currentDesignation: "Exponential Maverick at Hexaware Technologies",
                    linkedin: "https://www.linkedin.com/in/anshul-garg-01516b218/",
                    image: "/Alumini/2024_batch/IMG_20230506_173304 - Anshul Garg.jpg"
                },
                {
                    name: "Rishabh Gupta",
                    branch: "EE",
                    post: "Convener",
                    currentDesignation: "SDE at JP Morgan Chase & Co.",
                    linkedin: "https://www.linkedin.com/in/rishabh220502/",
                    image: "/Alumini/2024_batch/IMG_20230115_021851 - Rishabh Gupta.jpg"
                },
                {
                    name: "Abhiram",
                    branch: "ECE",
                    post: "Head-Sponsorship and Marketing",
                    currentDesignation: "R&D Engineer Trainee at Qbit Labs",
                    linkedin: "https://www.linkedin.com/in/abhiram-muddapu-57a54820a/",
                    image: "/Alumini/2024_batch/Abhiram.png"
                },
                {
                    name: "Priyansh Agarwal",
                    branch: "ECE",
                    post: "Head-Logistics and Operations",
                    currentDesignation: "SDET at PhonePe",
                    linkedin: "https://www.linkedin.com/in/priyansh-agarwal-97620b22a/",
                    image: "/Alumini/2024_batch/20230408_194225 - Priyansh Agarwal.jpg"
                },
                {
                    name: "Pratyusha Patidar",
                    branch: "CSE",
                    post: "Head-General Affairs",
                    currentDesignation: "Software Engineer at JP Morgan Chase & Co.",
                    linkedin: "https://www.linkedin.com/in/pratyusha-patidar/",
                    image: "/Alumini/2024_batch/IMG_6880~2 - Pratyusha Patidar.jpg"
                },
                {
                    name: "Rajnandini Tiwari",
                    branch: "ECE",
                    post: "Head-Public Realtions",
                    currentDesignation: "SDE1 at UKG",
                    linkedin: "https://www.linkedin.com/in/rajnandini-tiwari-b3335b19b/",
                    image: "/Alumini/2024_batch/Rajnandini.jpg"
                },
                {
                    name: "Maheepathi Veena Rao",
                    branch: "ECE",
                    post: "Technical Head",
                    currentDesignation: "N/A",
                    linkedin: "https://www.linkedin.com/in/maheepathi-veena-rao-5bb544204/",
                    image: "/Alumini/2024_batch/Veena.jpg"
                },
                {
                    name: "Sonali Argal",
                    branch: "ECE",
                    post: "Head-Design",
                    currentDesignation: "Software Engineer",
                    linkedin: "https://www.linkedin.com/in/sonali-argal/",
                    image: "/Alumini/2024_batch/Sonali.jpg"
                },
                {
                    name: "Garvit Chaudhary",
                    branch: "CSE",
                    post: "Head-Web Developement",
                    currentDesignation: "Program Associate at Wells Fargo",
                    linkedin: "https://www.linkedin.com/in/garvit-choudhary-00a6081b2/",
                    image: "/Alumini/2024_batch/Garvit.jpg"
                },
                {
                    name: "Kritika Sukhramani",
                    branch: "CSE",
                    post: "Head-Social Media and Publicity",
                    currentDesignation: "SDE at JP Morgan Chase and Co.",
                    linkedin: "https://www.linkedin.com/in/kritsss/",
                    image: "/Alumini/2024_batch/IMG_20230409_115821 - Kritika Sukhramani.jpg"
                },
                {
                    name: "Ayush Agarwal",
                    branch: "ECE",
                    post: "Head-Team Management",
                    currentDesignation: "Specialist Programmer at Infosys",
                    linkedin: "https://www.linkedin.com/in/ayushagrawal26/",
                    image: "/Alumini/2024_batch/Ayush.png"
                }
            ]
        },
        {
            year: 2023,
            members: [
                {
                    name: "Muskan Soni",
                    branch: "ECE",
                    post: "Chairperson",
                    currentDesignation: "Graduate Analyst at Deutsche Bank",
                    linkedin: "https://www.linkedin.com/in/muskan-soni-42b165199",
                    image: "/Alumini/2023_batch/muskan.jfif"
                },
                {
                    name: "Vansh Kapoor",
                    branch: "Mechanical",
                    post: "Vice Chair Finance",
                    currentDesignation: "Software Developer at Samudai, Dubai",
                    linkedin: "https://www.linkedin.com/in/vanshk",
                    image: "/Alumini/2023_batch/Vansh.png"
                },
                {
                    name: "Vedant Kalia",
                    branch: "ECE",
                    post: "Vice Chairperson Admin",
                    currentDesignation: "Associate application developer at OFSS",
                    linkedin: "https://www.linkedin.com/in/vedantkalia",
                    image: "/Alumini/2023_batch/Vedant.png"
                },
                {
                    name: "Aditi Gupta",
                    branch: "ECE",
                    post: "WIE Chair",
                    currentDesignation: "Pursuing PG Diploma from XLRI, Jamshedpur",
                    linkedin: "https://www.linkedin.com/in/aditi-gupta-ba0a2b1ab",
                    image: "/Alumini/2023_batch/Aditi.png"
                },
                {
                    name: "Preeti Arya",
                    branch: "CSE",
                    post: "Membership Drive Head",
                    currentDesignation: "Gradute Analyst at Deutsche Bank",
                    linkedin: "https://www.linkedin.com/in/preeti-arya-0468521b2",
                    image: "/Alumini/2023_batch/Preeti.png"
                },
                {
                    name: "Bhumika Gupta",
                    branch: "CSE",
                    post: "Technical Head",
                    currentDesignation: "Winter SDE Intern at Flipkart",
                    linkedin: "https://www.linkedin.com/in/guptabhumika-12",
                    image: "/Alumini/2023_batch/Bhumika.png"
                },
                {
                    name: "Utkarsh Mishra",
                    branch: "MSME",
                    post: "Web Head",
                    currentDesignation: "Data Analyst at Incedo Inc.",
                    linkedin: "https://www.linkedin.com/in/harshutkarshmishra",
                    image: "/Alumini/2023_batch/Utkarsh.png"
                },
                {
                    name: "Aashika Jain",
                    branch: "CSE",
                    post: "Design Head",
                    currentDesignation: "Software Engineer at Atlassian",
                    linkedin: "https://www.linkedin.com/in/aashika-jain-865a87155",
                    image: "/Alumini/2023_batch/Aashika.png"
                },
                {
                    name: "Vankala Akshitha",
                    branch: "Civil",
                    post: "Event Head",
                    currentDesignation: "----",
                    linkedin: "#",
                    image: "/Alumini/2023_batch/Akshitha.png"
                }
            ]
        },
        {
            year: 2022,
            members: [
                {
                    name: "Deepanshu Saxena",
                    branch: "ECE",
                    post: "Chairperson",
                    currentDesignation: "Associate Data Scientist at Sigmoid",
                    linkedin: "https://www.linkedin.com/in/deepanshu-saxena-950011169/",
                    image: "/Alumini/2022_batch/deepanshu.jfif"
                },
                {
                    name: "Anirudh Kallakuri",
                    branch: "ECE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Associate Software Developer at Oracle",
                    linkedin: "https://www.linkedin.com/in/anirudh-kallakuri/",
                    image: "/Alumini/2022_batch/Anirudh.jfif"
                },
                {
                    name: "Aditya Pahariya",
                    branch: "Electrical",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Software Engineer at Mathworks",
                    linkedin: "https://www.linkedin.com/in/aditya-pahariya/",
                    image: "/Alumini/2022_batch/adityajfif.jfif"
                },
                {
                    name: "Mihika Singh",
                    branch: "ECE",
                    post: "WIE Chair",
                    currentDesignation: "------------",
                    linkedin: "https://www.linkedin.com/in/mihika-singh-ab375a195/",
                    image: "/Alumini/2022_batch/mihika.jfif"
                },
                {
                    name: "Akshat Gupta",
                    branch: "CSE",
                    post: "Membership Drive Head",
                    currentDesignation: "---------------",
                    linkedin: "#",
                    image: "/Alumini/2022_batch/akshat.jfif"
                },
                {
                    name: "Abhishek Garg",
                    branch: "ECE",
                    post: "Technical Head",
                    currentDesignation: "Software Engineer at JPMorgan Chase & Co.",
                    linkedin: "https://www.linkedin.com/in/abhishek-garg-7062",
                    image: "/Alumini/2022_batch/agarg.jfif"
                },
                {
                    name: "Paresha Soni",
                    branch: "ECE",
                    post: "Social Media Head",
                    currentDesignation: "Pursuing PGDBMA from IIM Khozikhode",
                    linkedin: "https://www.linkedin.com/in/pareshasoni/",
                    image: "/Alumini/2022_batch/paresha.jfif"
                },
                {
                    name: "Archit Chibbar",
                    branch: "ECE",
                    post: "Event Head",
                    currentDesignation: "Product Manager at College Duniya",
                    linkedin: "https://www.linkedin.com/in/archit-chibbar-10790516a/",
                    image: "/Alumini/2022_batch/archit.jfif"
                },
                {
                    name: "Aditi Khandelwal",
                    branch: "CSE",
                    post: "Web Head",
                    currentDesignation: "Software Engineer at Atlassian",
                    linkedin: "https://www.linkedin.com/in/aditi-khandelwal-799480172/",
                    image: "/Alumini/2022_batch/aditi.jfif"
                },
                {
                    name: "Paras Dandwani",
                    branch: "MSME",
                    post: "Web Head",
                    currentDesignation: "Backend engineer at GKMIT",
                    linkedin: "https://www.linkedin.com/in/paras-dandwani/",
                    image: "/Alumini/2022_batch/paras.jfif"
                },
                {
                    name: "Ashutosh Udai Raj",
                    branch: "ECE",
                    post: "Management Head",
                    currentDesignation: "Pursuing MBA from IIT Bombay",
                    linkedin: "https://www.linkedin.com/in/ashutoshraaj/",
                    image: "/Alumini/2022_batch/aur.jfif"
                },
                {
                    name: "Ashutosh Bundela",
                    branch: "CSE",
                    post: "Media Head",
                    currentDesignation: "Associate Software Developer at Oracle",
                    linkedin: "https://www.linkedin.com/in/ashutosh-bundela-476810190/",
                    image: "/Alumini/2022_batch/ashutosh.jfif"
                },
                {
                    name: "Kunjesh Butani",
                    branch: "Electrical",
                    post: "Multimedia Head",
                    currentDesignation: "Software Developer at Amazon",
                    linkedin: "https://www.linkedin.com/in/bkunjesh/",
                    image: "/Alumini/2022_batch/kunjesh.jfif"
                },
                {
                    name: "Raja Gupta",
                    branch: "CSE",
                    post: "Permissions Head",
                    currentDesignation: "Software Developer at Amazon",
                    linkedin: "https://www.linkedin.com/in/raja-gupta-1113b5184/",
                    image: "/Alumini/2022_batch/raja.jfif"
                },
                {
                    name: "Bhawik Birha",
                    branch: "Electrical",
                    post: "Photography Head",
                    currentDesignation: "Associate Product Manager",
                    linkedin: "https://www.linkedin.com/in/bhawik-birha/",
                    image: "/Alumini/2021_batch/ritwik.jfif"
                }
            ]
        },
        {
            year: 2021,
            members: [
                {
                    name: "Ritwik Mishra",
                    branch: "Electrical",
                    post: "Chairperson",
                    currentDesignation: "SDE at Amazon",
                    linkedin: "https://www.linkedin.com/in/ritwikmish/",
                    image: "/Alumini/2021_batch/ritwik.jfif"
                },
                {
                    name: "Anmol Gupta",
                    branch: "Electrical",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Computer Engineering Graduate Student at Arizona State University",
                    linkedin: "https://www.linkedin.com/in/gupta-anmol17/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Harshit Pathak",
                    branch: "CSE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Ex-SDE at Incendo",
                    linkedin: "https://www.linkedin.com/in/pathakharshit/",
                    image: "/Alumini/2021_batch/harshit.jfif"
                },
                {
                    name: "Uttara Athale",
                    branch: "ECE",
                    post: "WIE Chair",
                    currentDesignation: "E.L.I.T.E. Manager at Capegemini",
                    linkedin: "https://www.linkedin.com/in/uttara-athale/",
                    image: "/Alumini/2021_batch/uttara.jfif"
                },
                {
                    name: "Shruti Jain",
                    branch: "CSE",
                    post: "Vice WIE Chair",
                    currentDesignation: "---------------",
                    linkedin: "#",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Ayush Kumar Mishra",
                    branch: "Electrical",
                    post: "Management Head",
                    currentDesignation: "Software Engineer at JPMorgan Chase & Co.",
                    linkedin: "https://www.linkedin.com/in/ayushkmishra/",
                    image: "/Alumini/2021_batch/ayush.jfif"
                },
                {
                    name: "Vipul Sharma",
                    branch: "ECE",
                    post: "Joint Technical Head",
                    currentDesignation: "Pursing MS from Brown University",
                    linkedin: "https://www.linkedin.com/in/vipul-sharma9/",
                    image: "/Alumini/2021_batch/vipul.jfif"
                },
                {
                    name: "Bhanu Pratap Singh",
                    branch: "Chemical",
                    post: "Event Head",
                    currentDesignation: "------------",
                    linkedin: "#",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Amar Kumar",
                    branch: "CSE",
                    post: "Web Head",
                    currentDesignation: "Admin at Salesforce",
                    linkedin: "https://www.linkedin.com/in/amar-kumar-71583a167/",
                    image: "/Alumini/2021_batch/amar.jfif"
                },
                {
                    name: "Khyati Upadhyay",
                    branch: "Electrical",
                    post: "Social Media Head",
                    currentDesignation: "---------",
                    linkedin: "https://www.linkedin.com/in/khyati-upadhyay-ba806a172/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Sakshi Maheshwari",
                    branch: "MSME",
                    post: "Memebership Drive Head",
                    currentDesignation: "Management Consulting Analyst at Accenture",
                    linkedin: "https://www.linkedin.com/in/sakshimaheshwari99/",
                    image: "/Alumini/2021_batch/sakshi.jfif"
                },
                {
                    name: "Yash Raj Sharma",
                    branch: "Electrical",
                    post: "Sponsorship Head",
                    currentDesignation: "------------",
                    linkedin: "https://www.linkedin.com/in/yashraj-sharma-47906b172/",
                    image: "/Alumini/2021_batch/yashraj.jfif"
                },
                {
                    name: "Sreeja Indrapau",
                    branch: "Civil",
                    post: "Design Head",
                    currentDesignation: "Senior Project Engineer at Wipro Ltd.",
                    linkedin: "https://www.linkedin.com/in/sreeja-indarapu-75206b172/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Swapnil Kannojia",
                    branch: "ECE",
                    post: "Joint Technical Head",
                    currentDesignation: "CS Graduate Student at ASU",
                    linkedin: "https://www.linkedin.com/in/swapnil-kannojia-5675b5171/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Ishan Vijayvergia",
                    branch: "ECE",
                    post: "Joint Technical Head",
                    currentDesignation: "SWE at JPMorgan Chase & Co.",
                    linkedin: "https://www.linkedin.com/in/ishanvj/",
                    image: "/Alumini/2021_batch/ishan.jfif"
                }
            ]
        },
        {
            year: 2020,
            members: [
                {
                    name: "Vedanti Deshmukh",
                    branch: "ECE",
                    post: "Chairperson",
                    currentDesignation: "AFBP Operations Manager At Amazon",
                    linkedin: "https://www.linkedin.com/in/vedanti-deshmukh/",
                    image: "/Alumini/2020_batch/Vedanti Deshmukh.jpg"
                },
                {
                    name: "Sanchay Kanade",
                    branch: "ECE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "MSCS Graduate Student at Rutgers University, New Brunswick",
                    linkedin: "https://www.linkedin.com/in/sanchaykanade/",
                    image: "/Alumini/2020_batch/sanchay kanade.jpg"
                },
                {
                    name: "Akshat Jain",
                    branch: "CSE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Digital Specialist At Infosys",
                    linkedin: "https://www.linkedin.com/in/akshat-jain-730789238/",
                    image: "/Alumini/2020_batch/akshat jain.jpg"
                },
                {
                    name: "Priyanshi Maheshwari",
                    branch: "CSE",
                    post: "WIE Chaire",
                    currentDesignation: "Software Enginee At Google",
                    linkedin: "https://www.linkedin.com/in/priyanshi-maheshwari-911760170/",
                    image: "/Alumini/2020_batch/Priyanshi Maheshwari.jpg"
                },
                {
                    name: "Shanmukhi Banala",
                    branch: "CSE",
                    post: "Vice WIE Chaire",
                    currentDesignation: "-------------",
                    linkedin: "https://www.linkedin.com/in/shanmukhi-banala-539650150/",
                    image: "/Alumini/2020_batch/shanmukhi banala.jpg"
                },
                {
                    name: "Aman Waoo",
                    branch: "Electrical",
                    post: "Management Head",
                    currentDesignation: "Data Science Intern At Schlumberger",
                    linkedin: "https://www.linkedin.com/in/aman-waoo/",
                    image: "/Alumini/2020_batch/aman waoo.jpg"
                },
                {
                    name: "Soumavo Ghosh",
                    branch: "Electrical",
                    post: "Techincal Head",
                    currentDesignation: "-----------",
                    linkedin: "https://www.linkedin.com/in/soumavo-ghosh-813b9b87/",
                    image: "/Alumini/2020_batch/soumavo ghosh.jpg"
                },
                {
                    name: "Kartik Rathore",
                    branch: "ECE",
                    post: "Event Head",
                    currentDesignation: "Data Science Intern At Schlumberger",
                    linkedin: "https://www.linkedin.com/in/kartik-rathore-b8558a13a/",
                    image: "/Alumini/2020_batch/kartik rathore.jpg"
                },
                {
                    name: "Rishabh Tripathi",
                    branch: "CSE",
                    post: "Web Head",
                    currentDesignation: "------------",
                    linkedin: "https://www.linkedin.com/in/rishabh-tripathi-92a5851b2/",
                    image: "/Alumini/2020_batch/rishabh tripathi.jpg"
                },
                {
                    name: "Geet Parmar",
                    branch: "ECE",
                    post: "Multimedia Head",
                    currentDesignation: "Technical Configuration Specialist At Just Appraised",
                    linkedin: "https://www.linkedin.com/in/geet-parmar-480546108/",
                    image: "/Alumini/2020_batch/geet parmer.jpg"
                },
                {
                    name: "Gargee Tripathi",
                    branch: "Electrical",
                    post: "Membership Drive Head",
                    currentDesignation: "Associate Developer At IBM",
                    linkedin: "https://www.linkedin.com/in/gargee-tripathi/",
                    image: "/Alumini/2020_batch/gargee tripathi.jpg"
                },
                {
                    name: "Pragya Binjwa",
                    branch: "ECE",
                    post: "Sponsorship and Social Media Head",
                    currentDesignation: "Summer Associate At Boston Consulting Group",
                    linkedin: "https://www.linkedin.com/in/pragya-binjwa-0973851b1/",
                    image: "/Alumini/2020_batch/Pragya Binjwa.jpg"
                },
                {
                    name: "Manideep Yerraguntla",
                    branch: "ECE",
                    post: "Design Head",
                    currentDesignation: "Signal Processing Engineer AT Texas Instruments",
                    linkedin: "https://www.linkedin.com/in/yerraguntla-manideep-67202a1aa/",
                    image: "/Alumini/2020_batch/yerraguntla manideep.jpg"
                }
            ]
        },
        {
            year: 2019,
            members: [
                {
                    name: "Kapil Kukreja",
                    branch: "Electrical",
                    post: "Chairperson",
                    currentDesignation: "-----------",
                    linkedin: "https://www.linkedin.com/in/kapil-kukreja-7712a0134/",
                    image: "/Alumini/2019_batch/kapil kukreja.jpg"
                },
                {
                    name: "Nikhil Kulshreshtha",
                    branch: "ECE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Core Strategy Engineer at Bharti Airtel",
                    linkedin: "https://www.linkedin.com/in/nikhil-kulshreshtha-065098132/",
                    image: "/Alumini/2019_batch/Nikhil Kulshreshtha.jpg"
                },
                {
                    name: "Ayush Agarwal",
                    branch: "Electrical",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Associate At Futures First",
                    linkedin: "https://www.linkedin.com/in/ayush-agarwal-3202a1134/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Rochika Garg",
                    branch: "Electrical",
                    post: "WIE Chaire",
                    currentDesignation: "----------",
                    linkedin: "https://www.linkedin.com/in/rochika-garg-1a4464134",
                    image: "/Alumini/2019_batch/rochika garg.jpg"
                },
                {
                    name: "Vaidika Bapna",
                    branch: "CSE",
                    post: "Vice WIE Chaire",
                    currentDesignation: "Software Engineer at ServiceNow",
                    linkedin: "https://www.linkedin.com/in/vaidika-bapna-4b7a59134",
                    image: "/Alumini/2019_batch/vaidika bapna.jpg"
                },
                {
                    name: "Varun Gupta",
                    branch: "Electrical",
                    post: "Management Head",
                    currentDesignation: "----------",
                    linkedin: "https://www.linkedin.com/in/ayush-agarwal-3202a1134/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Sheetal Nayak",
                    branch: "CSE",
                    post: "Techincal Head",
                    currentDesignation: "----------",
                    linkedin: "https://www.linkedin.com/in/sheetal-nayak-profile/",
                    image: "/Alumini/2019_batch/sheetal nayak.jpg"
                },
                {
                    name: "Arpan Jain",
                    branch: "ECE",
                    post: "Event Head",
                    currentDesignation: "Software engineer at PhonePe",
                    linkedin: "https://www.linkedin.com/in/arpan-j-b09611103",
                    image: "/Alumini/2019_batch/arpan j.jpg"
                },
                {
                    name: "Amit Kumar Vishwakarma",
                    branch: "ECE",
                    post: "Web Head",
                    currentDesignation: "----------",
                    linkedin: "#",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Sreeja Deb",
                    branch: "CSE",
                    post: "Media Head",
                    currentDesignation: "Software Engineer At Microsoft",
                    linkedin: "https://www.linkedin.com/in/sreeja-deb-887192135",
                    image: "/Alumini/2019_batch/sreeja deb.jpg"
                },
                {
                    name: "Prakhar Jain",
                    branch: "CSE",
                    post: "Membership Drive Head",
                    currentDesignation: "Software Development Engineer At Amazon",
                    linkedin: "https://www.linkedin.com/in/prakharjain927",
                    image: "/Alumini/2019_batch/prakhar jain.jpg"
                },
                {
                    name: "Aman Joshi",
                    branch: "Chemical",
                    post: "Permissions & Publicity Head",
                    currentDesignation: "Product Manager At Microsoft",
                    linkedin: "https://www.linkedin.com/in/amanjoshi7890",
                    image: "/Alumini/2019_batch/aman joshi.jpg"
                },
                {
                    name: "Vamshi Nagulapally",
                    branch: "ECE",
                    post: "Design Head",
                    currentDesignation: "Product Development Engineer At Phenom",
                    linkedin: "https://www.linkedin.com/in/vamshinagulapally",
                    image: "/Alumini/2019_batch/vamshi.jpg"
                },
                {
                    name: "Yashraj Shrivastava",
                    branch: "Electrical",
                    post: "Photography Head",
                    currentDesignation: "Investment Banking Intern At Paramone Group of Companies",
                    linkedin: "https://www.linkedin.com/in/shrivastava-yashraj",
                    image: "/Alumini/2019_batch/yashraj.jpg"
                }
            ]
        },
        {
            year: 2018,
            members: [
                {
                    name: "Saransh gupta",
                    branch: "CSE",
                    post: "Chairperson",
                    currentDesignation: "-------------",
                    linkedin: "https://www.linkedin.com/in/saransh-gupta-38872b128/?originalSubdomain=in",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Abhishek Ranjan Singh",
                    branch: "Electrical",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Robotics Software Engineer at Rizse",
                    linkedin: "https://www.linkedin.com/in/arsingh3/",
                    image: "/Alumini/2018_batch/abhishek.jfif"
                },
                {
                    name: "Amey Kasbe",
                    branch: "ECE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "--------------",
                    linkedin: "https://www.linkedin.com/in/ameykasbe/",
                    image: "/Alumini/2018_batch/amey.jfif"
                },
                {
                    name: "Aditya Singhal",
                    branch: "CSE",
                    post: "Management Head",
                    currentDesignation: "Reliability Engineering and Asset Management-Electrical, Reliance Industries Ltd",
                    linkedin: "https://www.linkedin.com/in/aditya-singhal-522730111/?originalSubdomain=in",
                    image: "/Alumini/2018_batch/aditya.jfif"
                },
                {
                    name: "Akhil Pratap Singh",
                    branch: "ECE",
                    post: "Vice WIE Chaire",
                    currentDesignation: "Application Engineer Proteantecs",
                    linkedin: "#",
                    image: "/Alumini/2021_batch/shruti.jfif"
                },
                {
                    name: "Sanket Kumar Gautam",
                    branch: "CSE",
                    post: "Event Head",
                    currentDesignation: "Software Engineer II at Amazon",
                    linkedin: "https://www.linkedin.com/in/sanketgautam/?originalSubdomain=in",
                    image: "/Alumini/2018_batch/sanket.jfif"
                },
                {
                    name: "Nabin Jaiswal",
                    branch: "ECE",
                    post: "Web Head",
                    currentDesignation: "Chief Product Officer at Codewing Solutions,Nepal",
                    linkedin: "https://www.linkedin.com/in/nabinjaiswal/?originalSubdomain=np",
                    image: "/Alumini/2018_batch/nabin.jfif"
                },
                {
                    name: "Devashish Tiwary",
                    branch: "CSE",
                    post: "Media Head",
                    currentDesignation: "Lead member of technical staff at Siemens EDA",
                    linkedin: "https://www.linkedin.com/in/devashishandtiwari/?originalSubdomain=in",
                    image: "/Alumini/2018_batch/devanshish.jfif"
                },
                {
                    name: "Akshay Jain",
                    branch: "Electrical",
                    post: "Sponsorship & PR Head",
                    currentDesignation: "Engineer in ambitionBox",
                    linkedin: "https://www.linkedin.com/in/akshay-jain-b51096134/?originalSubdomain=in",
                    image: "/Alumini/2018_batch/akshay.jfif"
                },
                {
                    name: "Akshata Masoor",
                    branch: "ECE",
                    post: "WIE Chairperson",
                    currentDesignation: "Product management at Hashedln by Deloitte",
                    linkedin: "https://www.linkedin.com/in/akshata-masoor/?originalSubdomain=in",
                    image: "/Alumini/2018_batch/akshata.jfif"
                },
                {
                    name: "Darshana Vinodiya",
                    branch: "ECE",
                    post: "Social Media Head",
                    currentDesignation: "Amazon",
                    linkedin: "https://www.linkedin.com/in/darshana-vinodiya/?originalSubdomain=in",
                    image: "/Alumini/2018_batch/darshana.jfif"
                },
                {
                    name: "Pranjali Singh",
                    branch: "CSE",
                    post: "Membership Drive Head",
                    currentDesignation: "PSIORI - The university of freiburg",
                    linkedin: "https://www.linkedin.com/in/singh-pranjali/?originalSubdomain=de",
                    image: "/Alumini/2018_batch/pranjali.jfif"
                },
                {
                    name: "Seethal Chandra Kompalli",
                    branch: "CSE",
                    post: "Video Editor",
                    currentDesignation: "--------------",
                    linkedin: "#",
                    image: "/Alumini/sample.jpg"
                }
            ]
        },
        {
            year: 2017,
            members: [
                {
                    name: "Shreya Mittal",
                    branch: "Electrical",
                    post: "Chairperson",
                    currentDesignation: "Manager at Swiggy",
                    linkedin: "https://www.linkedin.com/in/shreya-mittal-848377b7/?originalSubdomain=in",
                    image: "/Alumini/2017_batch/shreya.jfif"
                },
                {
                    name: "Saumya Agrawal",
                    branch: "ECE",
                    post: "WIE Chairperson & Media Head",
                    currentDesignation: "Solution Engineer at Instabase",
                    linkedin: "https://www.linkedin.com/in/saumya-agrawal-b48991a3/?originalSubdomain=in/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Aditya Bam",
                    branch: "ECE",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Growth Marketing Manager at Turing",
                    linkedin: "https://www.linkedin.com/in/aditya-bam/?originalSubdomain=in",
                    image: "/Alumini/2017_batch/aditya.jfif"
                },
                {
                    name: "Vivek Attupurath",
                    branch: "Electrical",
                    post: "Joint Vice Chairman",
                    currentDesignation: "Software Engineer at Cisco",
                    linkedin: "https://www.linkedin.com/in/vivek-a-91a858106/",
                    image: "/Alumini/2017_batch/vivek.jfif"
                },
                {
                    name: "Priyesh Patel",
                    branch: "CSE",
                    post: "Management Head",
                    currentDesignation: "Manager at Brillio",
                    linkedin: "https://www.linkedin.com/in/priyesh-patel-5681b48a/",
                    image: "/Alumini/2017_batch/priyesh.jfif"
                },
                {
                    name: "Sri Krishna Paritala",
                    branch: "CSE",
                    post: "Technical Head",
                    currentDesignation: "Engineering Manager, Solution Design Architect at Appointy",
                    linkedin: "https://www.linkedin.com/in/sri-krsna/",
                    image: "/Alumini/2017_batch/krishna.jfif"
                },
                {
                    name: "Deepak Verma",
                    branch: "CSE",
                    post: "Web Head",
                    currentDesignation: "-----------------",
                    linkedin: "https://www.linkedin.com/in/deepak-verma-517645107/",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Chaitanya Yaddanapudi",
                    branch: "CSE",
                    post: "Design Head",
                    currentDesignation: "Project Engineer at L&T Hydrocarbon Engineering Limited",
                    linkedin: "https://www.linkedin.com/in/chaitanya-yaddanapudi-372014101/",
                    image: "/Alumini/2017_batch/chaitanya.jfif"
                },
                {
                    name: "Ashutosh Vikram Singh",
                    branch: "Mechanical",
                    post: "Event Head",
                    currentDesignation: "------------",
                    linkedin: "#",
                    image: "/Alumini/sample.jpg"
                },
                {
                    name: "Vishesh Gupta",
                    branch: "Electrical",
                    post: "Publicity & Sponsorship Head",
                    currentDesignation: "------------------",
                    linkedin: "https://www.linkedin.com/in/vishesh-gupta-481717105/",
                    image: "/Alumini/sample.jpg"
                }
            ]
        },
        {
            year: 2016,
            members: [
                    {
                        "name": "Siddhartha Saxena",
                        "branch": "CSE",
                        "post": "Chairman",
                        "currentDesignation": "---------------",
                        "linkedin": "https://www.linkedin.com/in/siddharth-saxena-311aaaa1/",
                        "image": "public/Alumini/2016_batch/siddharth.jfif"
                    },
                    {
                        "name": "Prachi Jain",
                        "branch": "ECE",
                        "post": "WIE Chairperson",
                        "currentDesignation": "---------------",
                        "linkedin": "https://www.linkedin.com/in/prachi-jain-4a885084/",
                        "image": "public/Alumini/2016_batch/prachi.jfif"
                    },
                    {
                        "name": "Anubhav Gupta",
                        "branch": "ECE",
                        "post": "Vice Chairperson",
                        "currentDesignation": "SDEII at Amazon Development Centre India",
                        "linkedin": "https://www.linkedin.com/in/anubhav-gupta-34605683/",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Prasun Goyal",
                        "branch": "CSE",
                        "post": "Vice Chairman",
                        "currentDesignation": "IOS Developer at PhonePe",
                        "linkedin": "https://www.linkedin.com/in/prasungoyal/",
                        "image": "public/Alumini/2016_batch/prasun.jfif"
                    },
                    {
                        "name": "Richa Nigam",
                        "branch": "CSE",
                        "post": "WIE Vice Chairperson & Media Head",
                        "currentDesignation": "Senior Software Engineer at Youtube",
                        "linkedin": "https://www.linkedin.com/in/richa-nigam-240994/",
                        "image": "public/Alumini/2016_batch/richa.jfif"
                    },
                    {
                        "name": "Dhruv Raj Singh Rathore",
                        "branch": "CSE",
                        "post": "Technical Head",
                        "currentDesignation": "Software Development Engineer - 4 at BlackBuck",
                        "linkedin": "https://www.linkedin.com/in/dhruv-raj-singh-rathore-bb5a97a0/",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Rachit Saxena",
                        "branch": "CSE",
                        "post": "Web Head",
                        "currentDesignation": "Software Development Engineer III at Flipkart",
                        "linkedin": "https://www.linkedin.com/in/rachit-saxena-881a768b/",
                        "image": "public/Alumini/2016_batch/rachit.jfif"
                    },
                    {
                        "name": "Achal Arya",
                        "branch": "CSE",
                        "post": "Design Head",
                        "currentDesignation": "---------------",
                        "linkedin": "#",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Prateek Singh",
                        "branch": "Electrical",
                        "post": "Media Head",
                        "currentDesignation": "Practice Director at Everest Group",
                        "linkedin": "https://www.linkedin.com/in/prateek-singh-b4bb74124/",
                        "image": "public/Alumini/2016_batch/prateek.jfif"
                    },
                    {
                        "name": "Arpita Mishra",
                        "branch": "CSE",
                        "post": "Event Head",
                        "currentDesignation": "-------------------",
                        "linkedin": "#",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Sooraj Mechery",
                        "branch": "ECE",
                        "post": "Management Head",
                        "currentDesignation": "Pursuing MQM from Duke University",
                        "linkedin": "https://www.linkedin.com/in/soorajmechery/",
                        "image": "public/Alumini/2016_batch/sooraj.jfif"
                    },
                    {
                        "name": "Sadhana Golani",
                        "branch": "Electrical",
                        "post": "Publicity & Sponsorship Head",
                        "currentDesignation": "Scientific Research Associate",
                        "linkedin": "https://www.linkedin.com/in/sadhana-golani/",
                        "image": "public/Alumini/2016_batch/sadhana.jfif"
                    }
                ]
        },
        {
            year: 2015,
            members: [
                    {
                        "name": "Rakesh Singla",
                        "branch": "ECE",
                        "post": "Chairman",
                        "currentDesignation": "Senior Member of Technical Staff at Oracle",
                        "linkedin": "https://www.linkedin.com/in/rakesh-singla-a0263055",
                        "image": "public/Alumini/2015_batch/rakesh.jfif"
                    },
                    {
                        "name": "Pranav Goswami",
                        "branch": "CSE",
                        "post": "Vice Chairman",
                        "currentDesignation": "SDE II at Microsoft, Washington",
                        "linkedin": "https://www.linkedin.com/in/goswamipranav/",
                        "image": "public/Alumini/2015_batch/pranav.jfif"
                    },
                    {
                        "name": "Kapila Porwal",
                        "branch": "ECE",
                        "post": "Vice Chairman",
                        "currentDesignation": "Technical Manager at Standard Chartered Bank",
                        "linkedin": "https://www.linkedin.com/in/kapila-porwal-600b1357/",
                        "image": "public/Alumini/2015_batch/kapila.jfif"
                    },
                    {
                        "name": "Aayush Rajoria",
                        "branch": "CSE",
                        "post": "Event Head",
                        "currentDesignation": "Software Engineering Manager at NVIDIA",
                        "linkedin": "https://www.linkedin.com/in/aayush-rajoria-6896917a/",
                        "image": "public/Alumini/2015_batch/aayush.jfif"
                    },
                    {
                        "name": "Anshul Jain",
                        "branch": "CSE",
                        "post": "Technical Head",
                        "currentDesignation": "Software Development Engineer III at Amazon Web Services",
                        "linkedin": "https://www.linkedin.com/in/anshul-jain-34525582/",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Anchit Nema",
                        "branch": "ECE",
                        "post": "Management Head",
                        "currentDesignation": "SDE II at Whatfix",
                        "linkedin": "https://www.linkedin.com/in/anchitnema/",
                        "image": "public/Alumini/2015_batch/anchit.jfif"
                    },
                    {
                        "name": "Madhur Sahu",
                        "branch": "ECE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Staff Software Engineer at Carbon",
                        "linkedin": "https://www.linkedin.com/in/madhursahu93/",
                        "image": "public/Alumini/2015_batch/madhur.jfif"
                    },
                    {
                        "name": "Akshay Tripathi",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "---------------",
                        "linkedin": "#",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Varun Goswami",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "Senior Manager at Jio Cinema",
                        "linkedin": "https://www.linkedin.com/in/varungoswamiimc/",
                        "image": "public/Alumini/2015_batch/varun.jfif"
                    },
                    {
                        "name": "Shubhangi Bhadoria",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "Pursuing PhD from KTH, Sweden",
                        "linkedin": "https://www.linkedin.com/in/shubhangi-bhadoria/",
                        "image": "public/Alumini/2015_batch/shubhangi.jfif"
                    },
                    {
                        "name": "Amritanshu Singh",
                        "branch": "CSE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Labourer Inspector under Govt. of Madhya Pradesh",
                        "linkedin": "https://www.linkedin.com/in/amritanshu-singh-a66a3192/",
                        "image": "public/Alumini/2015_batch/AMRITANSHU.jfif"
                    },
                    {
                        "name": "Lakshya Pathak",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "------------",
                        "linkedin": "#",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Mehjabin",
                        "branch": "ECE",
                        "post": "Senior Excomm",
                        "currentDesignation": "------------",
                        "linkedin": "#",
                        "image": "public/Alumini/sample.jpg"
                    }
                ]
        },
        {
            year: 2014,
            members: [
                    {
                        "name": "Rajat Shrivastava",
                        "branch": "ECE",
                        "post": "Chairman",
                        "currentDesignation": "Senior Product Manager at Microsoft",
                        "linkedin": "https://www.linkedin.com/in/rajat-shrivastava/",
                        "image": "public/Alumini/2014_batch/rajat.jfif"
                    },
                    {
                        "name": "Richa Sunder",
                        "branch": "CSE",
                        "post": "WIE Chairman",
                        "currentDesignation": "Program Manager at Meesho",
                        "linkedin": "https://www.linkedin.com/in/richa-sunder-055b8736/",
                        "image": "public/Alumini/2014_batch/richa.jfif"
                    },
                    {
                        "name": "Ankit Gupta",
                        "branch": "Electrical",
                        "post": "Vice Chairman",
                        "currentDesignation": "System Engineering Manager at Texas Instruments, California, USA",
                        "linkedin": "https://www.linkedin.com/in/agupta23/",
                        "image": "public/Alumini/2014_batch/ankit2.jfif"
                    },
                    {
                        "name": "Abhishek Dixit",
                        "branch": "Electrical",
                        "post": "Vice Chairman",
                        "currentDesignation": "Assistant Manager at Larsen & Turbo",
                        "linkedin": "https://www.linkedin.com/in/abhishekdixitnitb/",
                        "image": "public/Alumini/2014_batch/abhishek.jfif"
                    },
                    {
                        "name": "Satya Sravan",
                        "branch": "ECE",
                        "post": "Design Head",
                        "currentDesignation": "Assistant General Manager at Vodafone Idea Limited",
                        "linkedin": "https://www.linkedin.com/in/satya-sravan-747a3056/",
                        "image": "public/Alumini/2014_batch/satya.jfif"
                    },
                    {
                        "name": "Prafulla Gathre",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "------------",
                        "linkedin": "#",
                        "image": "public/Alumini/2014_batch/prafulla.jfif"
                    },
                    {
                        "name": "Arjit Agarwal",
                        "branch": "CSE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Engineering Manager at Microsoft",
                        "linkedin": "https://www.linkedin.com/in/arjit-agarwal-67a7533a/",
                        "image": "public/Alumini/2014_batch/arjit.jfif"
                    },
                    {
                        "name": "Akshay Dubey",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "Deputy Director, Central Electrical Authority",
                        "linkedin": "https://www.linkedin.com/in/akshay-dubey-1a2aa427b/",
                        "image": "public/Alumini/2014_batch/akshay.jfif"
                    },
                    {
                        "name": "Laharish Guntuka",
                        "branch": "ECE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Assistant Professor at Rochester Institute of Technology",
                        "linkedin": "https://www.linkedin.com/in/laharish-guntuka-747610b6/",
                        "image": "public/Alumini/2014_batch/laharish.jfif"
                    }
                ]
        },
        {
            year: 2013,
            members: [
                    {
                        "name": "Mohit Verma",
                        "branch": "ECE",
                        "post": "Chairman",
                        "currentDesignation": "Product Manager at Deliveroo, London, UK",
                        "linkedin": "https://www.linkedin.com/in/mohit-verma-05/",
                        "image": "public/Alumini/2013_batch/mohit.jfif"
                    },
                    {
                        "name": "Akshay Tiwari",
                        "branch": "Electrical",
                        "post": "Vice Chairman",
                        "currentDesignation": "Vice President at Kotak Bank, Mumbai",
                        "linkedin": "https://www.linkedin.com/in/akshay-tiwari-783b663a/",
                        "image": "public/Alumini/2013_batch/akshay.jfif"
                    },
                    {
                        "name": "Ashit Srivastava",
                        "branch": "Electrical",
                        "post": "Vice Chairman",
                        "currentDesignation": "---------",
                        "linkedin": "#",
                        "image": "public/Alumini/sample.jpg"
                    },
                    {
                        "name": "Rajshree Dwivedi",
                        "branch": "ECE",
                        "post": "Event Head",
                        "currentDesignation": "-------------",
                        "linkedin": "https://www.linkedin.com/in/rajshree-dwivedi-96968818/",
                        "image": "public/Alumini/2013_batch/rajshree.jfif"
                    },
                    {
                        "name": "Kanta Moolchandani",
                        "branch": "IT",
                        "post": "Senior Excomm",
                        "currentDesignation": "Senior Product Manager at OYO Vacation Homes",
                        "linkedin": "https://www.linkedin.com/in/kanta-moolchandani-30812777/",
                        "image": "public/Alumini/2013_batch/kanta.jfif"
                    },
                    {
                        "name": "Sulbha Chouhan",
                        "branch": "IT",
                        "post": "Senior Excomm",
                        "currentDesignation": "Full Stack Engineer at Novartis, Parsippany, New Jersey, United States",
                        "linkedin": "https://www.linkedin.com/in/sulbha-chouhan/",
                        "image": "public/Alumini/2013_batch/sulbha.jfif"
                    }
                ]
        },
        {
            year: 2012,
            members: [
                    {
                        "name": "Kamran Ali",
                        "branch": "CSE",
                        "post": "Chairman",
                        "currentDesignation": "Principal Data Engineer at GoDaddy",
                        "linkedin": "https://www.linkedin.com/in/atechguide",
                        "image": "public/Alumini/2012_batch/kamran.jfif"
                    },
                    {
                        "name": "Abhinav Chauhan",
                        "branch": "Electrical",
                        "post": "Vice Chairman",
                        "currentDesignation": "Senior Product Manager at Adobe Express, San Fransisco",
                        "linkedin": "https://www.linkedin.com/in/ab-chauhan/",
                        "image": "public/Alumini/2012_batch/abhinav.jfif"
                    },
                    {
                        "name": "Arpit Srivastava",
                        "branch": "ECE",
                        "post": "Vice Chairman",
                        "currentDesignation": "Senior Circular Economy Manager at Danone, Amsterdam",
                        "linkedin": "https://www.linkedin.com/in/arpit-srivastava-ba1a8514/",
                        "image": "public/Alumini/2012_batch/arpit.jfif"
                    },
                    {
                        "name": "Rohit Chaudhary",
                        "branch": "Electrical",
                        "post": "Technical Head",
                        "currentDesignation": "-------------",
                        "linkedin": "https://www.linkedin.com/in/rohit-chaudhary-b570a720/",
                        "image": "public/Alumini/2012_batch/rohit.jfif"
                    },
                    {
                        "name": "Mudit Khanna",
                        "branch": "Electrical",
                        "post": "Senior Excomm",
                        "currentDesignation": "Technical Product Manager at Ideal Power, Texas, USA",
                        "linkedin": "https://www.linkedin.com/in/mudit-khanna",
                        "image": "public/Alumini/2012_batch/mudit.jfif"
                    },
                    {
                        "name": "Abhishek Gupta",
                        "branch": "CSE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Senior Staff Technical Product Manager at GE Healthcare, USA",
                        "linkedin": "https://www.linkedin.com/in/abhishek-gupta-29765433/",
                        "image": "public/Alumini/2012_batch/abhishekjfif.jfif"
                    }
                ]
        },
        {
            year: 2011,
            members: [
                    {
                        "name": "Anuvrat Chaturvedi",
                        "branch": "ECE",
                        "post": "Chairperson",
                        "currentDesignation": "Director Data Science at Gilead Sciences, New Jersey, USA",
                        "linkedin": "",
                        "image": "public/Alumini/2011_batch/Anuvrat.jfif"
                    },
                    {
                        "name": "Rajen Paduel",
                        "branch": "ECE",
                        "post": "Vice Chairman",
                        "currentDesignation": "ASIC Design Engineer at Apple, Munich, Germany",
                        "linkedin": "https://www.linkedin.com/in/rajenpaudel/",
                        "image": "public/Alumini/2011_batch/Rajen.jfif"
                    },
                    {
                        "name": "Arun A Thomas",
                        "branch": "Electrical",
                        "post": "Vice Chairman",
                        "currentDesignation": "Manager at NTPC Limited",
                        "linkedin": "https://www.linkedin.com/in/arunthomas89",
                        "image": "public/Alumini/2011_batch/Arun.jfif"
                    },
                    {
                        "name": "Anand Arasu",
                        "branch": "ECE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Software Engineer at Qualcomm, Michigian, USA",
                        "linkedin": "https://www.linkedin.com/in/anand-arasu-35983050",
                        "image": "public/Alumini/2011_batch/arasu.jfif"
                    },
                    {
                        "name": "Lavanya Rishishwar",
                        "branch": "Bioinformatics",
                        "post": "Senior Excomm",
                        "currentDesignation": "Senior Technical Manager at Pillar Biosciences, Boston, USA",
                        "linkedin": "https://www.linkedin.com/in/lava-rishishwar",
                        "image": "public/Alumini/2011_batch/lavanya.jfif"
                    },
                    {
                        "name": "Ujjwal Kumar Pathak",
                        "branch": "CSE",
                        "post": "Senior Excomm",
                        "currentDesignation": "Senior Staff Technical Product Manager at GE Healthcare, USA",
                        "linkedin": "https://www.linkedin.com/in/ujjwal-kumar-pathak-28719421",
                        "image": "public/Alumini/sample.jpg"
                    }
                ]
        }
    ]
    // Handle alumni row click
    const handleAlumniClick = (alumni) => {
        setSelectedAlumni(alumni)
        setShowModal(true)
    }

    // Close modal
    const closeModal = () => {
        setShowModal(false)
        setSelectedAlumni(null)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Alumni
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Meet the brilliant minds who have been part of IEEE MSB and are now making their mark in the world
                    </p>
                </div>

                {/* Alumni Tables by Year */}
                <div className="space-y-12">
                    {alumniData.map((yearData) => (
                        <div key={yearData.year} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            {/* Year Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                                <h2 className="text-3xl font-bold text-white">
                                    Batch of {yearData.year}
                                </h2>
                                <p className="text-blue-100 mt-2">
                                    {yearData.members.length} members
                                </p>
                            </div>

                            {/* Mobile Card View */}
                            <div className="block sm:hidden p-4 space-y-4">
                                {yearData.members.map((alumni, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
                                                    src={alumni.image}
                                                    alt={alumni.name}
                                                    onError={(e) => {
                                                        e.target.src = '/Alumini/sample.jpg'
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-semibold text-gray-900 truncate">
                                                    {alumni.name}
                                                </h3>
                                                <p className="text-sm text-blue-600 font-medium truncate">
                                                    {alumni.post}
                                                </p>
                                                <p className="text-sm text-gray-600 truncate">
                                                    {alumni.branch}
                                                </p>
                                                <p className="text-xs text-gray-500 truncate mt-1">
                                                    {alumni.currentDesignation}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button
                                                    onClick={() => handleAlumniClick(alumni)}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Table View */}
                            <div className="hidden sm:block w-full">
                                <table className="w-full table-fixed">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="w-20 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Photo
                                            </th>
                                            <th className="w-40 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="w-36 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Post
                                            </th>
                                            <th className="w-20 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Branch
                                            </th>
                                            <th className="w-48 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Current Role
                                            </th>
                                            <th className="w-32 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {yearData.members.map((alumni, index) => (
                                            <tr 
                                                key={index}
                                                className="hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <td className="px-4 py-3">
                                                    <div className="h-16 w-16">
                                                        <img
                                                            className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
                                                            src={alumni.image}
                                                            alt={alumni.name}
                                                            onError={(e) => {
                                                                e.target.src = '/Alumini/sample.jpg'
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-sm font-medium text-gray-900 truncate">
                                                        {alumni.name}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-sm text-blue-600 font-semibold truncate">
                                                        {alumni.post}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-sm text-gray-900 truncate">
                                                        {alumni.branch}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="text-sm text-gray-900 truncate">
                                                        {alumni.currentDesignation}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={() => handleAlumniClick(alumni)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center gap-2"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedAlumni && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
                    <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl h-[95vh] sm:h-auto max-h-[95vh] flex flex-col">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 z-10"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">
                            {/* Image Section */}
                            <div className="flex-shrink-0 p-4 sm:p-6">
                                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
                                    <img
                                        src={selectedAlumni.image}
                                        alt={selectedAlumni.name}
                                        className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg"
                                        onError={(e) => {
                                            e.target.src = '/Alumini/sample.jpg'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
                                    {selectedAlumni.name}
                                </h2>
                                <p className="text-blue-600 text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">
                                    {selectedAlumni.post}
                                </p>
                                
                                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <div>
                                            <span className="text-base sm:text-lg font-semibold text-gray-700">Branch:</span>
                                            <p className="text-base sm:text-lg text-gray-600 mt-1">{selectedAlumni.branch}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                        </svg>
                                        <div>
                                            <span className="text-base sm:text-lg font-semibold text-gray-700">Current Role:</span>
                                            <p className="text-base sm:text-lg text-gray-600 mt-1 break-words">{selectedAlumni.currentDesignation}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {selectedAlumni.linkedin && selectedAlumni.linkedin !== '#' && (
                                    <a
                                        href={selectedAlumni.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-base sm:text-lg font-semibold w-full sm:w-auto justify-center"
                                    >
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                        View LinkedIn Profile
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Alumni
