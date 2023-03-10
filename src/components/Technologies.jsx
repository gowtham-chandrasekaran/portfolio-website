import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
import htmlcss from "../assets/htmlcss.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import angular from "../assets/angular.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import nosql from "../assets/nosql.png";
import java from "../assets/java.png";
import cplus from "../assets/cplus.png";
import aws from "../assets/aws.png";
import { motion } from "framer-motion";

const divAnimate = {
  offscreen: { x: 0, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: htmlcss,
      title: "HTML/CSS",
      style: "shadow-orange-500",
    },
    // {
    //   id: 2,
    //   src: css,
    //   title: "CSS",
    //   style: "shadow-blue-500",
    // },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-700",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      style: "shadow-red-700",
    },
    {
      id: 12,
      src: cplus,
      title: "C++",
      style: "shadow-blue-700",
    },

    {
      id: 9,
      src: sql,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: nosql,
      title: "MongoDB",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: aws,
      title: "AWS",
      style: "shadow-orange-400",
    },
  ];
  return (
    <div name="technologies" className=" w-full py-[80px]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">
            These are the top technologies that I have worked on
          </p>
        </div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`bg-gray-800 shadow-md py-2 rounded-lg ${style}`}
              variants={divAnimate}
            >
              <motion.img
                src={src}
                alt=""
                className="w-20 mx-auto"
                variants={divAnimate}
              />
              <motion.p className="mt-4" variants={divAnimate}>
                {title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
