import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Nav, NavItem, FormControl, FormGroup, ControlLabel } from "react-bootstrap";


export default function EmbroideryNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  return (
    <React.Fragment>
      <MediaQuery minWidth={786}>
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
          matches
            ? (
              <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
                <NavItem eventKey={1} onClick={() => {props.props.history.push("/embroidery/backpack"); setNavKey(1);}}>
                  Home
                </NavItem>
                <NavItem eventKey={2} onClick={() => {props.props.history.push("/embroidery/compbrief"); setNavKey(2);}}>
                  Embroidery
                </NavItem>
                <NavItem eventKey={3} onClick={() => {props.props.history.push("/embroidery/hoodies"); setNavKey(3);}}>
                  Kitchen Items
                </NavItem>
                <NavItem eventKey={4} onClick={() => {props.props.history.push("/embroidery/kitchentowel"); setNavKey(4);}}>
                  Quilts
                </NavItem>
                <NavItem eventKey={5} onClick={() => {props.props.history.push("/embroidery/sling"); setNavKey(5);}}>
                  Show Schedule
                </NavItem>
                <NavItem eventKey={6} onClick={() => {props.props.history.push("/embroidery/sweatshirt"); setNavKey(6);}}>
                  Admin
                </NavItem>
                <NavItem eventKey={7} onClick={() => {props.props.history.push("/embroidery/tote"); setNavKey(7);}}>
                  Home
                </NavItem>
                <NavItem eventKey={8} onClick={() => {props.props.history.push("/embroidery/totezip"); setNavKey(8);}}>
                  Embroidery
                </NavItem>
                <NavItem eventKey={9} onClick={() => {props.props.history.push("/embroidery/tshirt"); setNavKey(9);}}>
                  Kitchen Items
                </NavItem>
                <NavItem eventKey={10} onClick={() => {props.props.history.push("/embroidery/tshirtlong"); setNavKey(10);}}>
                  Quilts
                </NavItem>
                <NavItem eventKey={11} onClick={() => {props.props.history.push("/embroidery/vest"); setNavKey(11);}}>
                  Show Schedule
                </NavItem>
              </Nav>
              )
              : (
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="NavMenu">
                  <option onSelect={() => {props.props.history.push("/embroidery/backpack"); setNavKey(1);}} value="backpack">Home</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/compbrief"); setNavKey(2);}} value="compbrief">Computer Briefcase</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/hoodies"); setNavKey(3);}} value="hoodies">Hoodies</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/kitchentowel"); setNavKey(4);}} value="kitchentowel">Kitchen Towels</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/sling"); setNavKey(5);}} value="sling">Slings</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/sweatshirt"); setNavKey(6);}} value="sweatshirt">Sweatshirts</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/tote"); setNavKey(7);}} value="tote">Tote Bags</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/totezip"); setNavKey(8);}} value="totezip">Tote Bags With Zippers</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/tshirt"); setNavKey(9);}} value="tshirt">T-Shirts</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/tshirtlong"); setNavKey(10);}} value="tshirtlong">T-Shirts Long Sleeve</option>
                  <option onSelect={() => {props.props.history.push("/embroidery/vest"); setNavKey(11);}} value="vest">Vest</option>
                </FormControl>
              </FormGroup>
            )
        }
      </MediaQuery>
    </React.Fragment>
  )
}