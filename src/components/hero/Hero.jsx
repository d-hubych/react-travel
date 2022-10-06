import React from "react";
import './HeroStyles.css';
import Video from '../../assets/maldivesVideo.mp4';
import { BsSearch } from 'react-icons/bs';


export function Hero() {
  return(
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={ Video } type='video/mp4'/>
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Any Class Travel
        </h1>
        <h2>
          Top Locations Worldwide
        </h2>
        <form className="form">
            <input type="text" placeholder="Search Destination" name="destination"/>
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  )
}
