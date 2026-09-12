import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiCisco
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      icon: <FaReact />,
      name: "React.js",
      level: 93,
      color: "#61DAFB"
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      level: 92,
      color: "#F7DF1E"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: 88,
      color: "#3C873A"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: 95,
      color: "#E44D26"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: 92,
      color: "#1572B6"
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      level: 90,
      color: "#00758F"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      level: 85,
      color: "#4DB33D"
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: 88,
      color: "#F1502F"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: 90,
      color: "#111827"
    },
    {
      icon: <FaPython />,
      name: "Python",
      level: 80,
      color: "#3776AB"
    },
    {
      icon: <SiCisco />,
      name: "Cisco Networking",
      level: 85,
      color: "#049FD9"
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
      level: 90,
      color: "#2563EB"
    }
  ];

  return (

    <section className="skills" id="skills">

      <div className="skills-title">

        <h2>Skills & Technologies</h2>

        {/* <p>
          A showcase of my technical expertise and the technologies I work with.
        </p> */}

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-top">

              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <span>{skill.level}%</span>

            </div>

            <h3>{skill.name}</h3>

            <div className="progress">

              <div
                className="progress-bar"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;