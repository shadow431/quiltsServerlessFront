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
    sizePrices,
    setSizePrices
  } = props.productProps;

  return (
    <Grid fluid>
      <Row>
        {products.map((product, i) => {
          // console.log(product);
          let colors = [];
          // let sizes = [];
          if(product.colors && product.colors.length !== 0) {
            colors = product.colors.split(",");
          }
          // if(product.type !== "IMG") {
          //   if(product.subCat.toUpperCase() === "BWL" || "HOO" || "HOZ" || "SWT" || "TSL" || "TSS" || "VES") {
          //     if(imgBreakDown.typeOutline[product.subCat.toUpperCase()] !== undefined || null) {
          //       sizes = imgBreakDown.typeOutline[product.subCat.toUpperCase()].sizes;
          //     }
          //   }
          // }
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
                    {/* {product.subCat === "bwl" || "hoo" || "hoz" || "swt" || "tsl" || "tss" || "ves" || "BWL" || "HOO" || "HOZ" || "SWT" || "TSL" || "TSS" || "VES" ?
                      (<FormGroup controlId="sizeSelect">
                        <ControlLabel>Choose a size!</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={handleSizeChoice}>
                          <option value="select">Size Choice</option>
                          {sizes.map((size, i) => {
                            console.log(product.subCat)
                            return (
                              <option key={i} value={size[i]} id={size[i].paypayId}>`${size[i]} : $${size.price[i]}`</option>
                            )
                          })}
                        </FormControl>
                      </FormGroup>) : null
                    } */}
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