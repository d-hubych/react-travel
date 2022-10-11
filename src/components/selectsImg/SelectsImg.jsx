import React from "react";
import './SelectsImgStyles.css';

export function SelectsImg({bgImg, text, note}) {
  return (
    <div className="selects-location">
      <img src={ bgImg } alt={ text } />
      <div className="selects-overlay">
        <span className="location">{text}</span>
      </div>
        <span className="selects-note">{ note }</span>
    </div>
  )
}
