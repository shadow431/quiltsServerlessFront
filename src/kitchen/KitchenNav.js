import React, { useState } from "react";
import { NavItem, Nav } from "react-bootstrap";
import MainNav from "../components/MainNav";

function KitchenNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  console.log("kitchennav: ", props)

  return (
    <React.Fragment>
      <MainNav props={props}/>
      <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
      <NavItem eventKey={1} onClick={() => {props.history.push("/kitchen/potato"); setNavKey(1);}}>
        Baked Potato Bag
      </NavItem>
      <NavItem eventKey={2} onClick={() => {props.history.push("/kitchen/bowl"); setNavKey(2);}}>
        Bowl Wraps
      </NavItem>
      <NavItem eventKey={3} onClick={() => {props.history.push("/kitchen/ovenmitt"); setNavKey(3);}}>
        Oven Mitts
      </NavItem>
      <NavItem eventKey={4} onClick={() => {props.history.push("/kitchen/plate"); setNavKey(4);}}>
        Plate Wraps
      </NavItem>
      <NavItem eventKey={5} onClick={() => {props.history.push("/kitchen/tortilla"); setNavKey(5);}}>
        Tortilla Bags
      </NavItem>
    </Nav>
    </React.Fragment>
  )
};

export default KitchenNav;
