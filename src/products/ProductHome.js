import React, { useState, useEffect } from "react";
import { Col, Button, Thumbnail } from "react-bootstrap";

export default function ProductHome (props) {
  const products = props.props.props;
  console.log("props.props at product homehome: ", props.props);
  console.log("props at producthome: ", props);

  return products.map((product, i) => {
    console.log("product in map: ", product)
    if(i !== 0) {
      return (
        <Col key={i * 3} md={3}>
          <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something didn't work..." style={{"width":product.imgWidth}}>
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