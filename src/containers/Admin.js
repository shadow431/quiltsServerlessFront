import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import MainNav from "../components/MainNav";

export default function Admin (props) {
  const [ navKey, setNavKey ] = useState("");
  return (
    <React.Fragment>
      {/* <MainNav props={props} /> */}
      <Nav bsStyle="pills" activeKey={navKey}>
        <NavItem eventKey={1} onClick={() => {props.history.push("/admin/products/new"); setNavKey(1);}}>Add A Product</NavItem>
        <NavItem eventKey={1} onClick={() => {props.history.push("/admin/schedule/new"); setNavKey(2);}}>Add A Show/Schedule</NavItem>
      </Nav>
    </React.Fragment>
  )
}