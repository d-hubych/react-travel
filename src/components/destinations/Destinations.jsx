import React from 'react';
import '../destinations/DestinationsStyles.css';

import Borabora from '../../assets/borabora.jpeg';
import Borabora2 from '../../assets/borabora2.jpeg';
import Keywest from '../../assets/keywest.jpeg';
import Maldives from '../../assets/maldives.jpeg';
import Maldives2 from '../../assets/maldives2.jpeg';

export function Destinations() {
  return (
    <div name="destinations" className='destinations'>
      <div className="container">
        <h2>
          All-Incusive Resorts
        </h2>
        <p>
          On the Carribbean Best Beaches
        </p>
        <div className="img-container">
          <img className='img-columns-3 img-rows-2' src={ Borabora } alt="Borabora" />
          <img src={ Borabora2 } alt="Borabora" />
          <img src={ Keywest } alt="Keywest" />
          <img src={ Maldives } alt="Maldives" />
          <img src={ Maldives2 } alt="Maldives" />
        </div>
      </div>
    </div>
  )
}
