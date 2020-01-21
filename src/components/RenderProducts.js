import React from "react";
import { Col, Grid, Row, Thumbnail, Button, FormControl, ControlLabel, FormGroup } from "react-bootstrap";
import Modal from "react-modal";
import imgBreakDown from "./ImgBreakDown";

Modal.setAppElement('#root');

export default function RenderProducts(props) {
  const {
    products,
    handleProductChoice,
    typeToRender,
    handleLargeImage,
    handleSizeChoice,
    handleColorChoice,
    renderSizes,
    setRenderSizes
  } = props.productProps;


  return (
    <Grid fluid>
      <Row>
        {products.map((product, i) => {
          let colors = [];
          let sizes = [];
          if(product.colors && product.colors.length !== 0) {
            colors = product.colors.split(",");
          }
          // || "hoz" || "ves" || "tss" || "tsl" || "swt"
          if(product.subCat == "hoo" ) {
            console.log("Product: ", product);
            sizes = product.price[0];
            setRenderSizes(true);
            console.log("sizes: ", sizes);
          }
          if (product.type === typeToRender) {
            return (
              <Col key={i} xs={12} sm={5} md={4} lg={4}>
                <React.Fragment>
                  <Thumbnail className="renderThumb" key={product._id} src={product.imgUrl} alt="Image to be added soon....">
                    <h3>{product.name}</h3>
                    <h4>{`$${product.price}`}</h4>
                    {typeToRender === "EMB" &&
                      <FormGroup controlId="colorSelect">
                        <ControlLabel>Choose a color!</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={handleColorChoice}>
                          <option value="select">Color Choice</option>
                          {colors.map((color, i) => {
                            return (
                              <option key={i} value={color}>{color}</option>
                            )
                          })}
                        </FormControl>
                      </FormGroup>
                    }
                    {renderSizes &&
                      <FormGroup controlId="sizeSelect">
                        <ControlLabel>Choose a color!</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={handleSizeChoice}>
                          <option value="select">Size Choice</option>
                          {sizes.map((size, i) => {
                            return (
                              <option key={i} value={size}>{size}</option>
                            )
                          })}
                        </FormControl>
                      </FormGroup>
                    }
                    <Button onClick={() => handleLargeImage(product)}>Enlarge</Button>
                    <Button onClick={() => handleProductChoice(product)}>Choose</Button>
                  </Thumbnail>
                </React.Fragment>
              </Col>
            )
          }
        })
        }
      </Row>
    </Grid>
  );
}