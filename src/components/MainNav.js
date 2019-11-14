import React, { useState } from "react";
import { Nav, NavItem, Grid, Row, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import ProductHome from "../products/ProductHome";
import EmbroideryHome from "../embroidery/EmbroideryHome"
import KitchenNav from "../kitchen/KitchenNav";
import Quilts from "../containers/Quilts";
import Schedule from "../schedule/Schedule";
import Admin from "../containers/Admin";
import MediaQuery from "react-responsive";

export default function MainNav (props, admin) {
  const [ navKey, setNavKey ] = useState(1);
  const [ activePage, setActivePage ] = useState("home");
  return (
    <React.Fragment>

  
    <MediaQuery minWidth={786}>
      {/* You can also use a function (render prop) as a child */}
      {(matches) =>
        matches
          ? (
         

            <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
            <NavItem eventKey={1} onClick={() => {setActivePage("home"); setNavKey(1);}}>
              Home
            </NavItem>
            <NavItem eventKey={2} onClick={() => {setActivePage("embroidery"); setNavKey(2);}}>
              Embroidery
            </NavItem>
            <NavItem eventKey={3} onClick={() => {setActivePage("kitchen"); setNavKey(3);}}>
              Kitchen Items
            </NavItem>
            <NavItem eventKey={4} onClick={() => {setActivePage("quilts"); setNavKey(4);}}>
              Quilts
            </NavItem>
            <NavItem eventKey={5} onClick={() => {setActivePage("schedule"); setNavKey(5);}}>
              Show Schedule
            </NavItem>
            <NavItem eventKey={6} onClick={() => {setActivePage("admin"); setNavKey(6);}}>
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

      <Grid>
        <Row>
          {activePage === "home" ? <ProductHome props={props} /> : null}
          {activePage === "embroidery" ? <EmbroideryHome props={props}  /> : null}
          {activePage === "kitchen" ? <KitchenNav  props={props} /> : null}
          {activePage === "quilts" ? <Quilts  props={props} /> : null}
          {activePage === "schedule" ? <Schedule  props={props} /> : null}
          {activePage === "admin" && admin.isAuthenticated ? <Admin /> : null}
        </Row>
      </Grid>

    </React.Fragment>
  )
}
