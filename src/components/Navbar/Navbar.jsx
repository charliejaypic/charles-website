import "./Navbar.css";

import {
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

import { useEffect, useState } from "react";

function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);

  return (

    <header className="navbar">

      <a href="#home" className="logo">
          <span>O.</span>Charles
      </a>

      <nav>

        <ul>

          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#education"
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>

      <div className="socials">

        {/* WhatsApp */}
        <a
          href="https://wa.me/256785197161"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/oluk-charles-946510266"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        {/* Contact */}
        <a href="#contact">
          <FaEnvelope />
        </a>

      </div>

    </header>

  );
}

export default Navbar;