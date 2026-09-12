import "./Footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaHeart,
} from "react-icons/fa";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="footer" id="footer">

      <div className="footer-container">

        <div className="footer-left">

          <p>

            © {year} All Rights Reserved | <span>Oluk Charles</span>

            <FaHeart className="heart"/>

          </p>

        </div>

        {/* <div className="footer-right">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

        </div> */}

      </div>

    </footer>

  );

}

export default Footer;