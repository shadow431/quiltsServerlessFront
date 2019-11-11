import React from "react";
import { Link } from "react-router-dom";

function KitchenNav (props) {
  return (
    <ul>
      <li>
        <Link to='/kitchen/potato'>
          Baked Potato Bag
        </Link>
      </li>
      <li>
        <Link to='/kitchen/bowl'>
          Bowl Wraps
        </Link>
      </li>
      <li>
        <Link to="/kitchen/ovenmitt">
          Oven Mitts
        </Link>
      </li>
      <li>
        <Link to="/kitchen/plate">
          Plate Wraps
        </Link>
      </li>
      <li>
        <Link to="/kitchen/tortilla">
          Tortilla Bags
        </Link>
      </li>
    </ul>
  )
};

export default KitchenNav;
