import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";

export default function Admin(props) {
  return (
    <ListGroup>
      <ListGroupItem href="/products/new">
        <h4>
          <b>{"\uFF0B"}</b> Add Item
        </h4>
      </ListGroupItem>
    </ListGroup>
  )
}
