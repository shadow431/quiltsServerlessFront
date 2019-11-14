import React from "react";
import MainNav from "../components/MainNav";
import EmbroideryNav from "../components/EmbroideryNav";

export default function TShirtLong (props) {
  return (
    <React.Fragment>
      {/* <MainNav props={props} /> */}
      <EmbroideryNav />
      <h1>This is the Long Sleeve T-Shirt</h1>
    </React.Fragment>
  )
}