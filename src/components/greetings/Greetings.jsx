import React from "react";
import './GreetingsStyles.css';
import { BsSearch } from 'react-icons/bs';

export function Greetings() {
  return (
    <div className="greetings">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Around The World
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
