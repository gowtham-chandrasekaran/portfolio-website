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
                    Email System Architecture
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Architected and implemented a comprehensive email system
                      using SendGrid, Nest.js, and Angular
                    </li>
                    <li>
                      Increased user engagement by 40% and reduced communication
                      latency by 25%
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    AI Podcast Feature Development
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developing an AI Podcast Feature using Retrieval-Augmented
                      Generation (RAG)
                    </li>
                    <li>
                      Utilizing Amazon Bedrock production models including
                      Claude, Llama, and Anthropic
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Full-Stack Development and Maintenance
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Engaged in ad hoc development across front-end and
                      back-end
                    </li>
                    <li>
                      Provided code reviews and technical support to ensure code
                      quality and reliability
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: SendGrid, Nest.js, Angular, Amazon Bedrock, RAG,
                    Claude, Llama, Anthropic
                  </p>
                </div>
              </AccordianItem>

              <AccordianItem
                className="rounded-lg bg-gray-800 shadow-md mb-5 shadow-blue-600"
                value="2"
                trigger="Software Engineer"
                subText="Jaunt"
                dateText="Aug 2024 - Present"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Data Deduplication</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Spearheaded deduplication of 150,000 web-scraped articles
                      using DBSCAN and Fuzzywuzzy
                    </li>
                    <li>Reduced duplicate data by 45%</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    AI-Powered Content Generation
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Utilized Amazon Bedrock's Llama 3.1 70B model for travel
                      guide content generation
                    </li>
                    <li>
                      Improved content relevance by 25% through strategic prompt
                      engineering
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Database Management
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Leveraged AWS RDS with PostgreSQL for efficient storage of
                      web-scraped content
                    </li>
                    <li>Ensured secure and scalable data storage</li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: DBSCAN, Fuzzywuzzy, Amazon Bedrock, Llama 3.1
                    70B, AWS RDS, PostgreSQL
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
                    Streamlit Chatbot Development
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed a Streamlit chatbot with OpenAI and SQL database
                      integration
                    </li>
                    <li>
                      Enabled non-technical staff to easily retrieve information
                      from the college database
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Web Analytics and Optimization
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Utilized Google Analytics for audience, acquisition, and
                      behavior analysis
                    </li>
                    <li>
                      Used Siteimprove for fixing broken links and improving
                      website quality
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
                    H&M Retail Tags Management Dashboard
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed dashboard for product tags creation and
                      management
                    </li>
                    <li>
                      Created microservices using Spring Boot for enhanced
                      scalability
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Citibank Server Metrics Dashboard
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed a Single Page Application (SPA) using React
                    </li>
                    <li>
                      Visualized metrics using Chart.js for enhanced data
                      interpretation
                    </li>
                    <li>
                      Implemented lazy loading and used React Profiler for
                      performance optimization
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    AWS Architecture and DevOps
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Architected solutions using AWS services (EC2, S3, Lambda,
                      RDS, DynamoDB)
                    </li>
                    <li>
                      Integrated AWS CloudWatch and CloudTrail for monitoring
                      and logging
                    </li>
                    <li>
                      Orchestrated CI/CD pipelines using Jenkins, Docker, and
                      Kubernetes
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Backend Development and Database Management
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Created backend services using Node.js with Express.js
                    </li>
                    <li>
                      Implemented SQL and NoSQL queries, stored procedures, and
                      triggers
                    </li>
                    <li>
                      Enabled RESTful APIs with OAuth 2.0 and JWT for enhanced
                      security
                    </li>
                  </ul>
                  <p className="mt-4">
                    Tech Stack: React, Angular, Spring Boot, Node.js, AWS,
                    Docker, Kubernetes, SQL, NoSQL, Jenkins
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
