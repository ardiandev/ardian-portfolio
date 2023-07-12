import React from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="banner-section h-screen px-4 flex flex-col justify-start mt-[90px]">
        <h2 className="text-[40px] sm:text-[80px] font-bold">Ardian Pradana</h2>
        <p className="text-2xl ">Front End Web Developer</p>
        <p className="text-lg my-3">
          I create inclusive, accessible front-end solutions for the web,
          ensuring equal access to all users.
        </p>

        <ul className="flex gap-4 text-1lg my-6">
          <li className="hover:underline hover:cursor-pointer">
            <Link to="/about">
              <FaGithub
                style={{
                  color: "#CCCCCC",
                  fontSize: "30px",
                  transition: "transform 0.2s"
                }}
                className="icon"
              />
            </Link>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <FaLinkedin
              style={{
                color: "#0a66c2",
                fontSize: "30px",
                transition: "transform 0.2s"
              }}
              className="icon"
            />
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <FaTwitter
              style={{
                color: "#1DA1F2",
                fontSize: "30px",
                transition: "transform 0.2s"
              }}
              className="icon"
            />
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <FaInstagram
              style={{
                color: "#E4405F",
                fontSize: "30px",
                transition: "transform 0.2s"
              }}
              className="icon"
            />
          </li>
        </ul>
        <button className="border-2 hover:border-red-800 mt-4 py-1 w-[150px] h-[50px] text-2xl">
          Contact
        </button>
      </section>

      <section className="px-4">
        <p className="uppercase text-2xl font-bold my-4">Experience</p>
        <p className="text-1sm">2019 — Present</p>
        <p className="text-xl font-bold">Freelence Front End Web Developer</p>
        <p className="my-3">
          Front-end web dev job: Seeking experienced developer proficient in
          React, Redux, and Tailwind CSS. Create dynamic user interfaces,
          implement responsive designs, and optimize user experiences.
        </p>
        <ul className="flex gap-4 text-1lg my-6">
          <li>
            <SiReact style={{ color: "#61DAFB", fontSize: "24px" }} />
          </li>
          <li>
            <SiRedux style={{ color: "#764ABC", fontSize: "24px" }} />
          </li>
          <li>
            <SiTailwindcss style={{ color: "#06B6D4", fontSize: "24px" }} />
          </li>
          <li>
            <SiBootstrap style={{ color: "#7952B3", fontSize: "24px" }} />
          </li>
          <li>
            <SiTypescript style={{ color: "#3178C6", fontSize: "24px" }} />
          </li>
          <li>
            <SiHtml5 style={{ color: "#E34F26", fontSize: "24px" }} />
          </li>
          <li>
            <SiCss3 style={{ color: "#1572B6", fontSize: "24px" }} />
          </li>
        </ul>
      </section>
      <section className="px-4 my-10">
        <p className="uppercase text-2xl font-bold my-4">Project</p>
        <div>
          <p className="text-xl font-bold">Build a Calculator</p>
          <div className="flex gap-2 my-2">
            <p className="hover:underline hover:cursor-pointer underline ">
              Github
            </p>
            <p className="hover:underline hover:cursor-pointer underline ">
              Demo
            </p>
          </div>
          <p className="my-3">
            Build a calculator using React, Redux, and Tailwind CSS. Utilize
            React components for a dynamic UI, manage state with Redux, and
            apply the flexible utility classes of Tailwind CSS to style the
            calculator with ease and efficiency.
          </p>
          <ul className="flex gap-4 text-1lg my-6">
            <li>
              <SiReact style={{ color: "#61DAFB", fontSize: "24px" }} />
            </li>
            <li>
              <SiRedux style={{ color: "#764ABC", fontSize: "24px" }} />
            </li>
            <li>
              <SiTailwindcss style={{ color: "#06B6D4", fontSize: "24px" }} />
            </li>
            <li>
              <SiHtml5 style={{ color: "#E34F26", fontSize: "24px" }} />
            </li>
            <li>
              <SiCss3 style={{ color: "#1572B6", fontSize: "24px" }} />
            </li>
          </ul>
        </div>
        <div className="my-9">
          <p className="text-xl font-bold">Build a Fullstack To-Do App</p>
          <div className="flex gap-2 my-2">
            <p className="hover:underline hover:cursor-pointer underline">
              Github
            </p>
            <p className="hover:underline hover:cursor-pointer underline ">
              Demo
            </p>
          </div>
          <p className="my-3">
            Create a full-stack to-do app integrated with MongoDB. Develop the
            front-end using React, Redux, and Tailwind CSS to build a dynamic
            user interface. Implement the back-end using MongoDB to store and
            retrieve tasks. Ensure seamless data management and styling through
            the combination of React, Redux, Tailwind CSS, and MongoDB for a
            robust and visually appealing to-do application.
          </p>
          <ul className="flex gap-4 text-1lg my-6">
            <li>
              <SiReact style={{ color: "#61DAFB", fontSize: "24px" }} />
            </li>
            <li>
              <SiRedux style={{ color: "#764ABC", fontSize: "24px" }} />
            </li>
            <li>
              <SiTailwindcss style={{ color: "#06B6D4", fontSize: "24px" }} />
            </li>
            <li>
              <SiHtml5 style={{ color: "#E34F26", fontSize: "24px" }} />
            </li>
            <li>
              <SiCss3 style={{ color: "#1572B6", fontSize: "24px" }} />
            </li>
            <li>
              <SiMongodb style={{ color: "#47A248", fontSize: "24px" }} />
            </li>
            <li>
              <DiNodejs style={{ color: "#339933", fontSize: "24px" }} />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
