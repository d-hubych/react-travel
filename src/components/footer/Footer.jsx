import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import "../footer/FooterStyles.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h3>
            BEACHES.
          </h3>
          <div className="social">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}