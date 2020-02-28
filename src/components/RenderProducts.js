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
    setSizePrices,
    sizesToChoose,
    sizesToDisplay
  } = props.productProps;

  return (
    <Grid fluid>
      <Row>
        {products.map((product, i) => {
          // console.log(product);
          let colors = [];
          let sizes = [];
          if(product.colors && product.colors.length !== 0) {
            colors = product.colors.split(",");
          }
          if(product.type !== "IMG") {
            if(product.subCat.toUpperCase() === "BWL" || "HOO" || "HOZ" || "SWT" || "TSL" || "TSS" || "VES") {
              console.log("Product at size figure: ", product);
              console.log("New Sizes: ", imgBreakDown.typeOutline[product.subCat.toUpperCase()][sizesToChoose[0]]);
              sizes.push(imgBreakDown.typeOutline[product.subCat.toUpperCase()][sizesToChoose[i]]);
              // console.log("subcat matches: ",product);
              // if(imgBreakDown.typeOutline[product.subCat.toUpperCase()].sizes !== undefined || null) {
              //   // console.log("product has category info: ", product);
              //   sizes.push(imgBreakDown.typeOutline[product.subCat.toUpperCase()].sizes);
              //   // console.log(sizes);
              //   // console.log("Sizes: ", sizes)
              // }
            }
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
                    {sizes.length !== 0 ?
                      (<FormGroup controlId="sizeSelect">
                        <ControlLabel>Choose a size!</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={handleSizeChoice}>
                          <option value="select">Size Choice</option>
                          {sizesToChoose.map((size, i) => {
                            let tempItem = imgBreakDown.typeOutline[product.subCat.toUpperCase()];
                            console.log(product.name, tempItem);
                            // console.log(product);
                            return (
                              <option key={i} value={size} id={size.paypayId}> {sizesToDisplay[i]}  : $ {size.price}</option>
                            )
                          })}
                        </FormControl>
                      </FormGroup>) : null
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