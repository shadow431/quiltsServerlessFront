import React from "react";
import MainNav from "../components/MainNav";
import EmbroideryNav from "../components/EmbroideryNav";

export default function Tote (props) {
  return (
    <React.Fragment>
      <MainNav props={props} />
      <EmbroideryNav />
      <h1>This is the Tote</h1>
    </React.Fragment>
  )
}