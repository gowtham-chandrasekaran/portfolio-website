import React from "react";
import Accordian, { AccordianItem } from "./Accordian";
import { motion } from "framer-motion";

const divAnimate = {
  offscreen: { x: 0, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Experience = () => {
  return (
    <div name="experience" className="w-full py-[80px] sm:pb-0 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <motion.div
          class="mx-auto px-4 sm:px-0 py-8"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          variants={divAnimate}
        >
          <div className="flex flex-col items-center justify-between">
            <Accordian>
              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-5 shadow-blue-600"
                value="1"
                trigger="Software Engineer"
                subText="Thereafter, Inc."
                dateText="Aug 2024 - Present"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Generative AI Development
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed and deployed Retrieval-Augmented Generation (RAG) chatbots using Langchain.js, Llama 3.3 70B, BGE embeddings, and Qdrant vector database, increasing query speed and enhancing natural language understanding.
                    </li>
                    <li>
                      Implemented advanced PII masking with Presidio and LLM guardrails to ensure end-to-end data privacy and regulatory compliance for sensitive user information.
                    </li>
                    <li>
                      Engineered an AI-driven podcast interviewer leveraging GPT-4, speech-to-text (STT), and text-to-speech (TTS) technologies, boosting user engagement and session duration.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Full Stack & Cloud Engineering
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Architected scalable Node.js microservices and React front-end applications, applying lazy loading and optimizing load times for high-performance user experiences.
                    </li>
                    <li>
                      Integrated AWS Cognito for secure user authentication and access management, and automated AWS deployments using CodePipeline, EC2, S3, and CloudWatch for real-time monitoring.
                    </li>
                    <li>
                      Strengthened AWS cloud security with IAM policies, encryption, and vulnerability remediation, achieving zero-issue audit results.
                    </li>
                    <li>
                      Led Agile feature delivery and sprint management for a cross-functional engineering team, increasing development velocity and code quality.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: Node.js, React, Langchain.js, Llama 3.3 70B, BGE embeddings, Qdrant, Presidio, GPT-4, AWS (Cognito, CodePipeline, EC2, S3, CloudWatch), REST APIs, Docker, Git, Agile
                  </p>
                </div>
              </AccordianItem>

              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-5 shadow-blue-600"
                value="2"
                trigger="Software Engineer"
                subText="Jaunt"
                dateText="Aug 2024 - Nov 2024"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Generative AI Development</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Built GenAI-powered travel app features with RAG chatbot architecture, leveraging LangChain, OpenAI embeddings, cross-encoder reranking, and Amazon Bedrock’s Llama 3.1 70B model for highly relevant itinerary recommendations.
                    </li>
                    <li>Enhanced contextual reliability and user personalization using role-based prompt engineering and automated evaluation with LLM-as-a-judge.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Full Stack Development & Data Engineering
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Designed and implemented FastAPI backends for real-time, low-latency data retrieval and contextual audio guides.
                    </li>
                    <li>
                      Developed Selenium-based web scrapers and applied DBSCAN clustering for large-scale location data deduplication and consistency.
                    </li>
                    <li>
                      Managed secure, scalable cloud storage using AWS RDS and PostgreSQL, optimizing data pipelines for travel content delivery.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: DBSCAN, Fuzzywuzzy, Amazon Bedrock, Llama 3.1 70B, AWS RDS, PostgreSQL, FastAPI, Selenium, LangChain, OpenAI, AWS (EC2, S3, Lambda)
                  </p>
                </div>
              </AccordianItem>

              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-5 shadow-blue-600"
                value="3"
                trigger="Software Engineering Assistant"
                subText="San Jose State University"
                dateText="Dec 2023 - Jul 2024"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Generative AI Solutions
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed a Streamlit chatbot integrated with OpenAI and SQL databases, enabling natural language data queries and automating information retrieval for non-technical staff.
                    </li>
                    
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Web Analytics & Digital Optimization
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Utilized Google Analytics for advanced audience, acquisition, and user behavior analysis, delivering actionable insights for website content strategy.
                    </li>
                    <li>
                      Enhanced digital reliability and accessibility by identifying and resolving broken links with Siteimprove, improving overall user experience.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: Streamlit, OpenAI, SQL, Google Analytics,
                    Siteimprove
                  </p>
                </div>
              </AccordianItem>

              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-4 shadow-blue-600"
                value="4"
                trigger="Software Engineer"
                subText="Tata Consultancy Services"
                dateText="May 2019 - May 2021"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Full Stack Application Development
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Engineered interactive dashboards and Single Page Applications (SPAs) using React, Spring Boot, and Chart.js for enterprise-grade metric visualization and reporting.
                    </li>
                    <li>
                      Optimized application performance with lazy loading, Redux state management, and code-splitting, reducing load times and improving scalability.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Cloud Architecture & DevOps
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Architected secure, scalable AWS cloud solutions, integrating EC2, S3, Lambda, RDS, DynamoDB, CloudWatch, and CloudTrail for comprehensive monitoring and logging.
                    </li>
                    <li>
                      Orchestrated CI/CD pipelines using Jenkins, Docker, and Kubernetes for automated deployments and infrastructure efficiency.
                    </li>
                    
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Backend Engineering & Security
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed robust backend services with Node.js, Express.js, and RESTful APIs, implementing OAuth 2.0 and JWT for secure authentication and authorization.
                    </li>
                    <li>
                      Improved code quality and reliability through best practices, peer reviews, and automated testing (Jest, Enzyme), reducing production bugs.
                    </li>
                    
                  </ul>
                  <p className="mt-4">
                    Tech Stack: React, Node.js, Express.js, Spring Boot, Chart.js, AWS (EC2, S3, Lambda, RDS, DynamoDB, CloudWatch, CloudTrail), Docker, Kubernetes, Jenkins, OAuth 2.0, JWT, MongoDB, REST APIs, Git, Agile
                  </p>
                </div>

                
              </AccordianItem>
            </Accordian>
            {/* <Accordian>
              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-5 shadow-blue-600"
                value="2"
                trigger="Software Engineering Assistant"
                subText="San Jose State University"
                dateText="May 2023 - Jul 2024"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Utilized Google Analytics and Siteimprove
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Performed audience, acquisition, and behavior analysis
                      using Google Analytics
                    </li>
                    <li>
                      Utilized Siteimprove for fixing broken links and enhancing
                      website quality
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Created Department-Specific Reports on Looker Studio
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Visualized user sessions, page analytics, and other
                      relevant metrics using Looker Studio
                    </li>
                    <li>
                      Generated department-specific reports to provide
                      actionable insights
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Built a Streamlit Chatbot integrated with OpenAI's large
                    language model
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed a dynamic English chatbot using Streamlit and
                      OpenAI's large language model
                    </li>
                    <li>
                      Utilized SQL for database interactions to enhance chatbot
                      functionality
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: OpenAI, Google Analytics, Looker Studio, Python,
                    Siteimprove, Docusign, HTML, CSS, Javascript, Microsoft
                    Excel, Google Sheets
                  </p>
                </div>
              </AccordianItem>
              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-4 shadow-blue-600"
                value="1"
                trigger="Software Engineer"
                subText="Tata Consultancy Services"
                dateText="May 2019 - May 2021"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    React Web Development for Banking Industry at CitiBank
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed key components of an API management dashboard
                      using React, visualizing API metrics
                    </li>
                    <li>
                      Implemented 2-factor authentication by integrating OAuth
                      2.0
                    </li>
                    <li>
                      Acted as Scrum Master, overseeing Kanban backlog
                      management and Jira-based retrospectives in Agile
                      development
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: React, Chart.js, Node.js, Git, Jira, Kubernetes,
                    Docker, MongoDB, REST API
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Angular JS Web Development for E-Commerce Industry at H&M
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Expertise in developing RESTful APIs to facilitate
                      seamless data exchange and enhance user experiences
                    </li>
                    <li>
                      Developed unit test cases and functional test automation
                      code, ensuring the delivery of high-quality, accessible
                      code
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: Angular JS, SQL (Microsoft SQL Server), REST
                    API, HTML, CSS, Tailwind
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Customer Experience Enhancement for E-Commerce Industry at
                    Aldi
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Streamlined product catalog management, shopping cart, and
                      secure checkout pages using Adobe Experience Manager
                    </li>
                    <li>
                      Integrated Adobe Campaign and Marketo for personalized
                      email marketing, boosting conversion rates by 85%
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: Adobe Experience Manager, Adobe Campaign
                    Classic, Marketo, HTML, CSS, Python
                  </p>
                </div>
              </AccordianItem>
              {/* <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-5 shadow-blue-600 p-8"
                value="3"
                trigger="Accordian Item 3"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, quas? Non enim obcaecati eaque quaerat consequatur
                vero consequuntur vel fugit, quia nam ipsum voluptates quos a,
                doloribus velit cupiditate. Praesentium?
              </AccordianItem> */}
            {/* </Accordian> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
