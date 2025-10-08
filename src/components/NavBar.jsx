import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 4, link: "portfolio" },
    { id: 2, link: "education" },
    { id: 3, link: "experience" },
    { id: 5, link: "technologies" },
    { id: 6, link: "contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* glass bar */}
      <div className="mx-auto max-w-screen-xl">
        <div className="mt-0 flex items-center justify-between px-4 py-3
                        rounded-b-2xl bg-slate-900/70 backdrop-blur
                        ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {/* Brand */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer select-none"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                &#123;GOWTHAM&#125;
              </span>
            </h1>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy
                  offset={-80} // keeps section title from hiding under navbar
                  activeClass="!bg-sky-600/20 !text-white ring-1 ring-sky-400/30"
                  className="cursor-pointer capitalize text-sm text-slate-200
                             px-3 py-1.5 rounded-full
                             hover:bg-white/10 hover:text-white
                             transition-colors ring-1 ring-white/0"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={nav}
            onClick={() => setNav((s) => !s)}
            className="md:hidden text-slate-200 hover:text-white transition-colors"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {nav && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-950/90 backdrop-blur">
          <ul className="flex h-full flex-col items-center justify-center gap-6 px-6">
            {links.map(({ id, link }) => (
              <li key={id} className="w-full text-center">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setNav(false)}
                  className="block cursor-pointer capitalize
                             text-white text-2xl py-3
                             rounded-xl bg-white/5 ring-1 ring-white/10
                             hover:bg-white/10 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
