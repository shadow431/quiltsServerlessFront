import React, { useState } from "react";
import { Nav, NavItem, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import MediaQuery from "react-responsive";
import "../containers/globalCSS.js";

export default function MainNav(props) {
  const [navKey, setNavKey] = useState("");
  const { history, isAuthenticated, startOver, setShowLetterNav, setLetterView, setShowByLetter } = props.navProps;

  function handleNavSelection(e) {
    history.push(e.target.value);
  }

  function handleLetterSort(e) {
    console.log(e.target.value);
    setShowByLetter(true);
    setLetterView(e.target.value);
  }


  return (
    <React.Fragment>
      {window.location.pathname.includes("/admin") || window.location.pathname.includes("/login") ? null : (
        <MediaQuery minWidth={786}>
          {(matches) =>
            matches
              ? (
                <Nav className="mainNav" bsStyle="pills" style={{ "overflow": "auto" }} stacked pullLeft activeKey={navKey} >
                  <NavItem eventKey={1} onClick={() => { startOver(); history.push("/newitems"); setNavKey(1); }}>
                    NEW!!
                </NavItem>
                  <NavItem eventKey={2} onClick={() => { startOver(); history.push("/embroidery"); setNavKey(2); setShowLetterNav(true); }}>
                    Products
                </NavItem>
                  <NavItem eventKey={3} onClick={() => { startOver(); history.push("/designs"); setNavKey(3); setShowLetterNav(true); }}>
                    Embroidery
                </NavItem>
                  <NavItem eventKey={4} onClick={() => { startOver(); history.push("/kitchen"); setNavKey(4); }}>
                    Kitchen Items
                </NavItem>
                  <NavItem eventKey={5} onClick={() => { startOver(); history.push("/fabrics"); setNavKey(5); }}>
                    Fabrics
                </NavItem>
                  {/* <NavItem eventKey={3} onClick={() => {history.push("/quilts"); setNavKey(3);}}>
                  Quilts
                </NavItem> */}
                  <NavItem eventKey={6} onClick={() => { startOver(); history.push("/schedule"); setNavKey(6); }}>
                    Show Schedule
                </NavItem>
                  {isAuthenticated ? (
                    <React.Fragment>
                      <NavItem eventKey={7} onClick={() => { history.push("/admin/design/new"); setNavKey(7); startOver(); }}>Add A Design</NavItem>
                      <NavItem eventKey={8} onClick={() => { history.push("/admin/fabric/new"); setNavKey(8); startOver(); }}>Add A Fabric</NavItem>
                      <NavItem eventKey={9} onClick={() => { history.push("/admin/products/new"); setNavKey(9); startOver(); }}>Add A Product</NavItem>
                      <NavItem eventKey={10} onClick={() => { history.push("/admin/schedule/new"); setNavKey(10); startOver(); }}>Add A Show/Schedule</NavItem>
                    </React.Fragment>
                  ) : (
                      null
                    )
                  }
                </Nav>
              )
              : (
                <React.Fragment>
                  <FormGroup controlId="mainNavSelect">
                    <ControlLabel>Page Nav</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={handleNavSelection}>
                      <option value="select">Select</option>
                      <option value="/embroidery">Products</option>
                      <option value="/designs">Embroidery</option>
                      <option value="/kitchen">Kitchen</option>
                      <option value="/fabrics">Fabrics</option>
                      {/* <option value="quilts">Quilts</option> */}
                      <option value="/schedule">Schedule</option>
                      {isAuthenticated ? (
                        <React.Fragment>
                          <option value="/admin/design/new">Add A Design</option>
                          <option value="/admin/fabric/new">Add A Fabric</option>
                          <option value="/admin/products/new">Add A Product</option>
                          <option value="/admin/schedule/new">Add A Show/Schedule</option>
                        </React.Fragment>
                      ) :
                        null
                      }
                    </FormControl>
                  </FormGroup>
                </React.Fragment>
              )
          }
        </MediaQuery>
      )}
    </React.Fragment>
  )
}
