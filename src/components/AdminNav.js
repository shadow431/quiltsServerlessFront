import React from "react";
import { Nav, NavItem } from "react-bootstrap";

export default function AdminNav () {
  return (
    <Nav bsStyle="pills">
      <NavItem href="/admin/products/new">Products</NavItem>
      <NavItem href="/admin/schedule/new">Schedule</NavItem>
    </Nav>
  )
}