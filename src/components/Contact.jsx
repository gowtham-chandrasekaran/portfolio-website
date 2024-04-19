import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const divAnimate = {
  offscreen: { x: 0, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Contact = () => {
  return (
    <div name="contact" className="w-full py-[80px] text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <motion.div
          class="w-full mx-auto px-4 py-8"
          className="py-[60px]"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          variants={divAnimate}
        >
          <style>
            {`
                    @keyframes glowing {
                        0% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }
                        50% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(37,99,235, 0.8); }
                        100% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }
                    }

                    .glow {
                        animation: glowing 2s infinite;
                    }
                `}
          </style>

          <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly rounded-lg bg-gray-800 shadow-md p-8 glow">
            <p className="text-white text-2xl mb-4 lg:mb-0 lg:mr-8">
              Reach me at
            </p>
            <div className="flex flex-col lg:flex-row items-center">
              <p className="text-white text-lg flex items-center mb-4 lg:mb-0 lg:mr-8">
                <HiOutlineMail size={27} />
                gowtham6309@gmail.com
              </p>
              <p className="text-white text-lg flex items-center">
                <FiPhone size={27} />
                +1 669 204 1307
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
