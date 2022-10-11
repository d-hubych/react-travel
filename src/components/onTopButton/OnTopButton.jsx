import React from "react";
import { Link } from 'react-scroll';

import '../onTopButton/OnTopButtonStyles.css'

export function OnTopButton() {
  return (
    // <div className="on-top-button">
      <Link className="on-top-button" to="home" smooth={true} duration={400}>
        ON-TOP
      </Link>
    // </div>
  )
}