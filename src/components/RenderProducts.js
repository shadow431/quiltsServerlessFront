import React from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";

const RenderProducts = (props) => {
  const {products, handleProductChoice} = props.productProps;
  return (
    <Grid fluid>
      <Row>
          {products.map((product, i) => {
            if (product.type === "KIT") {
              return (
                <Col key={i} xs={12} sm={5} md={4} lg={4}>
                  <Thumbnail className="renderThumb" key={product._id} src={product.imgUrl} onClick={() => handleProductChoice(product)} alt="Image to be added soon....">
                    <h3>{product.name}</h3>
                    <h4>{`$${product.price}`}</h4>
                  </Thumbnail>
                </Col>
              )
            }
          })
        }
      </Row>
    </Grid>
  );
}

export default RenderProducts;