import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";

export default function MainNav (props) {
  const [navKey, setNavKey] = useState(1);
  const {history} = props.props;
  return (
    <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey}>
      <NavItem eventKey={1} onClick={() => {history.push('/'); setNavKey(1);}}>
        Home
      </NavItem>
      <NavItem eventKey={2} onClick={() => {history.push('/schedule'); setNavKey(2);}}>
        Show Schedule
      </NavItem>
      <NavItem eventKey={3} onClick={() => {history.push('/embroidery'); setNavKey(3);}}>
        Embroidery
      </NavItem>
      <NavItem eventKey={4} onClick={() => {history.push('/kitchen'); setNavKey(4);}}>
        Kitchen Items
      </NavItem>
      <NavItem eventKey={5} onClick={() => {history.push('/quilts'); setNavKey(5);}}>
        Quilts
      </NavItem>
    </Nav>
  )
}