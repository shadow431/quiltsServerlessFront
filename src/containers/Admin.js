import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import NewProduct from "../products/NewProduct";
import NewSchedule from "../schedule/NewSchedule";

export default function Admin () {
  const [ activePage, setActivePage ] = useState("");
  const [ navKey, setNavKey ] = useState("");
  return (
    <React.Fragment>
      <Nav bsStyle="pills" activeKey={navKey}>
        <NavItem eventKey={1} onClick={() => {setActivePage("product"); setNavKey(1);}}>Add A Product</NavItem>
        <NavItem eventKey={1} onClick={() => {setActivePage("schedule"); setNavKey(2);}}>Add A Show/Schedule</NavItem>
      </Nav>
      {activePage === "product" ? <NewProduct /> : null}
      {activePage === "schedule" ? <NewSchedule /> : null}
    </React.Fragment>
  )
}