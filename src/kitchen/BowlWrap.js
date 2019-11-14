import React from "react";
import KitchenNav from "./KitchenNav";

export default function BowlWrap (props) {
  return (
    <div>
      <KitchenNav props={props}/>
      <h1>This would be your bowl wraps</h1>
    </div>
  )
}