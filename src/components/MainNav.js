import React, { useState } from "react";
import { Nav, NavItem, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import MediaQuery from "react-responsive";

export default function MainNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  console.log("props at mainnav: ", props);
  return (
    <React.Fragment>
      <MediaQuery minWidth={786}>
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
          matches
            ? (
              <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
                <NavItem eventKey={1} onClick={() => {props.props.history.push("/"); setNavKey(1);}}>
                  Home
                </NavItem>
                <NavItem eventKey={2} onClick={() => {props.props.history.push("/embroidery"); setNavKey(2);}}>
                  Embroidery
                </NavItem>
                <NavItem eventKey={3} onClick={() => {props.props.history.push("/kitchen"); setNavKey(3);}}>
                  Kitchen Items
                </NavItem>
                <NavItem eventKey={4} onClick={() => {props.props.history.push("/quilts"); setNavKey(4);}}>
                  Quilts
                </NavItem>
                <NavItem eventKey={5} onClick={() => {props.props.history.push("/schedule"); setNavKey(5);}}>
                  Show Schedule
                </NavItem>
                <NavItem eventKey={6} onClick={() => {props.props.history.push("/admin"); setNavKey(6);}}>
                  Admin
                </NavItem>
              </Nav>
              )
              : (
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
            )
        }
      </MediaQuery>
    </React.Fragment>
  )
}
