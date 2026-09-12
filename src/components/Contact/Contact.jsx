import "./Contact.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPaperPlane,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_xh0f7yk",
        "template_q30l6aj",
        form.current,
        {
          publicKey: "Zzkeq6tMSqM86hJ-j",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");

          e.target.reset();

          setSending(false);
        },
        (error) => {
          console.error("FAILED...", error);

          alert("Something went wrong. Please try again.");

          setSending(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-heading">

        <h2>Get In Touch</h2>

        {/* <p>
          Let's discuss your next project or just say hello.
        </p> */}

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <h3>Let's Connect</h3>

          {/* PHONE */}
          <div className="contact-card">
            <div className="icon tel">
              <FaPhone />
            </div>

            <div>
              <h4>Phone</h4>
              <span>+256 785 197 161</span>
            </div>

          </div>


          {/* WHATSAPP */}
          <div className="contact-card">
            <div className="icon whatsapp">
              <FaWhatsapp />
            </div>

            <div>
              <h4>WhatsApp</h4>
              <span>+256 706 267 143</span>
            </div>

          </div>


          {/* EMAIL */}
          <div className="contact-card">
            <div className="icon email">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <span>charlizoluk@email.com</span>
            </div>

          </div>


          {/* LOCATION */}
          <div className="contact-card">
            <div className="icon location">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>
              <span>Kampala, Uganda</span>
            </div>

          </div>


          {/* SOCIAL MEDIA */}
          <div className="social">
            <h4>Follow Me</h4>
            <div className="social-icons">

              <a
                href="https://instagram.com/charlie_jay_oluk/"
                className="instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://X.com/charliejayoluk/"
                className="twitter"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com/in/oluk-charles-946510266/"
                className="linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://snapchat.com/@charliejaypic?share_id=K9cnmqm1OV0&locale=en-US/"
                className="snapchat"
                aria-label="Snapchat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat />
              </a>

              <a
                href="https://github.com/charliejaypic/"
                className="github"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://facebook.com/oluk.charles/"
                className="facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="contact-right">

          <form
            ref={form}
            onSubmit={sendEmail}
          >

            <div className="row">

              {/* NAME */}

              <div className="input-group">

                <label>Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="input-group">

                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />

              </div>

            </div>


            {/* SUBJECT */}

            <div className="input-group">

              <label>Subject *</label>

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
              />

            </div>


            {/* MESSAGE */}

            <div className="input-group">

              <label>Message *</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              ></textarea>

            </div>


            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={sending}
            >

              <FaPaperPlane />

              {sending ? "Sending..." : "Send Message"}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;