import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Admin(props) {
  return (
    <LinkContainer key="new" to="/products/new">
      <ListGroupItem>
        <h4>
          <b>{"\uFF0B"}</b> Add Item
        </h4>
      </ListGroupItem>
    </LinkContainer>
  )
}
