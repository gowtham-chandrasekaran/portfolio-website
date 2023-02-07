import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full pb-20 sm:pb-0 h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div class="w-full mx-auto betterhover:scale-105 duration-500">
          <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
            <div
              class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
              id="headerTerminal"
            >
              <div
                class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                id="closebtn"
              ></div>
              <div
                class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
                id="minbtn"
              ></div>
              <div
                class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
                id="maxbtn"
              ></div>
              <div class="mx-auto pr-16" id="terminaltitle">
                <p class="text-center text-sm">Terminal</p>
              </div>
            </div>
            <div
              class="pl-1 pt-1 h-auto  text-green-400 font-mono text-xs bg-black"
              id="console"
            >
              <p class="text-sm sm:text-lg pb-1">
                Last login: Sat Feb 4 01:32:15 on ttys005
              </p>
              <p class="text-sm sm:text-lg pb-1">
                gowthamc@gowtham-chandrasekaran ~ % cat experience.txt
              </p>
              <br />
              <p class="text-sm sm:text-lg pb-1">
                Tata Consultancy Services &emsp; 05/2019 - 05/2021
              </p>
              <p class="text-sm sm:text-lg pb-1">
                Software Engineer &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                India
              </p>
              <br />
              <p class="text-sm sm:text-lg pb-1">
                • Constructed React components on a server health monitoring
                dashboard to visualize CPU usage rate, Disk Capacity Usage,
                Network throughput that improved the readability of metrics.
              </p>
              <p class="text-sm sm:text-lg pb-1">
                • Created RESTful APIs to access server health metrics from the
                database and processed them ensuring data consistency and
                security.
              </p>
              <p class="text-sm sm:text-lg pb-1">
                • Implemented a 2-factor User authentication page that performs
                password and OTP verification which improved the security using
                Angular and NodeJS.
              </p>
              <p class="text-sm sm:text-lg pb-1">
                • Created concept mockups and wireframes that increased overall
                client satisfaction and implemented them in the production
                environment.
              </p>
              <p class="text-sm sm:text-lg pb-1">
                • Developed unit tests using TDD to ensure code quality and
                prevent regressions.
              </p>
              <p class="text-sm sm:text-lg pb-1">
                • Collaborated with cross-functional teams, including UX
                designers, product managers and DevOps engineers, to deliver
                high-quality projects on time and within budget.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
