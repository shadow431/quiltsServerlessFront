import React from "react";
import { Nav, NavItem } from "react-bootstrap";

export default function AdminNav () {
  return (
    <Nav bsStyle="pills">
      <NavItem href="/admin/inventory">Inventory</NavItem>
      <NavItem href="/admin/schedule">Schedule</NavItem>
    </Nav>
  )
}