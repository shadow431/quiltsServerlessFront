import React from "react";
import MainNav from "../components/MainNav";
import KitchenNav from "./KitchenNav";

export default function BowlWrap (props) {
  return (
    <div>
      <MainNav props={props} />
      <KitchenNav props={props}/>
      <h1>This would be your bowl wraps</h1>
    </div>
  )
}