import React from "react";
import { motion } from "framer-motion";

/* ===================== ICONS ===================== */
const Icon = ({ name, className = "" }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 };
  switch (name) {
    case "frontend": // React atom style
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="9" ry="4" />
          <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(120 12 12)" />
        </svg>
      );
    case "backend": // server stack
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <rect x="3" y="4" width="18" height="5" rx="1" />
          <rect x="3" y="10" width="18" height="5" rx="1" />
          <rect x="3" y="16" width="18" height="4" rx="1" />
          <circle cx="7" cy="6.5" r="0.8" />
          <circle cx="7" cy="12.5" r="0.8" />
          <circle cx="7" cy="18" r="0.8" />
        </svg>
      );
    case "ai": // brain + links
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <path d="M9 4a3 3 0 0 0-3 3v2a3 3 0 0 0 0 6v2a3 3 0 0 0 3 3m6-16a3 3 0 0 1 3 3v2a3 3 0 0 1 0 6v2a3 3 0 0 1-3 3" />
          <path d="M9 8h3m0 0 3-2m-3 2v3m0 0 3 2m-3-2H9" />
        </svg>
      );
    case "database": // cylinder
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v9c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );
    case "cloud": // cloud + bars
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <path d="M7 14a4 4 0 1 1 3.9-5 5 5 0 1 1 4.6 7H7z" />
          <path d="M5 18h14M7 21h10" />
        </svg>
      );
    case "security": // shield check
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <path d="M12 3l8 4v5c0 5-4 9-8 9s-8-4-8-9V7l8-4z" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );
    case "tools": // laptop/code
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <rect x="4" y="5" width="16" height="10" rx="1" />
          <path d="M2 18h20M9 9l-2 2 2 2m6-4 2 2-2 2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );
  }
};

/* ===================== DATA ===================== */
const CATEGORIES = [
  {
    title: "Frontend",
    icon: "frontend",
    iconBg: "bg-sky-500/15 ring-sky-400/30 text-sky-300",
    items: [
      "React",
      "Next.js (SSR/ISR)",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML/CSS",
      "Redux Toolkit",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "backend",
    iconBg: "bg-emerald-500/15 ring-emerald-400/30 text-emerald-300",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "REST",
      "GraphQL",
      "WebSockets",
      "JWT / OAuth",
    ],
  },
  {
    title: "AI / Generative AI",
    icon: "ai",
    iconBg: "bg-fuchsia-500/15 ring-fuchsia-400/30 text-fuchsia-300",
    items: [
      "LangChain",
      "LangGraph",
      "LLMs (GPT-4, Llama-3, Mistral)",
      "RAG",
      "Vector DB: Qdrant, Astra, Pinecone",
      "Embeddings: BGE, OpenAI",
      "LoRA / QLoRA",
      "DeepEval, LLM-as-Judge",
      "Whisper, LiveKit (STT/TTS)",
      "Agentic workflows / HITL",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    iconBg: "bg-cyan-500/15 ring-cyan-400/30 text-cyan-300",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Redis",
      "ORM: Prisma, Sequelize, SQLAlchemy",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    iconBg: "bg-amber-500/15 ring-amber-400/30 text-amber-300",
    items: [
      "AWS (Lambda, S3, EC2, RDS, SQS)",
      "CloudWatch / CloudTrail",
      "GCP (Cloud Run)",
      "Docker",
      "CI/CD — GitHub Actions",
      "Serverless",
      "Monitoring / Logging",
    ],
  },
  {
    title: "Security & Messaging",
    icon: "security",
    iconBg: "bg-rose-500/15 ring-rose-400/30 text-rose-300",
    items: ["AWS IAM", "Presidio PII Redaction", "SendGrid", "Twilio", "React.Email"],
  },
  {
    title: "Languages & Utilities",
    icon: "tools",
    iconBg: "bg-indigo-500/15 ring-indigo-400/30 text-indigo-300",
    items: ["Python", "JavaScript / TypeScript", "Java", "C++", "n8n", "DBeaver", "Postman", "VS Code"],
  },
];

/* ===================== ANIMATION VARIANTS ===================== */
const cardVariants = {
  offscreen: { y: 8, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};
const chipVariants = {
  offscreen: { opacity: 0, scale: 0.98 },
  onscreen: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

/* ===================== COMPONENT ===================== */
const Technologies = () => {
  return (
    <div name="technologies" className="w-full py-[80px]">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* header */}
        <div>
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6 text-slate-400">
            A current snapshot of the tools I use to build production systems across web, cloud, and Generative AI.
          </p>
        </div>

        {/* cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`shrink-0 h-10 w-10 grid place-content-center rounded-xl ring-1 ${cat.iconBg}`}>
                  <Icon name={cat.icon} />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              {/* chips */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={chipVariants}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
