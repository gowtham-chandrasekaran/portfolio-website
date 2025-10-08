import React, { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const divAnimate = {
  offscreen: { y: 8, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const Portfolio = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState("all");

  const portfolios = [
    {
      id: 1.3,
      technology: "ml",
      title: "Personal Assistant Chatbot for Portfolio Website",
      text:
        "Built an AI-powered personal assistant chatbot for my portfolio website using React, FastAPI, and OpenAI's GPT-4. The chatbot leverages Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses about my projects and skills.",
      link:
        "https://github.com/gowtham-chandrasekaran/LinkedIn_Job_Match_Automation",
    },
    {
      id: 1.2,
      technology: "ml",
      title: "Linkedin Job Match Automation using N8N",
      text:
        "Built an agentic AI workflow that runs an end-to-end job discovery and triage using n8n, OpenAI, and Google Sheets. It ingests LinkedIn-style RSS items, pulls each posting’s page, extracts clean fields, scores fit against your resume, and writes only relevant roles to a sheet interface.",
      link:
        "https://github.com/gowtham-chandrasekaran/LinkedIn_Job_Match_Automation",
    },
    {
      id: 1.1,
      technology: "ml",
      title: "Generative AI Fitness Coach",
      text:
        "Developed a generative AI-based chatbot using OpenAI's GPT-3.5 and OpenAI Assistant to provide personalized fitness advice. Utilized Next.js, TypeScript for the frontend development to create an interactive user interface.",
      link: "https://generative-ai-fitness-app.vercel.app/",
    },
    {
      id: 1,
      technology: "ml",
      title: "Driver Distraction Detection",
      text:
        "Built a Convolutional Neural Network model to detect distractions while driving and crafted a scoring mechanism for the drivers that can be used by insurance companies to set pricing plans to avoid gender/age bias.",
      link: "#",
    },
    {
      id: 2,
      technology: "ml",
      title: "College Database Custom ChatGPT",
      text:
        "Created a Streamlit chatbot with OpenAI function call and SQL integration, enabling English language interactions and dynamic responses based on the college database.",
      link:
        "https://github.com/gowtham-chandrasekaran/College-Database-Custom-ChatGPT",
    },
    {
      id: 3,
      technology: "ml",
      title: "Face Mask Violation Detection",
      text:
        "Developed a scalable and available face mask violation detection web application using Flask, AWS Rekognition, Lambda, SQS, RDS, S3, ECS, and Load Balancer.",
      link:
        "https://github.com/gowtham-chandrasekaran/Face-Mask-Violation-Detection-using-AWS-services",
    },
    {
      id: 4,
      technology: "web",
      title: "Covid19 Dashboard",
      text:
        "Designed and implemented a dashboard to display covid cases of different countries along with a graph to see the trend in that selected country.",
      link: "https://github.com/gowthambalboa/COVID19-Dashboard",
    },
    {
      id: 5,
      technology: "ml",
      title: "5G Handover Optimization",
      text:
        "Wrote a paper and implemented a solution that optimized the number of handover connections in a self-developed 2D grid world environment having 5G antennas using Q Learning.",
      link:
        "https://github.com/gowthambalboa/Handover-Optimisation-in-5G-using-Reinforcement-Learning",
    },
    {
      id: 6,
      technology: "other",
      title: "Drone Logistics Routing",
      text:
        "Implemented a time and resource-efficient solution to find the optimal route for drones to deliver from a warehouse to different locations using the concept of the traveling salesman technique.",
      link:
        "https://github.com/gowthambalboa/Optimal-Logistics-Routing-for-Drones",
    },
    {
      id: 7,
      technology: "ml",
      title: "Targeted Advertising",
      text:
        "Collected multiple consumer emails and used Mahout to cluster users based on their interests by analyzing the most frequent terms used in the emails and then target advertisements to each group.",
      link: "https://github.com/gowthambalboa/Targeted-Advertising",
    },
    {
      id: 8,
      technology: "web",
      title: "Password Generator",
      text:
        "Empower your security with a customizable password generator app, capable of generating passwords up to 40 characters in length, with optional inclusion of numbers and special characters.",
      link:
        "https://github.com/gowtham-chandrasekaran/React-Apps/tree/main/04PasswordGenerator",
    },
    {
      id: 9,
      technology: "web",
      title: "Currency Converter",
      text:
        "Seamless currency conversion with our React-based application, featuring Tailwind CSS integration and real-time currency data from an API, including support for popular cryptocurrencies.",
      link:
        "https://github.com/gowtham-chandrasekaran/React-Apps/tree/main/05CurrencyConverter",
    },
    {
      id: 10,
      technology: "cloud",
      title: "Video on Demand Full Stack Web Application using GCP",
      text:
        " Seamlessly integrated user authentication, video compression and upload in the next.js application. Implemented Docker containerzation and Cloud Run deployment on GCP for scalable and highly available media.",
      link: "https://github.com/gowtham-chandrasekaran/youtube-clone",
    },
    {
      id: 11,
      technology: "web",
      title: "Expense Tracker",
      text:
        " Created an expense tracker application that displays expenses made in a year and has functionalities like adding, deleting, and filtering expenses based on a year.",
      link: "https://expense-tracker-gowtham.netlify.app/",
    },
    {
      id: 12,
      technology: "cloud",
      title:
        "Serverless Face Mask Violation Detection Using Flask and AWS",
      text:
        "Attained 98% accuracy in face mask violation detection using AWS Rekognition. Ensured scalability and zero downtime with AWS Lambda, AWS SQS, and load balancer.",
      link:
        "https://github.com/gowtham-chandrasekaran/Face-Mask-Violation-Detection-using-AWS-services",
    },
  ];

  // keep your existing filtering logic
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
    <div name="portfolio" className="py-[80px] w-full text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-[18px]">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="mt-3 text-slate-400">
            Selected projects spanning AI/ML, full-stack web, and cloud.
          </p>
        </div>

        {/* Filters as chips (styling only) */}
        <div className="mt-6 mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTechnology("all")}
            className={[
              "px-3 py-1.5 rounded-full text-sm ring-1 transition-colors",
              activeTechnology === "all"
                ? "bg-sky-600 text-white ring-sky-400/40"
                : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10",
            ].join(" ")}
          >
            All Projects
          </button>

          <button
            onClick={() => setActiveTechnology("ml")}
            className={[
              "px-3 py-1.5 rounded-full text-sm ring-1 transition-colors",
              activeTechnology === "ml"
                ? "bg-sky-600 text-white ring-sky-400/40"
                : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10",
            ].join(" ")}
          >
            AI/ML
          </button>

          <button
            onClick={() => setActiveTechnology("web")}
            className={[
              "px-3 py-1.5 rounded-full text-sm ring-1 transition-colors",
              activeTechnology === "web"
                ? "bg-sky-600 text-white ring-sky-400/40"
                : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10",
            ].join(" ")}
          >
            React
          </button>

          <button
            onClick={() => setActiveTechnology("cloud")}
            className={[
              "px-3 py-1.5 rounded-full text-sm ring-1 transition-colors",
              activeTechnology === "cloud"
                ? "bg-sky-600 text-white ring-sky-400/40"
                : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10",
            ].join(" ")}
          >
            Cloud
          </button>

          <button
            onClick={() => setActiveTechnology("other")}
            className={[
              "px-3 py-1.5 rounded-full text-sm ring-1 transition-colors",
              activeTechnology === "other" // ← fixed comparison for 'Other'
                ? "bg-sky-600 text-white ring-sky-400/40"
                : "bg-white/5 text-slate-200 ring-white/10 hover:bg-white/10",
            ].join(" ")}
          >
            Other
          </button>
        </div>

        {/* Cards grid (styling only) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          layout
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filtered.map(({ id, title, text, link }) => (
            <motion.article
              key={id}
              className="group rounded-2xl bg-slate-900/70 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-shadow"
              layout
              variants={divAnimate}
            >
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{text}</p>

                <div className="mt-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm"
                  >
                    <AiOutlineGithub size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* bottom accent like other sections */}
              <div className="h-[3px] rounded-b-2xl bg-gradient-to-r from-transparent via-sky-600/60 to-transparent" />
            </motion.article>
          ))}
        </motion.div>

        {/* More link */}
        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/gowtham-chandrasekaran?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-full text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
