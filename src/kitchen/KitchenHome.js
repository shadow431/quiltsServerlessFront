import React, { useState } from "react";
import { Button, Col, Grid, Row, Thumbnail } from "react-bootstrap";

export default function KitchenHome (props) {
  function renderProductsList(products) {
    return [{}].concat(products).map((product, i) => {
      if(i !== 0) {
        return (
          <Col key={i} xs={12} sm={5} md={3}>
            <Thumbnail style={{overflow:"auto"}} key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
              {/* <h3>{product.imgName}</h3> */}
              <h3>${product.price}</h3>
              <Button style={{backgroundColor:"#5b5f97", color:"white"}}>
                Add to Cart!
              </Button>
            </Thumbnail>
          </Col>
        )
      }
    })
  }

  function renderProducts() {
    return (
      <div>
        <Grid fluid>
          <Row>
            {renderProductsList(props.products)}
          </Row>
        </Grid>
      </div>
    );
  }

  return (
    <div className="KitchenHome">
      {renderProducts()}
    </div>
  );
}