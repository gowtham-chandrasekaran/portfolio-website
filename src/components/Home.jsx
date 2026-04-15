import React from "react";
import HeroImage from "../assets/dp.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

/* ========== animations (kept) ========== */
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

/* ========== simple typing effect (no extra deps) ========== */
// deterministic typing with setTimeout (no overlap)
const useTyping = (text, speed = 45) => {
  const [idx, setIdx] = React.useState(0);

  // restart when text changes
  React.useEffect(() => setIdx(0), [text]);

  React.useEffect(() => {
    if (idx >= text.length) return;
    const t = setTimeout(() => setIdx(i => i + 1), speed);
    return () => clearTimeout(t);
  }, [idx, speed, text.length]);

  return text.slice(0, idx);
};


const Home = () => {
  const typedName = useTyping("Hi, I'm Gowtham Chandrasekaran", 45);

  return (
    <div name="home" className="w-full py-[56px] h-full sm:h-screen px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full py-12 sm:py-0 px-4 md:flex-row">
        {/* portrait */}
        <motion.div
          className="py-[60px]"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={imageAnimate}
        >
          <div className="rounded-3xl ring-1 ring-white/10 bg-slate-900/40 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-shadow">
            <img
              src={HeroImage}
              alt="Portrait of Gowtham Chandrasekaran"
              className="rounded-2xl shadow-none mx-auto max-w-lg w-2/3 md:w-full object-cover"
            />
            {/* thin accent bar under image */}
            <div className="mt-3 h-[3px] rounded-xl bg-gradient-to-r from-transparent via-sky-600/60 to-transparent" />
          </div>
        </motion.div>

        {/* headline + actions */}
        <motion.div
          className="flex flex-col flex-wrap justify-center sm:pl-[150px] h-full py-[60px] pt-[10px] sm:pt-[50px]"
          initial={"offscreen"}
          animate={"onscreen"}
          variants={headAnimate}
        >
          {/* typing line */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {typedName}
            <span className="ml-1 inline-block align-baseline border-r-2 border-white/80 animate-pulse h-7 sm:h-8 relative -top-1" />
          </h1>

          <p className="text-slate-300 py-4 max-w-md">
            As a GenAI builder, I ship resilient,
            scalable products across web, cloud, and AI.
          </p>

          {/* action buttons – styled, same links */}
          <div className="flex flex-wrap justify-start sm:flex-row gap-3">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white ring-1 ring-sky-400/40 hover:bg-sky-500 transition-colors"
            >
              Resume
              <MdKeyboardArrowRight size={22} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://www.linkedin.com/in/gowtham-c/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/gowtham-chandrasekaran"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
            >
              <AiOutlineGithub size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/gowtham6309/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
            >
              <SiLeetcode size={18} />
              <span>LeetCode</span>
            </a>
          </div>

          {/* tiny meta strip */}
          <div className="mt-6 text-xs text-slate-400">
            Currently working as a Senior Data Scientist at Citizens Bank.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
