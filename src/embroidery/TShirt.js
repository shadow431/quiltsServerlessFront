import React from "react";
import MainNav from "../components/MainNav";
import EmbroideryNav from "../components/EmbroideryNav";

export default function TShirt (props) {
  return (
    <React.Fragment>
      <MainNav props={props} />
      <EmbroideryNav />
      <h1>This is the T-Shirt</h1>
    </React.Fragment>
  )
}