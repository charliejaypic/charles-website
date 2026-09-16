import "./Projects.css";

import project1 from "../../assets/images/Port.png";
import project2 from "../../assets/images/Amekek Logo.png";
import project3 from "../../assets/images/Pos.jpeg";
import project4 from "../../assets/images/Black Logo.png";
import project5 from "../../assets/images/Shanny.jpg";
import project6 from "../../assets/images/iCard.jpg";
import project7 from "../../assets/images/Tekko Logo.png";
import project8 from "../../assets/images/Ban.jpeg";

import { FaCode, FaExternalLinkAlt, FaEye } from "react-icons/fa";

const projects = [
{
  image: project1,
  title: "WEBSITE DESIGN",
  category: "Personal ICT Portfolio Website",
  // description:
  //   "A modern and responsive personal portfolio website designed to showcase my skills, experience, projects, certifications and IT services with an engaging and professional user experience.",
  technologies: [
    "HTML",
    "CSS",
    "Node.js",
    "JS",
    "npm",
    "Bootstrap",
    "VS Code",
  ],
  link: "#",
},

{
  image: project2,
  title: "LOGO DESIGN",
  category: "Logo Brand",
  // description:
  //   "A professional corporate logo designed to establish a strong visual identity and create a clean, memorable and recognizable brand presence across digital and print platforms.",
  technologies: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
  ],
  link: "#",
},

{
  image: project3,
  category: "Graphics Design",
  title: "POSTER",
  // description:
  //   "A custom business logo created with a modern and professional visual style, focusing on simplicity, brand recognition and versatility for use across different marketing materials.",
  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Canva",
  ],
  link: "#",
},

{
  image: project4,
  category: "Brand Identity",
  title: "BUSINESS CARD",
  // description:
  //   "A creative logo design developed to give a business a distinctive visual identity, with a clean and adaptable design suitable for websites, social media, stationery and promotional materials.",
  technologies: [
    "Adobe Photoshop",
    "Adobe Illustrator",
  ],
  link: "#",
},

{
  image: project5,
  category: "GRAPHICS DESIGN",
  title: "Social Media Post",
  // description:
  //   "A modern and responsive personal portfolio website designed to showcase my skills, experience, projects, certifications and IT services with an engaging and professional user experience.",
  technologies: [
    "Illustrator",
    "Photoshop",
    "Canva",
  ],
  link: "#",
},

{
  image: project6,
  category: "CARD DESIGN",
  title: "Invitation Card",
  // description:
  //   "A professional corporate logo designed to establish a strong visual identity and create a clean, memorable and recognizable brand presence across digital and print platforms.",
  technologies: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Pinterest",
  ],
  link: "#",
},

{
  image: project7,
  category: "LOGO DESIGN",
  title: "Business Logo",
  // description:
  //   "A custom business logo created with a modern and professional visual style, focusing on simplicity, brand recognition and versatility for use across different marketing materials.",
  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Canva",
  ],
  link: "#",
},

{
  image: project8,
  category: "BANNER DESIGN",
  title: "Banner Signpost",
  // description:
  //   "A creative logo design developed to give a business a distinctive visual identity, with a clean and adaptable design suitable for websites, social media, stationery and promotional materials.",
  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Canva",
  ],
  link: "#",
},

];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">

        {/* <div className="portfolio-badge">
          <FaCode />
          Portfolio
        </div> */}

        <h2>Featured Work</h2>

        {/* <p>
          Discover my latest projects and professional work that showcase
          innovative solutions, cutting-edge technologies and impactful
          results.
        </p> */}

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech, i) => (
                  <span className="tech" key={i}>
                    {tech}
                  </span>
                ))}

              </div>

              <a href={project.link}>
                <FaEye />
                View More
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;