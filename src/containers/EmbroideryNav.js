import React from "react";
import { Link } from "react-router-dom";


export default function EmbroideryNav () {
  return (
    <ul>
      <li>
        <Link to='/embroidery/backpack'>
          Backpack
        </Link>
      </li>
      <li>
        <Link to='/embroidery/compbrief'>
          Computer Briefcase
        </Link>
      </li>
      <li>
        <Link to="/embroidery/hoodies">
          Hoodies
        </Link>
      </li>
      <li>
        <Link to="/embroidery/kitchentowel">
          Kitchen Towels
        </Link>
      </li>
      <li>
        <Link to="/embroidery/sling">
          Slings
        </Link>
      </li>
      <li>
        <Link to='/embroidery/sweatshirt'>
          Sweatshirts
        </Link>
      </li>
      <li>
        <Link to='/embroidery/tote'>
          Tote Bags
        </Link>
      </li>
      <li>
        <Link to="/embroidery/totezip">
          Tote Bags with Zippers
        </Link>
      </li>
      <li>
        <Link to="/embroidery/tshirt">
          T-Shirts
        </Link>
      </li>
      <li>
        <Link to="/embroidery/tshirtlong">
          T-Shirts Long
        </Link>
      </li>
      <li>
        <Link to="/embroidery/vest">
          Vests
        </Link>
      </li>
    </ul>
  )
}