import React from "react";
import { SelectsImg } from "../selectsImg/SelectsImg";
import './SelectsStyles.css';

import Borabora from '../../assets/borabora.jpeg';
import Borabora2 from '../../assets/borabora2.jpeg';
import Keywest from '../../assets/keywest.jpeg';
import Maldives from '../../assets/maldives.jpeg';
import Maldives2 from '../../assets/maldives2.jpeg';
import Maldives3 from '../../assets/maldives3.jpeg';

export function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={ Borabora } text='Bora bora' />
        <SelectsImg bgImg={ Borabora2 } text='Grenada' />
        <SelectsImg bgImg={ Keywest } text='Key west' />
        <SelectsImg bgImg={ Maldives } text='Maldives' />
        <SelectsImg bgImg={ Maldives2 } text='Barbados' />
        <SelectsImg bgImg={ Maldives3 } text='Emerald Bay' />
      </div>
    </div>
  )
}
