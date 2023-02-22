import React from "react";
// import first from "../assets/portfolio/1.png";
// import second from "../assets/portfolio/2.png";
// import third from "../assets/portfolio/3.png";
// // import fourth from "../assets/portfolio/4.png";
// import fifth from "../assets/portfolio/5.png";
// import sixth from "../assets/portfolio/6.png";
// import seventh from "../assets/portfolio/7.png";
import { AiOutlineGithub } from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Driver Distraction Detection",
      text: "Built a Convolutional Neural Network model to detect distractions while driving and crafted a scoring mechanism for the drivers that can be used by insurance companies to set pricing plans to avoid gender/age bias.",
      link: "#",
    },
    {
      id: 2,
      title: "Expense Tracker",
      text: "Created an expense tracker application that displays expenses made in a year and has functionalities like adding, deleting, and filtering expenses based on a year.",
      link: "https://github.com/gowthambalboa/Expense-Tracker-Using-React",
    },
    {
      id: 3,
      title: "Covid19 Dashboard",
      text: "Designed and implemented a dashboard using HTML, CSS, Javascript to display covid cases of different countries along with a graph to see the trend in that selected country.",
      link: "https://github.com/gowthambalboa/COVID19-Dashboard",
    },
    {
      id: 4,
      title: "5G Handover Optimization",
      text: "Wrote a paper and implemented a solution that optimized the number of handover connections in a self-developed 2D grid world environment having 5G antennas using Q Learning.",
      link: "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
    },
    {
      id: 5,
      title: "Drone Logistics Routing",
      text: "Implemented a time and resource-efficient solution to find the optimal route for drones to deliver from a warehouse to different locations using the concept of the traveling salesman technique.",
      link: "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
    },
    {
      id: 6,
      title: "Targeted Advertising",
      text: "Collected multiple consumer emails and used Mahout to cluster users based on their interests by analyzing the most frequent terms used in the emails and then target advertisements to each group.",
      link: "https://github.com/gowthambalboa/Targeted-Advertising",
    },

    // {
    //   id: 1,
    //   src: first,
    //   href: "https://expense-tracker-gowtham.netlify.app/",
    //   gitlink: "https://github.com/gowthambalboa/Expense-Tracker-Using-React",
    // },
    // {
    //   id: 2,
    //   src: second,
    //   href: "https://framesandpages.netlify.app/",
    //   gitlink: "https://framesandpages.netlify.app/",
    // },
    // {
    //   id: 3,
    //   src: third,
    //   href: "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
    //   gitlink:
    //     "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
    // },
    // {
    //   id: 5,
    //   src: fifth,
    //   href: "https://github.com/gowthambalboa/Targeted-Advertising",
    //   gitlink: "https://github.com/gowthambalboa/Targeted-Advertising",
    // },
    // {
    //   id: 6,
    //   src: sixth,
    //   href: "https://covid19dashboardbygowtham.netlify.app/",
    //   gitlink: "https://github.com/gowthambalboa/COVID19-Dashboard",
    // },
    // {
    //   id: 7,
    //   src: seventh,
    //   href: "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
    //   gitlink:
    //     "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
    // },
  ];
  return (
    <div name="portfolio" className=" pb-[0px] pt-16 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-[50px]">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          {/* <p className="py-6">Check out some of my work</p> */}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 px-2 sm:px-0">
          {portfolios.map(({ id, title, text, link }) => (
            <div
              key={id}
              className="py-[20px] md:py-[30px] px-[65px] sm:px-[35px] text-center rounded-md shadow-md shadow-blue-600 bg-gray-800"
            >
              <div className="flex flex-col justify-center box">
                <div className="mx-[2px] my-[3px] text-blue-600 text-2xl sm:text-xl">
                  {title}
                </div>
                <div>
                  <ul>
                    <li className="text-sm">{text}</li>
                  </ul>
                </div>
                <div>
                  <a href={link} target="_blank" rel="noreferrer">
                    <span>
                      <AiOutlineGithub size={25} className="mt-4 pt-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            // <div key={id} className="shadow-md shadow-blue-600 rounded-md">
            //   <img src={src} alt="" className="rounded-md" />
            //   <div className="flex items-center justify-center">
            //     <a
            //       href={href}
            //       target="_blank"
            //       rel="noreferrer"
            //       className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            //     >
            //       Demo
            //     </a>
            //     <a
            //       href={gitlink}
            //       target="_blank"
            //       rel="noreferrer"
            //       className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            //     >
            //       GitHub
            //     </a>
            //   </div>
            // </div>
          ))}
        </div>
        <div className="flex justify-center pt-[50px]">
          <p className="inline">
            <a
              href="https://github.com/gowthambalboa?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-2 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
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
