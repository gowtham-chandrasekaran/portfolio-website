import React from "react";
import { motion } from "framer-motion";

/* ============ SMALL ICONS (inline SVGs, no deps) ============ */
const Icon = ({ name, className = "" }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 };
  switch (name) {
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} {...common}>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case "chevron":
      return (
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

/* ============ ANIMATION VARIANTS ============ */
const cardVariants = {
  offscreen: { y: 8, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ============ DATA (edit content here) ============ */
const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Thereafter, Inc.",
    dates: "Aug 2024 – Present",
    sections: [
      {
        title: "Generative AI Development",
        bullets: [
          "Built RAG chatbots (LangChain.js, Llama 3.3 70B, BGE, Qdrant) improving retrieval quality and response speed.",
          "Added PII masking with Presidio and guardrails for privacy/regulatory compliance.",
          "Shipped AI ‘podcast interviewer’ using GPT-4 + STT/TTS (higher engagement & session length).",
        ],
      },
      {
        title: "Full Stack & Cloud Engineering",
        bullets: [
          "Architected Node.js microservices + React; applied lazy loading and performance optimizations.",
          "Integrated AWS Cognito; automated deployments (EC2/S3/CodePipeline) with CloudWatch monitoring.",
          "Hardened AWS security with IAM and encryption; led Agile delivery to raise team velocity.",
        ],
        foot: "Stack: Node.js, React, LangChain.js, Llama 3.3, BGE, Qdrant, Presidio, GPT-4, AWS (Cognito, CodePipeline, EC2, S3, CloudWatch), REST, Docker, Git, Agile",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Jaunt",
    dates: "Aug 2024 – Nov 2024",
    sections: [
      {
        title: "Generative AI Development",
        bullets: [
          "RAG features with LangChain, OpenAI embeddings, cross-encoder rerankers, Bedrock Llama 3.1 70B.",
          "Improved personalization using role-based prompting and LLM-as-Judge evaluation.",
        ],
      },
      {
        title: "Full Stack Development & Data Engineering",
        bullets: [
          "FastAPI services for low-latency retrieval and contextual audio guides.",
          "Selenium scrapers + DBSCAN clustering for dedupe/consistency of location data.",
          "AWS RDS/PostgreSQL for secure, scalable storage and pipelines.",
        ],
        foot: "Stack: DBSCAN, FuzzyWuzzy, Bedrock Llama 3.1, AWS RDS, PostgreSQL, FastAPI, Selenium, LangChain, OpenAI, AWS (EC2, S3, Lambda)",
      },
    ],
  },
  {
    role: "Software Engineering Assistant",
    company: "San Jose State University",
    dates: "Dec 2023 – Jul 2024",
    sections: [
      {
        title: "Generative AI Solutions",
        bullets: [
          "Streamlit chatbot with OpenAI + SQL for natural-language data access by non-technical staff.",
        ],
      },
      {
        title: "Web Analytics & Digital Optimization",
        bullets: [
          "Advanced audience/acquisition analysis in Google Analytics for content strategy.",
          "Fixed broken links with Siteimprove to improve reliability and accessibility.",
        ],
        foot: "Stack: Streamlit, OpenAI, SQL, Google Analytics, Siteimprove",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    dates: "May 2019 – May 2021",
    sections: [
      {
        title: "Full Stack Application Development",
        bullets: [
          "Dashboards & SPAs with React, Spring Boot, Chart.js for enterprise metrics.",
          "Performance wins via lazy loading, Redux, and code-splitting.",
        ],
      },
      {
        title: "Cloud Architecture & DevOps",
        bullets: [
          "Secure AWS solutions (EC2, S3, Lambda, RDS, DynamoDB, CloudWatch/Trail).",
          "CI/CD with Jenkins, Docker, Kubernetes for automated deploys.",
        ],
      },
      {
        title: "Backend Engineering & Security",
        bullets: [
          "Node.js/Express REST services with OAuth 2.0 + JWT auth.",
          "Quality via best practices, PRs, and automated tests (Jest, Enzyme).",
        ],
        foot: "Stack: React, Node.js, Express.js, Spring Boot, Chart.js, AWS (EC2, S3, Lambda, RDS, DynamoDB, CloudWatch, CloudTrail), Docker, Kubernetes, Jenkins, OAuth 2.0, JWT, MongoDB, REST, Git, Agile",
      },
    ],
  },
];

/* ============ COMPONENT ============ */
const Experience = () => {
  return (
    <div name="experience" className="w-full py-[80px] sm:pb-0 text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {/* Cards list */}
        <motion.div
          className="mt-6 space-y-5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {EXPERIENCES.map((exp) => (
            <motion.details
              key={`${exp.role}-${exp.company}-${exp.dates}`}
              variants={cardVariants}
              className="group rounded-2xl bg-slate-900/70 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <summary className="list-none cursor-pointer select-none">
                <div className="flex items-start gap-3 p-5 md:p-6">
                  <div className="shrink-0 grid place-content-center h-10 w-10 rounded-xl ring-1 text-sky-300 bg-sky-500/15 ring-sky-400/30">
                    <Icon name="briefcase" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <span className="text-slate-400">•</span>
                      <a
                        className="text-sky-300 hover:text-sky-200 underline-offset-2"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {exp.company}
                      </a>
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">{exp.dates}</p>
                  </div>
                  <div className="mt-1 text-slate-400 transition-transform group-open:rotate-180">
                    <Icon name="chevron" />
                  </div>
                </div>
              </summary>

              {/* content */}
              <div className="px-5 pb-5 md:px-6 md:pb-6">
                {exp.sections.map((sec, i) => (
                  <div key={i} className={i > 0 ? "mt-6" : ""}>
                    <h4 className="text-base font-semibold mb-3">{sec.title}</h4>
                    {sec.bullets?.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        {sec.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {sec.foot && (
                      <p className="mt-3 text-sm text-slate-400">
                        {sec.foot}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* subtle bottom accent like your screenshot */}
              <div className="h-[3px] rounded-b-2xl bg-gradient-to-r from-transparent via-sky-600/60 to-transparent" />
            </motion.details>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
