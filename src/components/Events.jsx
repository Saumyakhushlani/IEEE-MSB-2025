import React from "react";
import CircularTestimonials from "./Circular-testimonial";
import {useSelector} from 'react-redux'

const testimonials = [
  {
    quote:
      "A social outreach initiative bringing science and technology to under-resourced students, inspiring curiosity, creativity, and continuous learning at the grassroots level through engaging workshops and real-world experiments.",
    name: "AARAMBH",
    designation: " ",
    src: "/Events/aarambh/Aarambh24_first.jpg",
  },
  {
    quote:
      "A vibrant WIE event celebrating women in STEM through interactive talks, debates, and a creative ideathon, empowering participants to connect, share experiences, and build confidence in technical leadership roles.",
    name: "SAMWAD",
    designation: " ",
    src: "/Events/samwaad/Samwaad25_first.jpg",
  },
  {
    quote:
      "IEEE-MSB’s flagship student conference fostering impactful research via paper presentations, technical workshops, and insightful expert lectures across ECE, EE, and CS domains, encouraging collaboration and professional development opportunities.",
    name: "SCEECS",
    designation: " ",
    src: "/Events/sceecs/SCEECS24_1.JPG",
  },
];



 const Events = () => {
  const mode = useSelector((state) => state.theme.mode);
  return(
<section id="events">
    <div
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold pt-4 sm:pt-6 px-4 ${
        mode === "dark" ? "bg-[#060507] text-white" : "bg-white text-gray-900"
      }`}
    >
      Our <span className="text-blue-500 dark:text-blue-400">Events</span>
    </div>
    <div
      className={`md:p-16 py-4 px-2 min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative ${
        mode === "dark" ? "bg-[#060507]" : "bg-gray-50"
      }`}
    >
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={mode === "dark" ? {
            name: "#ffffff",
            designation: "#d1d5db",
            testimony: "#e5e7eb",
            arrowBackground: "#3b82f6",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#60a5fa",
          } : {
            name: "#1f2937",
            designation: "#6b7280",
            testimony: "#374151",
            arrowBackground: "#3b82f6",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#60a5fa",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
  )
  
}

export default Events