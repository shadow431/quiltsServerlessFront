import React, { useState } from "react";
import { Nav, NavItem, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import MediaQuery from "react-responsive";

export default function MainNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  const { history } = props;

  return (
    <React.Fragment>
      <MediaQuery minWidth={786}>
        {(matches) =>
          matches
            ? (
              <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
                <NavItem eventKey={1} onClick={() => {history.push("/"); setNavKey(1);}}>
                  Home
                </NavItem>
                <NavItem eventKey={2} onClick={() => {history.push("/embroidery"); setNavKey(2);}}>
                  Embroidery
                </NavItem>
                <NavItem eventKey={3} onClick={() => {history.push("/kitchen"); setNavKey(3);}}>
                  Kitchen Items
                </NavItem>
                <NavItem eventKey={4} onClick={() => {history.push("/quilts"); setNavKey(4);}}>
                  Quilts
                </NavItem>
                <NavItem eventKey={5} onClick={() => {history.push("/schedule"); setNavKey(5);}}>
                  Show Schedule
                </NavItem>
                <NavItem eventKey={6} onClick={() => {history.push("/admin"); setNavKey(6);}}>
                  Admin
                </NavItem>
              </Nav>
              )
              : (
                <Nav bsStyle="pills" fixed="false" pills pullLeft activeKey={navKey} >
                <NavItem eventKey={1} onClick={() => {history.push("/"); setNavKey(1);}}>
                  Home
                </NavItem>
                <NavItem eventKey={2} onClick={() => {history.push("/embroidery"); setNavKey(2);}}>
                  Embroidery
                </NavItem>
                <NavItem eventKey={3} onClick={() => {history.push("/kitchen"); setNavKey(3);}}>
                  Kitchen Items
                </NavItem>
                <NavItem eventKey={4} onClick={() => {history.push("/quilts"); setNavKey(4);}}>
                  Quilts
                </NavItem>
                <NavItem eventKey={5} onClick={() => {history.push("/schedule"); setNavKey(5);}}>
                  Show Schedule
                </NavItem>
                <NavItem eventKey={6} onClick={() => {history.push("/admin"); setNavKey(6);}}>
                  Admin
                </NavItem>
              </Nav>
            )
        }
      </MediaQuery>
    </React.Fragment>
  )
}
