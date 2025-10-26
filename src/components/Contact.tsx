/*import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:webdevmastery@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;*/
import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaInstagram className="icons" style={{ color: "#E4405F" }} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <CiFacebook className="icons" style={{ color: "#1877F2" }} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <CiLinkedin className="icons" style={{ color: "#0077B5" }} />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaSquareXTwitter className="icons" style={{ color: "#000000" }} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaGithubSquare className="icons" style={{ color: "#171515" }} />
          </a>

          {/* Gmail */}
          <a
            href="mailto:sabhimanyu9263@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <SiGmail className="icons" style={{ color: "#EA4335" }} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919661104667"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <SiWhatsapp className="icons" style={{ color: "#25D366" }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
