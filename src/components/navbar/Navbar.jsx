import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { CgMenu, CgMenuMotion } from 'react-icons/cg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

import './NavbarStyles.css';

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="logo">
        <h2>
          BEACHES.
        </h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
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
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
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
