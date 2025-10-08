import React from "react";
import { motion } from "framer-motion";
// optional image (remove if you don't want it)
import education from "../assets/education.png";

/* ============ SMALL ICONS (inline SVGs) ============ */
const Icon = ({ name, className = "" }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 };
  switch (name) {
    case "cap":
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <path d="M3 9l9-4 9 4-9 4-9-4z" />
          <path d="M12 13v6" />
          <path d="M7 11v5a5 5 0 0 0 10 0v-5" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} {...common}>
          <path d="M12 3l3 6 6 1-4.5 4.4L17 21l-5-2.7L7 21l1.5-6.6L4 10l6-1z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

/* ============ ANIMATIONS ============ */
const cardVariants = {
  offscreen: { y: 8, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};
const chipVariants = {
  offscreen: { opacity: 0, scale: 0.98 },
  onscreen: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
};

/* ============ DATA ============ */
const SCHOOLS = [
  {
    degree: "MS in Computer Science",
    school: "San Jose State University",
    dates: "Aug 2021 – Dec 2023",
    gpa: "3.92 / 4.0",
    highlights: ["Distributed Systems","Artificial Intelligence", "Machine Learning", "Wireless Mobile Networking","Database Systems","Advanced Parallel Processing","Computer Communication Systems","Design and Analysis of Algorithms"],
  },
  {
    degree: "BE in Computer Science & Engineering",
    school: "Anna University",
    dates: "Aug 2015 – May 2019",
    gpa: "8.2 / 10.0",
    highlights: ["Data Structures & Algorithms", "DBMS", "Operating Systems"],
  },
];

const About = () => {
  return (
    <div name="education" className="w-full py-[80px] text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>

        {/* Card */}
        <motion.div
          className="mt-6 rounded-2xl bg-slate-900/70 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8">
            {/* left: illustration (optional) */}
            <div className="order-last md:order-first">
              <img
                src={education}
                alt="Education"
                className="rounded-xl w-3/4 md:w-full aspect-square object-cover mx-auto"
              />
            </div>

            {/* right: degrees */}
            <div className="md:col-span-2 space-y-6">
              {SCHOOLS.map((s) => (
                <motion.div
                  key={s.degree + s.school}
                  variants={cardVariants}
                  className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 grid place-content-center h-10 w-10 rounded-xl ring-1 text-sky-300 bg-sky-500/15 ring-sky-400/30">
                      <Icon name="cap" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{s.degree}</h3>
                      <p className="text-sky-300">{s.school}</p>
                      <p className="text-sm text-slate-400">{s.dates}</p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/5 ring-1 ring-white/10">
                          <Icon name="badge" className="text-amber-300" />
                          <span>GPA: {s.gpa}</span>
                        </span>

                        {/* highlight chips */}
                        {s.highlights?.map((h) => (
                          <motion.span
                            key={h}
                            variants={chipVariants}
                            className="px-2.5 py-1 rounded-full text-xs bg-white/5 ring-1 ring-white/10"
                          >
                            {h}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* subtle bottom accent like other sections */}
          <div className="h-[3px] rounded-b-2xl bg-gradient-to-r from-transparent via-sky-600/60 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
