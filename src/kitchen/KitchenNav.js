import React, { useState } from "react";
import { NavItem, Nav, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import MediaQuery from "react-responsive";
import MainNav from "../components/MainNav";

function KitchenNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  console.log("kitchennav: ", props)

  return (
    <React.Fragment>
      <MainNav props={props}/>
      <MediaQuery minWidth={786}>
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
          matches
            ? (
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
              )
              : (
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="NavMenu">
                  <option onSelect={() => {props.props.history.push("/kitchen/potato"); setNavKey(1);}} value="potato">Baked Potato Bag</option>
                  <option onSelect={() => {props.props.history.push("/kitchen/bowl"); setNavKey(2);}} value="bowl">Bowl Wraps</option>
                  <option onSelect={() => {props.props.history.push("/kitchen/ovenmitt"); setNavKey(3);}} value="ovenmitt">Oven Mitts</option>
                  <option onSelect={() => {props.props.history.push("/kitchen/plate"); setNavKey(4);}} value="plate">Plate Wraps</option>
                  <option onSelect={() => {props.props.history.push("/kitchen/tortilla"); setNavKey(5);}} value="tortilla">Tortilla Bags</option>
                </FormControl>
              </FormGroup>
            )
        }
      </MediaQuery>
    </React.Fragment>
  )
};

export default KitchenNav;
