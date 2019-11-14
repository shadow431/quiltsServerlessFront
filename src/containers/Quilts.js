import React from "react";
import MainNav from "../components/MainNav";


export default function Quilts (props) {
  return (
    <React.Fragment>
      <MainNav props={props}/>
      <select>
        <option>Embroidery</option>
        <option>Fabric</option>
      </select>
    </React.Fragment>
  )
}