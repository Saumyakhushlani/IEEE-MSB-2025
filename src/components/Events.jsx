import React from "react";
import CircularTestimonials from "./Circular-testimonial";

const testimonials = [
  {
    quote:
      "A social outreach initiative bringing science and technology to under-resourced students, inspiring curiosity, creativity, and continuous learning at the grassroots level through engaging workshops and real-world experiments.",
    name: "AARAMBH",
    designation: " ",
    src: "public/Events/aarambh/Aarambh24_first.jpg",
  },
  {
    quote:
      "A vibrant WIE event celebrating women in STEM through interactive talks, debates, and a creative ideathon, empowering participants to connect, share experiences, and build confidence in technical leadership roles.",
    name: "SAMWAD",
    designation: " ",
    src: "public/Events/samwaad/Samwaad25_first.jpg",
  },
  {
    quote:
      "IEEE-MSB’s flagship student conference fostering impactful research via paper presentations, technical workshops, and insightful expert lectures across ECE, EE, and CS domains, encouraging collaboration and professional development opportunities.",
    name: "SCEECS",
    designation: " ",
    src: "public/Events/sceecs/SCEECS24_1.JPG",
  },
];



export const Events = () => (
  <section>

        <div className="bg-[#060507] text-white text-6xl text-center font-bold pt-6">Our <span className="text-blue-500">Events</span></div>
    <div className="bg-[#060507] md:p-16 py-4 px-2 min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
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
);
