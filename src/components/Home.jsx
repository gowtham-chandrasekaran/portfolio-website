import React from "react";
import HeroImage from "../assets/dp.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 2 },
  },
};

const headAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeOut", type: "spring", bounce: 0.5, duration: 2 },
  },
};

const Home = () => {
  return (
    <div name="home" className="w-full py-[56px] h-full sm:h-screen px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full py-12 sm:py-0 px-4 md:flex-row">
        <motion.div
          className="py-[60px]"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={imageAnimate}
        >
          <img
            src={HeroImage}
            alt="my dp"
            className="rounded-3xl shadow-md shadow-blue-600 mx-auto max-w-lg w-2/3 md:w-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col flex-wrap justify-center sm:pl-[150px] h-full py-[60px] pt-[10px] sm:pt-[50px]"
          initial={"offscreen"}
          animate={"onscreen"}
          variants={headAnimate}
        >
          <h2
            className="text-4xl header-text sm:text-5xl font-bold text-white
          "
          >
            Hi, I'm Gowtham Chandrasekaran!
          </h2>
          <p className="text-white py-4 max-w-md">
            As a full stack engineer and machine learning enthusiast, I leverage
            my passion for cutting-edge technology to build innovative solutions
            that drive business success.
          </p>
          <div className="flex flex-wrap justify-start sm:flex-row">
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
              href="https://github.com/gowtham-chandrasekaran"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-2 py-2 my-2 mr-5 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              GitHub
              <span>
                <AiOutlineGithub size={25} className="ml-1" />
              </span>
            </a>
            <a
              href="https://leetcode.com/gowtham6309/"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-2 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              Leetcode
              <span>
                <SiLeetcode size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
