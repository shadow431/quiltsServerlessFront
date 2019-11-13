import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import NewProduct from "../products/NewProduct";
import NewSchedule from "../schedule/NewSchedule";

export default function Admin (props) {
  const [ activePage, setActivePage ] = useState("");
  const [ currEventKey, setCurrEventKey ] = useState("");
  console.log(props);
  return (
    <React.Fragment>
      <Nav bsStyle="pills" pull-right activeKey={currEventKey}>
        <NavItem eventKey={1} onClick={() => {setActivePage("product"); setCurrEventKey(1);}}>Add A Product</NavItem>
        <NavItem eventKey={1} onClick={() => {setActivePage("schedule"); setCurrEventKey(2);}}>Add A Show/Schedule</NavItem>
      </Nav>
      {activePage === "product" ? <NewProduct /> : null}
      {activePage === "schedule" ? <NewSchedule /> : null}
    </React.Fragment>
  )
}