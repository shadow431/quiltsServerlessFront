import React from "react";
import { Link } from "react-router-dom";

function KitchenNav (props) {
  return (
    <ul>
      <li>
        <Link to='/potato'>
          Baked Potato Bag
        </Link>
      </li>
      <li>
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
      </li>
    </ul>
  )
};

export default KitchenNav;
