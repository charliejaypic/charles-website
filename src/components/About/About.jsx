import "./About.css";
import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaUser,
  FaDesktop
} from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .6
    }
  }
};

function About() {
  
  const cards = [
    {
      icon: <FaUser />,
      title: "Who I Am",
      text:
        "I am an Information Technology (IT) and Digital professional with a passion for integrating technology into people’s lives to help them operate better. I am a motivated and inspired IT professional and digital expert with a vision of developing and growing as much as possible in the field of expertise. I believe in learning and mastering the latest technologies and using them to help my clients have the best experience using the modern technology systems."
    },

    // {
    //   icon: <FaCode />,
    //   title: "Development",
    //   text:
    //     "I develop responsive web applications using React, JavaScript, HTML, CSS, Node.js and modern development tools with a strong focus on user experience."
    // },

    {
      icon: <FaDesktop />,
      title: "IT Support",
      text:
        "I offer practical and reliable IT help and technical support to individuals, small businesses, offices, and organizations. The primary objective is to identify and resolve technical problems, as well as the underlying causes of these issues, so the system returns to normal operations. Computer setup, network problems, software-related issues, and any other technical problems can be handled to help individuals and businesses get their systems up and running smoothly."
    }

    // {
    //   icon: <FaLightbulb />,
    //   title: "Innovation",
    //   text:
    //     "I enjoy learning new technologies and continuously improving my skills through research, certifications and practical projects."
    // },

    // {
    //   icon: <FaUsers />,
    //   title: "Team Work",
    //   text:
    //     "I work well both independently and within teams, communicating effectively to deliver successful projects on time."
    // },

    // {
    //   icon: <FaHandshake />,
    //   title: "Let's Work Together",
    //   text:
    //     "I'm always open to freelance work, collaborations and exciting opportunities to build innovative digital products."
    // }
  ];

  const stats = [
    {
      number: "3+",
      title: "Years Experience",
      link: "#experience"
    },
    {
      number: "10+",
      title: "Projects Completed",
      link: "#projects"
    },
    {
      number: "20+",
      title: "Technologies",
      link: "#tools"
    }
  ];

  const skills = [
    "PHP",
    "HTML",
    "CSS",
    "Phython",
    "Bootstrap",
    "JavaScript",
    "React",
    "Node.js",
    "npm",
    "REST APIs",
    "Git & GitHub",
    "Vercel",
    "MySQL",
    "Microsoft SQL Server",
    "phpMyAdmin",
    "GIS software",
    "Cisco Packet Tracer",
    "NetBeans",
    "Windows",
    "Linux",
    "Windows Server",
    "Canva",
    "Photoshop",
    "Illustrator",
    "XAMPP",
    "Visual Studio Code",
    "Cisco Packet Tracer",
    "Cisco Modeling Labs",
    "Microsoft Windows",
    "Command Prompt/CMD",
    "PowerShell",
    "Microsoft Excel",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Microsoft Access",
    "Microsoft Project"

  ];

  return (
    <section className="about" id="about">

      <div className="about-title">

        <h2>About Me</h2>

        {/* <p>
          Passionate about creating digital solutions that make a difference.
        </p> */}

      </div>

      <motion.div
className="about-stats"
variants={container}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
>
    

        {stats.map((stat, index) => (
        <motion.a
          href={stat.link}
          className="stat-card clickable-stat"
          key={index}
          variants={item}
          whileHover={{
            y: -8,
            scale: 1.05
          }}
        >
          <h3>{stat.number}</h3>
          <span>{stat.title}</span>
        </motion.a>
      ))}

     </motion.div>

      <motion.div
className="about-content"
variants={container}
initial="hidden"
whileInView="show"
viewport={{ once:true }}
>

        {cards.map((card, index) => (

          <motion.div
className="about-card"
key={index}
variants={item}
whileHover={{
    scale:1.02,
    y:-6
}}
>

            <div className="card-icon">

              {card.icon}

            </div>

            <div className="card-text">

              <h4>{card.title}</h4>

              <p>{card.text}</p>

            </div>

          </motion.div>

        ))}

      </motion.div>

      <div className="skill-title" id="tools">
        <h4>Tools</h4>
      </div>

      <div className="skill-tags">

        {skills.map((skill, index) => (

          <span key={index}>{skill}</span>

        ))}

      </div>

    </section>
  );
}

export default About;