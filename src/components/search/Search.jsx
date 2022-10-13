import React from "react";
import '../search/SearchStyles.css';
import Award from '../../assets/award.png';
import { CountdownTimer } from "../countdownTimer/CountdownTimer";

export function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>
            LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, illum. Est iusto unde eos consequuntur. Exercitationem ipsa omnis dicta recusandae qui iusto ex! Nam incidunt expedita veniam in ab. Enim!
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Award} alt="Award" />
              </div>
              <div>
                <h3>
                  WORLD'S LEADING
                </h3>
                <p>
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>
                  NO ONE INCLUDES MORE
                </h3>
                <p>
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
                <button>
                  View packages
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="promo-save" >
              GET AN ADDITIONAL 7%  OFF
            </h4>
            <div className="promo-timer">
              <CountdownTimer countdownTimestampMs={ 1643673600000 } />
            </div>
            <p className="promo-offers">
              VIEW ALL CURRENT OFFERS NOW
            </p>
          </div>
          <form action="/">
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Grande Antigua</option>
                <option value="1">Grenada</option>
                <option value="1">Emerald Bay</option>
                <option value="1">Bora Bora</option>
                <option value="1">Key West</option>
                <option value="1">Maldives</option>
                <option value="1">Barbados</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>
                  Check-In
                </label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>
                  Check-Out
                </label>
                <input type="date" />
              </div>
            </div>
            <button>
              Rates & Availabilities
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
