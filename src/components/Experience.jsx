import React from "react";
import exp from "../assets/expimg.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full py-[80px] pb-20 sm:pb-0 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>

        <div class="mx-auto px-4 sm:px-0 py-8">
          <section class="rounded-lg bg-gradient-to-b from-black to-gray-800 shadow-md shadow-blue-600 p-8">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <img
                alt="Work Experience"
                src={exp}
                class="aspect-square ml-11 sm:ml-0 rounded-lg object-cover w-2/3 sm:w-full"
              />

              <blockquote class="sm:col-span-2">
                <p class="text-2xl text-blue-600 font-medium">
                  Tata Consultancy Services
                </p>
                <p class="text-sm sm:text-md text-white font-medium">
                  May 2019 - May 2021
                </p>
                <br />
                <p class="text-white font-medium">
                  <span className="text-md">
                    Assigned with the following tasks during my tenure:
                  </span>
                  <br />
                  <br />
                  <ul className="exp text-md">
                    <li> Web Application Development</li>
                    <li> Responsive UI design</li>
                    <li> Creating wireframes</li>
                    <li>
                      Analysing service requests, events, and incidents on
                      ServiceNow
                    </li>
                    <li> Handling SQL and NoSQL database</li>
                    <li> Debugging and Application Maintenance</li>
                    <li> Creating REST APIs</li>
                    <li> Connecting and fetching data from the database</li>
                    <li> Defect Analysis and Unit Testing</li>
                    <li> Agile methodology development</li>
                  </ul>
                </p>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
