import React, { useState, useEffect } from "react";
import { Col, Button, Thumbnail } from "react-bootstrap";

export default function ProductHome (props) {
  const products = props.props.props;

  return products.map((product, i) => {
    if(i !== 0) {
      return (
        <Col xs={12} sm={4} md={3}>
          <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
            <h3>{product.imgName}</h3>
            <Button bsStyle="primary">
              Add to Cart!
            </Button>
          </Thumbnail>
        </Col>
      )
    }
  })
}