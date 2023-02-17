import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-[56px] bg-gradient-to-b from-black to-gray-800 px-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="py-[60px]">
          <img
            src={HeroImage}
            alt="my dp"
            className="rounded-3xl shadow-md shadow-blue-600 mx-auto max-w-lg w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center sm:pl-[150px] h-full py-[60px] pt-[10px] sm:pt-[50px]">
          <h2
            className="text-4xl header-text sm:text-5xl font-bold text-white
          "
          >
            Hi, I'm Gowtham Chandrasekaran!
          </h2>
          <p className="text-white py-4 max-w-md">
            I'm currently looking for Software and Full Stack Developer
            opportunities starting from May 2023. Do reach out to me if you have
            any opportunities.
          </p>
          {/* <div className="grid sm:grid-rows-3 md:grid-cols-3"> */}
          <div className="flex justify-start">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-2 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/gowtham-c/"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-2 py-2 mx-5 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              LinkedIn
              <span>
                <FaLinkedin size={22} className="ml-1" />
              </span>
            </a>
            <a
              href="https://github.com/gowthambalboa"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-2 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              GitHub
              <span>
                <AiOutlineGithub size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
