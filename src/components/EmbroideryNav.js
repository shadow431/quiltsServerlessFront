import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Nav, NavItem } from "react-bootstrap";


export default function EmbroideryNav (props) {
  const [ navKey, setNavKey ] = useState(1);
  const { history } = props;
  return (
    <React.Fragment>
      <MediaQuery minWidth={786}>
        {(matches) =>
          matches
            ? (
              <Nav bsStyle="pills" fixed="false" stacked pullLeft activeKey={navKey} >
                <NavItem eventKey={1} onClick={() => {history.push("/embroidery/backpack"); setNavKey(1);}}>
                  Backpack
                </NavItem>
                <NavItem eventKey={2} onClick={() => {history.push("/embroidery/compbrief"); setNavKey(2);}}>
                  Computer Briefcase
                </NavItem>
                <NavItem eventKey={3} onClick={() => {history.push("/embroidery/hoodies"); setNavKey(3);}}>
                  Hoodies
                </NavItem>
                <NavItem eventKey={4} onClick={() => {history.push("/embroidery/kittowel"); setNavKey(4);}}>
                  Kitchen Towels
                </NavItem>
                <NavItem eventKey={5} onClick={() => {history.push("/embroidery/sling"); setNavKey(5);}}>
                  Slings
                </NavItem>
                <NavItem eventKey={6} onClick={() => {history.push("/embroidery/sweatshirt"); setNavKey(6);}}>
                  Sweatshirts
                </NavItem>
                <NavItem eventKey={7} onClick={() => {history.push("/embroidery/tote"); setNavKey(7);}}>
                  Tote Bags
                </NavItem>
                <NavItem eventKey={8} onClick={() => {history.push("/embroidery/totezip"); setNavKey(8);}}>
                  Tote Bags With Zippers
                </NavItem>
                <NavItem eventKey={9} onClick={() => {history.push("/embroidery/tshirt"); setNavKey(9);}}>
                  T-Shirt
                </NavItem>
                <NavItem eventKey={10} onClick={() => {history.push("/embroidery/tshirtlong"); setNavKey(10);}}>
                  T-Shirt Long Sleeve
                </NavItem>
                <NavItem eventKey={11} onClick={() => {history.push("/embroidery/vest"); setNavKey(11);}}>
                  Vest
                </NavItem>
              </Nav>
            )
            : (
              <Nav bsStyle="pills" fixed="false" pullLeft activeKey={navKey} >
                <NavItem eventKey={1} onClick={() => {history.push("/embroidery/backpack"); setNavKey(1);}}>
                  Backpack
                </NavItem>
                <NavItem eventKey={2} onClick={() => {history.push("/embroidery/compbrief"); setNavKey(2);}}>
                  Computer Briefcase
                </NavItem>
                <NavItem eventKey={3} onClick={() => {history.push("/embroidery/hoodies"); setNavKey(3);}}>
                  Hoodies
                </NavItem>
                <NavItem eventKey={4} onClick={() => {history.push("/embroidery/kittowel"); setNavKey(4);}}>
                  Kitchen Towels
                </NavItem>
                <NavItem eventKey={5} onClick={() => {history.push("/embroidery/sling"); setNavKey(5);}}>
                  Slings
                </NavItem>
                <NavItem eventKey={6} onClick={() => {history.push("/embroidery/sweatshirt"); setNavKey(6);}}>
                  Sweatshirts
                </NavItem>
                <NavItem eventKey={7} onClick={() => {history.push("/embroidery/tote"); setNavKey(7);}}>
                  Tote Bags
                </NavItem>
                <NavItem eventKey={8} onClick={() => {history.push("/embroidery/totezip"); setNavKey(8);}}>
                  Tote Bags With Zippers
                </NavItem>
                <NavItem eventKey={9} onClick={() => {history.push("/embroidery/tshirt"); setNavKey(9);}}>
                  T-Shirt
                </NavItem>
                <NavItem eventKey={10} onClick={() => {history.push("/embroidery/tshirtlong"); setNavKey(10);}}>
                  T-Shirt Long Sleeve
                </NavItem>
                <NavItem eventKey={11} onClick={() => {history.push("/embroidery/vest"); setNavKey(11);}}>
                  Vest
                </NavItem>
              </Nav>
            )
        }
      </MediaQuery>
    </React.Fragment>
  )
}