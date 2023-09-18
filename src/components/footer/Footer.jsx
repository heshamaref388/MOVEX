import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              className="textnon textlight"
              target="_blank"
              href="https://www.facebook.com/hesham.aref.980?mibextid=ZbWKwL"
            >
              <FaFacebookF />
            </a>
          </span>
          {/* <span className="icon">
            <FaInstagram />
          </span> */}
          {/* <span className="icon">
            <FaTwitter />
          </span> */}
          <span className="icon">
            <a
              className="textnon textlight"
              target="_blank"
              href="https://x.com/HeshamAref91825?t=X00ar6G6hl2th3L0VfV81g&s=08 "
            >
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              className="textnon textlight"
              target="_blank"
              href="https://instagram.com/hesham.aref.980?igshid=OGQ5ZDc2ODk2ZA=="
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a
              className="textnon textlight"
              target="_blank"
              href="https://www.linkedin.com/in/hesham-aref-b14b53255"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
        <p className="name">Eng.Hesham Aref</p>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
