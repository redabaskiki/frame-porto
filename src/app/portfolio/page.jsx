"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-300 to-indigo-300",
    title: "React E-Commerce",
    desc: "E-commerce front-end application using TypeScript, React, Redux Toolkit, and Tailwind CSS. The app fetches data from a JSON server and incorporates animated transitions with Tailwind CSS to enhance user engagement.",
    img: "/babys.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7285669896338702336/",
  },
  {
    id: 2,
    color: "from-indigo-300 to-violet-300",
    title: "React Admin Dashboard App",
    desc: "This project showcases my expertise in front-end development and user experience design. Technologies Used: React.js, Context API, TailwindCss, Syncfusion React.",
    img: "/dash.png",
    link: "https://ceodashboard.netlify.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Next.js App Landing Page",
    desc: "Travel app with Next.js 14 and Tailwind CSS that prioritizes a sleek UI, responsive design, and mobile-first best practices.",
    img: "/travel.png",
    link: "https://ceotraveler.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-pink-300",
    title: "Gym App",
    desc: "The app leverages two distinct APIs—one for exercise data and another for video tutorials.",
    img: "/gym.png",
    link: "https://kuntta-gym.netlify.app",
  },
  {
    id: 5,
    color: "from-pink-300 to-rose-300",
    title: "y(z)oom App",
    desc: "Yoom-like video conferencing app built with tools like Next.js 14, Stream, Tailwind CSS.",
    img: "/zoom.png",
    link: "https://zoom-roan-ten.vercel.app",
  },
  {
    id: 6,
    color: "from-rose-300 to-red-300",
    title: "Appoitment App",
    desc: "Appwith a Next.js frontend, Tailwind CSS, Appwrite backend, and SMS ,register, book appointments ,SMS reminders, cancel pending appointments, and manage  through dashboard.",
    img: "/cnop.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317944003272863744/",
  },
];



const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300  "  />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white my-8">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl ">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center ">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer  
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
