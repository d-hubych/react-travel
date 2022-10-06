import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../carusel/ImgCarusel.css"

import Borabora from '../../assets/borabora.jpeg';
import Borabora2 from '../../assets/borabora2.jpeg';
import Keywest from '../../assets/keywest.jpeg';
import Maldives from '../../assets/maldives.jpeg';
import Maldives2 from '../../assets/maldives2.jpeg';
import Maldives3 from '../../assets/maldives3.jpeg';

export function ImgCarusel() {
  return (
    <div className="container">
      <Carousel
        name="carusel"
        className="carusel"
        showArrows={true}
        // autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={ Borabora } alt="Beach" />
        </div>
        <div>
          <img src={ Borabora2 } alt="Beach" />
        </div>
        <div>
          <img src={ Keywest } alt="Beach" />
        </div>
        <div>
          <img src={ Maldives } alt="Beach" />
        </div>
        <div>
          <img src={ Maldives2 } alt="Beach" />
        </div>
        <div>
          <img src={ Maldives3 } alt="Beach" />
        </div>
      </Carousel>
    </div>
  )
}
