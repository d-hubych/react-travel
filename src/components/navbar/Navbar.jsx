import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { CgMenu, CgMenuMotion } from 'react-icons/cg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

import { Link } from 'react-scroll';
import './NavbarStyles.css';

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="home" className={nav ? 'navbar navbar-active' : 'navbar'}>
      <div className="logo">
        <h2>
          LOCATIONS .
        </h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} offset={0} duration={400}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} offset={0} duration={400}>
          <li>Destinations</li>
        </Link>
        <Link to="views" smooth={true} offset={-50} duration={400}>
          <li>Travel</li>
        </Link>
        <Link to="book" smooth={true} offset={0} duration={400}>
          <li>Book</li>
        </Link>
        <Link to="carusel" smooth={true} offset={0} duration={400}>
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BsSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="humburger" onClick={ handleNav }>
        {nav ? <CgMenuMotion /> : <CgMenu />}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
        <Link to="home" smooth={true} offset={0} duration={400}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} offset={0} duration={400}>
          <li>Destinations</li>
        </Link>
        <Link to="views" smooth={true} offset={-50} duration={400}>
          <li>Travel</li>
        </Link>
        <Link to="book" smooth={true} offset={0} duration={400}>
          <li>Book</li>
        </Link>
        <Link to="carusel" smooth={true} offset={0} duration={400}>
          <li>Views</li>
        </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}
