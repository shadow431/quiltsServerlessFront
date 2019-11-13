import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import ProductHome from "../products/ProductHome";
import EmbroideryHome from "../embroidery/EmbroideryHome"
import KitchenNav from "../kitchen/KitchenNav";
import Quilts from "../containers/Quilts";
import Schedule from "../schedule/Schedule";

export default function MainNav () {
  const [navKey, setNavKey] = useState(1);
  const [ activePage, setActivePage ] = useState("home");
  return (
    <React.Fragment>
      <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
        <NavItem eventKey={1} onClick={() => {setActivePage("home"); setNavKey(1);}}>
          Home
        </NavItem>
        <NavItem eventKey={3} onClick={() => {setActivePage("embroidery"); setNavKey(2);}}>
          Embroidery
        </NavItem>
        <NavItem eventKey={4} onClick={() => {setActivePage("kitchen"); setNavKey(3);}}>
          Kitchen Items
        </NavItem>
        <NavItem eventKey={5} onClick={() => {setActivePage("quilts"); setNavKey(4);}}>
          Quilts
        </NavItem>
        <NavItem eventKey={2} onClick={() => {setActivePage("schedule"); setNavKey(5);}}>
          Show Schedule
        </NavItem>
      </Nav>
      {activePage === "home" ? <ProductHome /> : null}
      {activePage === "embroidery" ? <EmbroideryHome /> : null}
      {activePage === "kitchen" ? <KitchenNav /> : null}
      {activePage === "quilts" ? <Quilts /> : null}
      {activePage === "schedule" ? <Schedule /> : null}
    </React.Fragment>
  )
}
