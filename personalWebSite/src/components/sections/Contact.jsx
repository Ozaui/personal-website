import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import "../../styles/components/Contact.css";

const CONTACTS = [
  {
    icon: <FaInstagram size={36} />,
    label: "Instagram",
    url: "https://www.instagram.com/melihisdevil/",
  },
  {
    icon: <FaLinkedin size={36} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ozay-melih-yildiz",
  },
  {
    icon: <FaEnvelope size={36} />,
    label: "Email",
    url: "mailto:ozay.m.yildiz@gmail.com",
  },
];

const CV_URL = "/OzayMelihYildiz-CV.pdf";

const Contact = () => {
  return (
    <div className="contact-section" id="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-icons-row">
        {CONTACTS.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="contact-icon-link"
          >
            {item.icon}
          </a>
        ))}
        <a
          href={CV_URL}
          download="OzayMelihYildiz-CV.pdf"
          className="contact-cv-btn"
        >
          <FaDownload size={20} /> CV İndir
        </a>
      </div>
    </div>
  );
};

export default Contact;
