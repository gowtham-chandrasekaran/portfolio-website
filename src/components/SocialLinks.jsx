import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={27} />
        </>
      ),
      href: "https://www.linkedin.com/in/gowtham-c/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={27} />
        </>
      ),
      href: "https://github.com/gowthambalboa",
    },
    {
      id: 5,
      child: (
        <>
          Leetcode <SiLeetcode size={27} />
        </>
      ),
      href: "https://leetcode.com/gowtham6309/",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={27} />
        </>
      ),
      href: "mailto:gowtham6309@gmail.com",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={27} />
    //     </>
    //   ),
    //   href: "/Resume.pdf",
    //   style: "rounded-br-md",
    //   download: true,
    // },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={[
              "group flex items-center w-56 h-12 px-3",
              "ml-[-180px] hover:ml-[-8px] focus-within:ml-[-8px]",
              "transition-all duration-300",
              "bg-slate-900/70 backdrop-blur ring-1 ring-white/10",
              "shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
              "rounded-r-2xl", // base rounding
              style, // keep your top/bottom rounding
            ].join(" ")}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
