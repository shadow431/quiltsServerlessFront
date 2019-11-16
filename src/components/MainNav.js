import React, { useState } from "react";
import { Nav, NavItem, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import MediaQuery from "react-responsive";
import "./MainNav.css";

export default function MainNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  const { history, auth } = props;

  function handleNavSelection (e) {
    history.push(`/${e.target.value}`);
  }
  return (
    <React.Fragment>
      <MediaQuery minWidth={786}>
        {(matches) =>
          matches
            ? (
            <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
              <NavItem eventKey={1} onClick={() => {history.push("/home"); setNavKey(1);}}>
                Home
              </NavItem>
              {/* <NavItem eventKey={2} onClick={() => {history.push("/embroidery"); setNavKey(2);}}>
                Embroidery
              </NavItem> */}
              {/* <NavItem eventKey={3} onClick={() => {history.push("/kitchen"); setNavKey(3);}}>
                Kitchen Items
              </NavItem> */}
              {/* <NavItem eventKey={4} onClick={() => {history.push("/quilts"); setNavKey(4);}}>
                Quilts
              </NavItem> */}
              <NavItem eventKey={5} onClick={() => {history.push("/schedule"); setNavKey(5);}}>
                Show Schedule
              </NavItem>
              {auth ? (
                <NavItem eventKey={6} onClick={() => {history.push("/admin"); setNavKey(6);}}>
                  Admin
                </NavItem>
              ) : (
                null
              )
              }
            </Nav>
          )
          : (
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={handleNavSelection}>
                  <option value="select">Select</option>
                  <option value="home">Home</option>
                  {/* <option value="embroidery">Embroidery</option> */}
                  {/* <option value="kitchen">Kitchen</option> */}
                  {/* <option value="quilts">Quilts</option> */}
                  <option value="schedule">Schedule</option>
                  {auth ? (
                    <option value="admin">Admin</option>
                    ) :
                    null
                  }
                </FormControl>
              </FormGroup>
          )
        }
      </MediaQuery>
    </React.Fragment>
  )
}
