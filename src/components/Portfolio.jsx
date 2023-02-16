import React from "react";
import first from "../assets/portfolio/1.png";
import second from "../assets/portfolio/2.png";
import third from "../assets/portfolio/3.png";
// import fourth from "../assets/portfolio/4.png";
import fifth from "../assets/portfolio/5.png";
import sixth from "../assets/portfolio/6.png";
import seventh from "../assets/portfolio/7.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: first,
      href: "https://expense-tracker-gowtham.netlify.app/",
      gitlink: "https://github.com/gowthambalboa/Expense-Tracker-Using-React",
    },
    {
      id: 2,
      src: second,
      href: "https://framesandpages.netlify.app/",
      gitlink: "https://framesandpages.netlify.app/",
    },
    {
      id: 3,
      src: third,
      href: "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
      gitlink:
        "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
    },
    // {
    //   id: 4,
    //   src: fourth,
    // },
    {
      id: 5,
      src: fifth,
      href: "https://github.com/gowthambalboa/Targeted-Advertising",
      gitlink: "https://github.com/gowthambalboa/Targeted-Advertising",
    },
    {
      id: 6,
      src: sixth,
      href: "https://covid19dashboardbygowtham.netlify.app/",
      gitlink: "https://github.com/gowthambalboa/COVID19-Dashboard",
    },
    {
      id: 7,
      src: seventh,
      href: "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
      gitlink:
        "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-[80px] pt-16 from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-[50px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          {/* <p className="py-6">Check out some of my work</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, gitlink }) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-md">
              <img src={src} alt="" className="rounded-md" />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={gitlink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>
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
