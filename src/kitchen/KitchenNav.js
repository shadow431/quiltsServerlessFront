import React, { useState } from "react";
import { NavItem, Nav } from "react-bootstrap";
import BakedPotatoBag from "./BakedPotatoBag";
import BowlWrap from "./BowlWrap";
import OvenMitt from "./OvenMitt";
import Plate from "./Plate";
import TortillaBags from "./Tortilla";

function KitchenNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  const [ activePage, setActivePage ] = useState("home");

  return (
    <React.Fragment>
      <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
        <NavItem eventKey={1} onClick={() => {setActivePage("potato"); setNavKey(1);}}>
          Baked Potato Bag
        </NavItem>
        <NavItem eventKey={2} onClick={() => {setActivePage("bowl"); setNavKey(2);}}>
          Bowl Wraps
        </NavItem>
        <NavItem eventKey={3} onClick={() => {setActivePage("ovenmitt"); setNavKey(3);}}>
          Oven Mitts
        </NavItem>
        <NavItem eventKey={4} onClick={() => {setActivePage("plate"); setNavKey(4);}}>
          Plate Wraps
        </NavItem>
        <NavItem eventKey={5} onClick={() => {setActivePage("tortilla"); setNavKey(5);}}>
          Tortilla Bags
        </NavItem>
      </Nav>
      {activePage === "potato" ? <BakedPotatoBag props={props} /> : null}
      {activePage === "bowl" ? <BowlWrap props={props}  /> : null}
      {activePage === "ovenmitt" ? <OvenMitt  props={props} /> : null}
      {activePage === "plate" ? <Plate  props={props} /> : null}
      {activePage === "tortilla" ? <TortillaBags  props={props} /> : null}
    </React.Fragment>
  )
};

export default KitchenNav;
