import React from "react";
import education from "../assets/education.png";

const About = () => {
  return (
    <div name="education" className="w-full py-[80px] text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        <div class="w-full mx-auto px-4 py-8">
          <section class="rounded-lg bg-gray-800 shadow-md shadow-blue-600 p-8">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <img
                alt="Man"
                src={education}
                class="aspect-square ml-11 sm:ml-0 rounded-lg object-cover w-2/3 sm:w-full"
              />

              <blockquote class="sm:pt-[15px] sm:col-span-2">
                <p class="text-2xl text-blue-600 font-medium">
                  MS in Computer Science
                </p>
                <p class="text-lg sm:text-md text-blue-600 font-medium">
                  San Jose State University
                </p>
                <p class="text-sm sm:text-md text-white font-medium">
                  Aug 2021 - May 2023
                </p>
                <p class="text-sm sm:text-md text-white font-medium">
                  GPA: 4.0/4.0
                </p>
                <br />
                <br />
                <p class="text-2xl text-blue-600 font-medium">
                  BE in Computer Science and Engineering
                </p>
                <p class="text-lg sm:text-md text-blue-600 font-medium">
                  Anna University
                </p>
                <p class="text-sm sm:text-md text-white font-medium">
                  Aug 2015 - May 2019
                </p>
                <p class="text-sm sm:text-md text-white font-medium">
                  GPA: 8.2/10.0
                </p>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
