import React from "react";
import MainNav from "../components/MainNav";
import EmbroideryNav from "../components/EmbroideryNav";

export default function Sling (props) {
  return (
    <React.Fragment>
      <MainNav props={props} />
      <EmbroideryNav />
      <h1>This is the Sling</h1>
    </React.Fragment>
  )
}