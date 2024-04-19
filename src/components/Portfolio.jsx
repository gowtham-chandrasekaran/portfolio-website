import React, { useEffect, useState } from "react";

import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const divAnimate = {
  offscreen: { x: 0, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Portfolio = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState("all");

  const portfolios = [
    {
      id: 1,
      technology: "ml",
      title: "Driver Distraction Detection",
      text: "Built a Convolutional Neural Network model to detect distractions while driving and crafted a scoring mechanism for the drivers that can be used by insurance companies to set pricing plans to avoid gender/age bias.",
      link: "#",
    },
    {
      id: 2,
      technology: "ml",
      title: "College Database Custom ChatGPT",
      text: "Created a Streamlit chatbot with OpenAI function call and SQL integration, enabling English language interactions and dynamic responses based on the college database.",
      link: "https://github.com/gowtham-chandrasekaran/College-Database-Custom-ChatGPT",
    },
    {
      id: 3,
      technology: "ml",
      title: "Face Mask Violation Detection",
      text: "Developed a scalable and available face mask violation detection web application using Flask, AWS Rekognition, Lambda, SQS, RDS, S3, ECS, and Load Balancer.",
      link: "https://github.com/gowtham-chandrasekaran/Face-Mask-Violation-Detection-using-AWS-services",
    },
    {
      id: 4,
      technology: "web",
      title: "Covid19 Dashboard",
      text: "Designed and implemented a dashboard to display covid cases of different countries along with a graph to see the trend in that selected country.",
      link: "https://github.com/gowthambalboa/COVID19-Dashboard",
    },
    {
      id: 5,
      technology: "ml",
      title: "5G Handover Optimization",
      text: "Wrote a paper and implemented a solution that optimized the number of handover connections in a self-developed 2D grid world environment having 5G antennas using Q Learning.",
      link: "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
    },
    {
      id: 6,
      technology: "other",
      title: "Drone Logistics Routing",
      text: "Implemented a time and resource-efficient solution to find the optimal route for drones to deliver from a warehouse to different locations using the concept of the traveling salesman technique.",
      link: "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
    },
    {
      id: 7,
      technology: "ml",
      title: "Targeted Advertising",
      text: "Collected multiple consumer emails and used Mahout to cluster users based on their interests by analyzing the most frequent terms used in the emails and then target advertisements to each group.",
      link: "https://github.com/gowthambalboa/Targeted-Advertising",
    },
    {
      id: 8,
      technology: "web",
      title: "Password Generator",
      text: "Empower your security with a customizable password generator app, capable of generating passwords up to 40 characters in length, with optional inclusion of numbers and special characters.",
      link: "https://github.com/gowtham-chandrasekaran/React-Apps/tree/main/04PasswordGenerator",
    },
    {
      id: 9,
      technology: "web",
      title: "Currency Converter",
      text: "Seamless currency conversion with our React-based application, featuring Tailwind CSS integration and real-time currency data from an API, including support for popular cryptocurrencies.",
      link: "https://github.com/gowtham-chandrasekaran/React-Apps/tree/main/05CurrencyConverter",
    },
    {
      id: 10,
      technology: "cloud",
      title: "Video on Demand Full Stack Web Application using GCP",
      text: " Seamlessly integrated user authentication, video compression and upload in the next.js application. Implemented Docker containerzation and Cloud Run deployment on GCP for scalable and highly available media.",
      link: "https://github.com/gowtham-chandrasekaran/youtube-clone",
    },
    {
      id: 11,
      technology: "web",
      title: "Expense Tracker",
      text: " Created an expense tracker application that displays expenses made in a year and has functionalities like adding, deleting, and filtering expenses based on a year.",
      link: "https://expense-tracker-gowtham.netlify.app/",
    },
    {
      id: 12,
      technology: "cloud",
      title: "Serverless Face Mask Violation Detection Using Flask and AWS",
      text: "Attained 98% accuracy in face mask violation detection using AWS Rekognition. Ensured scalability and zero downtime with AWS Lambda, AWS SQS, and load balancer.",
      link: "https://github.com/gowtham-chandrasekaran/Face-Mask-Violation-Detection-using-AWS-services",
    },
  ];

  // useEffect(() => {
  //   setFiltered(portfolios);
  // }, []);

  useEffect(() => {
    if (activeTechnology === "all") {
      setFiltered(portfolios);
      return;
    }
    const filtered = portfolios.filter((item) =>
      item.technology.includes(activeTechnology)
    );
    setFiltered(filtered);
    // eslint-disable-next-line
  }, [activeTechnology]);

  return (
    <div name="portfolio" className=" py-[80px] w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-[50px]">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>
        <div className="flex flex-wrap mb-4">
          <button
            onClick={() => setActiveTechnology("all")}
            className={`text-white w-fit px-2 py-2 my-2 mr-3 flex items-center rounded-md ${
              activeTechnology === "all"
                ? "bg-blue-700"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
            } hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTechnology("ml")}
            className={`text-white w-fit px-2 py-2 my-2 mr-3 flex items-center rounded-md ${
              activeTechnology === "ml"
                ? "bg-blue-700"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
            } hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            AI/ML
          </button>
          <button
            onClick={() => setActiveTechnology("web")}
            className={`text-white w-fit px-2 py-2 my-2 mr-3 flex items-center rounded-md ${
              activeTechnology === "web"
                ? "bg-blue-700"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
            } hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            React
          </button>
          <button
            onClick={() => setActiveTechnology("cloud")}
            className={`text-white w-fit px-2 py-2 my-2 mr-3 flex items-center rounded-md ${
              activeTechnology === "cloud"
                ? "bg-blue-700"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
            } hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            Cloud
          </button>
          <button
            onClick={() => setActiveTechnology("other")}
            className={`text-white w-fit px-2 py-2 my-2 mr-3 flex items-center rounded-md ${
              activeTechnology === "cloud"
                ? "bg-blue-700"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
            } hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            Other
          </button>
        </div>
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 px-2 sm:px-0"
          layout
          // initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {filtered.map(({ id, title, text, link }) => (
            <motion.div
              key={id}
              className="py-[20px] md:py-[30px] px-[65px] sm:px-[35px] text-center rounded-md shadow-md shadow-blue-600 bg-gray-800"
              layout
              // transition={{ duration: 0.3 }}
              variants={divAnimate}
            >
              <motion.div
                className="flex flex-col justify-center box"
                variants={divAnimate}
              >
                <motion.div
                  className="mx-[2px] my-[3px] text-blue-600 text-2xl sm:text-xl"
                  variants={divAnimate}
                >
                  {title}
                </motion.div>
                <motion.div variants={divAnimate}>
                  <ul>
                    <li className="text-sm">{text}</li>
                  </ul>
                </motion.div>
                <motion.div variants={divAnimate}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <span>
                      <AiOutlineGithub size={25} className="mt-4 pt-1" />
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center pt-[50px]">
          <p className="inline">
            <a
              href="https://github.com/gowtham-chandrasekaran?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="text-white w-fit px-2 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
            >
              Click here to see more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
