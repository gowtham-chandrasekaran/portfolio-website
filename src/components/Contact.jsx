import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const divAnimate = {
  offscreen: { y: 8, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <div name="contact" className="w-full py-[80px] text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* header */}
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="mt-3 text-slate-400">
            I’m quickest over email. Feel free to call for anything time-sensitive.
          </p>
        </div>

        {/* card */}
        <motion.div
          className="mt-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15 }}
          variants={divAnimate}
        >
          <section className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* left blurb */}
              <div>
                <h3 className="text-lg font-semibold">Let’s talk</h3>
                <p className="mt-1 text-slate-400">
                  Available for AI/Full-Stack opportunities and collaborations.
                </p>
              </div>

              {/* actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href="mailto:gowtham6309@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white ring-1 ring-sky-400/40 hover:bg-sky-500 transition-colors"
                >
                  <HiOutlineMail size={20} />
                  <span>gowtham6309@gmail.com</span>
                </a>

                
              </div>
            </div>

            {/* bottom accent */}
            <div className="h-[3px] rounded-b-2xl bg-gradient-to-r from-transparent via-sky-600/60 to-transparent" />
          </section>

          {/* optional note */}
          <p className="mt-3 text-xs text-slate-400">
            Tip: click the email or phone to open your default app.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
