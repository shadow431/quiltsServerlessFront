import React from "react";
import { Link } from "react-router-dom";


export default function EmbroideryNav () {
  return (
    // <select>
    //   <option>tote bag</option>
    //   <option>zip tote bag</option>
    //   <option>computer briefcase</option>
    //   <option>kitchen towels</option>
    //   <option>slings</option>
    //   <option>backpack</option>
    //   <option>sweat shirts</option>
    //   <option>t-shirts</option>
    //   <option>hoodies</option>
    //   <option>vests</option>
    // </select>
    <ul>
      <li>
        <Link to='/embroidery/backpack'>
          Backpack
        </Link>
      </li>
      {/* <li>
        <Link to='/bowl'>
          Bowl Wraps
        </Link>
      </li>
      <li>
        <Link to="/ovenmitt">
          Oven Mitts
        </Link>
      </li>
      <li>
        <Link to="/plate">
          Plate Wraps
        </Link>
      </li>
      <li>
        <Link to="/tortilla">
          Tortilla Bags
        </Link>
      </li> */}
    </ul>
  )
}
// comp bag:  heather grey, navy
// tote: 'color'
// zipper tote: red, royal blue, hot pink, black (Color only across top except all black)
// towels: white, stone, blue, light moss, dark moss,
// slings: red, royal blue, lime green, navy, black
// backpack: charcoal, black, navy, royal blue, red
// sweat shirts/t-shirts/hoodies: red, royal blue, heather grey, purple, lavender, forest green
// vests: red, royal blue, navy blue
// color: red, royal blue, carolina blue, navy, lime green, kelly green, purple, lavender, light pink, hot pink,
// black, charcoal grey, turquoise, tangerine, stone