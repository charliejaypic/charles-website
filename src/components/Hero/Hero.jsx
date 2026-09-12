import "./Hero.css";
import profile from "../../assets/images/work1.png";
import cv from "../../assets/documents/OLUK CHARLES CV.pdf";

import { FaEnvelope, FaDownload } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "IT Support Specialist",
  "Web Developer",
  "Graphic Designer",
  "Operations Professional",
];



function Hero() {

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.7}}
        >
          Hello, I'm
        </motion.h1>

        <motion.h2
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
        >
          Oluk Charles
        </motion.h2>

        <AnimatePresence mode="wait">

          <motion.h3
            key={currentRole}
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-20}}
            transition={{duration:.6}}
          >
            {roles[currentRole]}
          </motion.h3>

        </AnimatePresence>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.7}}
        >
          An Information Technology (IT) and digital professional who enjoys turning ideas into practical digital solutions. From developing modern websites and supporting IT infrastructure to creating compelling graphics and brand identities, I bring together technology, creativity, and problem-solving to help individuals and businesses succeed.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.9}}
        >

          <a href="#contact" className="primary-btn">
            <FaEnvelope />
            Get In Touch
          </a>

          <a
            href={cv}
            download="OLUK CHARLES CV.pdf"
            className="secondary-btn"
          >
            <FaDownload />
            Download Resume
          </a>

        </motion.div>

      </div>

      <div className="hero-right">

        <div className="available">

          <span></span>

          Available Now

        </div>

        <motion.div
          className="profile-circle"
          animate={{
            y:[0,-15,0]
          }}
          transition={{
            duration:4,
            repeat:Infinity
          }}
        >

          <img src={profile} alt="Profile" />

        </motion.div>

      </div>

            <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            className="scroll-down"
            >
            <FaChevronDown />
            </Link>

    </section>
  );
}

export default Hero;