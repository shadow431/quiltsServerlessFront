import React, { useState } from "react";
import { NavItem, Nav } from "react-bootstrap";
import MediaQuery from "react-responsive";

function KitchenNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  const { history } = props;

  return (
    <MediaQuery minWidth={786}>
      {(matches) =>
        matches
          ? (
            <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
              <NavItem eventKey={1} onClick={() => {history.push("/kitchen/potato"); setNavKey(1);}}>
                Baked Potato Bag
              </NavItem>
              <NavItem eventKey={2} onClick={() => {history.push("/kitchen/bowl"); setNavKey(2);}}>
                Bowl Wraps
              </NavItem>
              <NavItem eventKey={3} onClick={() => {history.push("/kitchen/ovenmitt"); setNavKey(3);}}>
                Oven Mitts
              </NavItem>
              <NavItem eventKey={4} onClick={() => {history.push("/kitchen/plate"); setNavKey(4);}}>
                Plate Wraps
              </NavItem>
              <NavItem eventKey={5} onClick={() => {history.push("/kitchen/tortilla"); setNavKey(5);}}>
                Tortilla Bags
              </NavItem>
            </Nav>
          )
          : (
            <Nav bsStyle="pills" fixed="false" pullLeft activeKey={navKey} >
              <NavItem eventKey={1} onClick={() => {history.push("/kitchen/potato"); setNavKey(1);}}>
                Baked Potato Bag
              </NavItem>
              <NavItem eventKey={2} onClick={() => {history.push("/kitchen/bowl"); setNavKey(2);}}>
                Bowl Wraps
              </NavItem>
              <NavItem eventKey={3} onClick={() => {history.push("/kitchen/ovenmitt"); setNavKey(3);}}>
                Oven Mitts
              </NavItem>
              <NavItem eventKey={4} onClick={() => {history.push("/kitchen/plate"); setNavKey(4);}}>
                Plate Wraps
              </NavItem>
              <NavItem eventKey={5} onClick={() => {history.push("/kitchen/tortilla"); setNavKey(5);}}>
                Tortilla Bags
              </NavItem>
            </Nav>
          )
      }
    </MediaQuery>
  )
};

export default KitchenNav;
