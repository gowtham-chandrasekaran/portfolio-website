import React from "react";
import dp from "../assets/dp.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div class="mx-auto max-w-5xl px-4 py-8">
          <section class="rounded-lg bg-gradient-to-b from-black to-gray-800 shadow-md hover:scale-105 duration-500 shadow-blue-600 p-8">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <img
                alt="Man"
                src={dp}
                class="aspect-square ml-11 sm:ml-0 rounded-lg object-cover w-2/3 sm:w-full"
              />

              <blockquote class="sm:col-span-2">
                <p class="text-sm sm:text-lg text-white font-medium">
                  I'm pursuing MS in Computer Science at San Jose State
                  University. I will be graduating in May 2023. With 2 years of
                  work experience, I have honed my skills in front-end and
                  back-end technologies and have a track record of delivering
                  high-quality, reliable software solutions.
                </p>
                <br />
                <p class="text-sm sm:text-lg text-white font-medium">
                  I am eager to join a company that values collaboration,
                  innovation, and growth, and I believe my skills and passion
                  for software development make me a strong fit for a variety of
                  roles.
                </p>
              </blockquote>
            </div>
          </section>
        </div>

        {/* <p className="text-xl mt-20">
          I'm currently pursuing MS in Computer Science at San Jose State
          University. I will be graduating in May 2023. With 2 years of work
          experience, I have honed my skills in front-end and back-end
          technologies and have a track record of delivering high-quality,
          reliable software solutions.
        </p>
        <br />
        <p className="text-xl">
          I am eager to join a company that values collaboration, innovation,
          and growth, and I believe my skills and passion for software
          development make me a strong fit for a variety of roles.
        </p> */}
      </div>
    </div>
  );
};

export default About;
