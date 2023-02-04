import React from "react";

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

        <p className="text-xl mt-20">
          I am a highly motivated software developer with experience in full
          stack development. I have a passion for building intuitive,
          user-friendly applications and solving complex problems through code.
          With 2 years of work experience, I have honed my skills in front-end
          and back-end technologies and have a track record of delivering
          high-quality, reliable software solutions.
        </p>
        <br />
        <p className="text-xl">
          I am excited to announce that I will be available for new
          opportunities starting in May 2023. I am eager to join a company that
          values collaboration, innovation, and growth, and I believe my skills
          and passion for software development make me a strong fit for a
          variety of roles.
        </p>
      </div>
    </div>
  );
};

export default About;
