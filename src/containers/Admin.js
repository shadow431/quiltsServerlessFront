import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";

export default function Admin (props) {
  const [ navKey, setNavKey ] = useState("");
  return (
    <React.Fragment>
      <Nav bsStyle="pills" activeKey={navKey}>
        <NavItem eventKey={1} onClick={() => {props.history.push("/admin/design/new"); setNavKey(1);}}>Add A Design</NavItem>
        <NavItem eventKey={1} onClick={() => {props.history.push("/admin/fabric/new"); setNavKey(1);}}>Add A Fabric</NavItem>
        <NavItem eventKey={1} onClick={() => {props.history.push("/admin/products/new"); setNavKey(1);}}>Add A Product</NavItem>
        <NavItem eventKey={1} onClick={() => {props.history.push("/admin/schedule/new"); setNavKey(2);}}>Add A Show/Schedule</NavItem>
      </Nav>
    </React.Fragment>
  )
}