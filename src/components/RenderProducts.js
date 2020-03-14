import React from "react";
import { Col, Grid, Row, Thumbnail, Button, FormControl, ControlLabel, FormGroup } from "react-bootstrap";
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function RenderProducts(props) {
  const {
    products,
    handleProductChoice,
    typeToRender,
    handleLargeImage,
    handleSizeChoice,
    handleColorChoice,
    sizeChoice,
    setSizeChoice,
  } = props.productProps;
  const sizesToChoose = ["sm", "md", "lg", "x1", "x2", "x3", "x4", "x5"];
  const sizesToDisplay = ["Sm", "Md", "Lg", "1X", "2X", "3X", "4X", "5X"];
  const subCatToWorkWith = ["BWL", "HOO", "HOZ", "SWT", "TSS", "VES"];
  let renderSizes = false;

  return (
    <Grid fluid>
      <Row>
        {products.map((product, i) => {
          let colors = [];
          let prodWithSize = [];
          if(product.colors && product.colors.length !== 0) {
            colors = product.colors.split(",");
          }
          if(product.type !== "IMG"){
            if(
              product.subCat === "BWL" ||
              product.subCat === "HOO" ||
              product.subCat === "HOZ" ||
              product.subCat === "SWT" ||
              // product.subCat === "TSL" ||
              product.subCat === "TSS" ||
              product.subCat === "VES"
            ){
              prodWithSize.push(product);
              renderSizes = true;
            } else {
              renderSizes = false;
            }
          }
          console.log(renderSizes);
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
                        {colors.map((color, j) => {
                          return (
                            <option key={j} value={color}>{color}</option>
                            )
                          })}
                      </FormControl>
                    </FormGroup>
                  }
                  {renderSizes ?
                    (<FormGroup controlId="sizeSelect">
                      <ControlLabel>Choose a size!</ControlLabel>
                      <FormControl componentClass="select" placeholder="select" onChange={handleSizeChoice}>
                        <option value="select">Size Choice</option>
                        {sizesToChoose.map((size, l) => {
                          if(prodWithSize[0][size] === undefined) {
                            console.log("Size to choose: ", prodWithSize[0][size]);
                            return null;
                          }else {
                            console.log("size in prodWithSize: ", prodWithSize[0][size]);
                            return (
                              <option key={prodWithSize[0][size].paypalId} value={prodWithSize[0][size]} id={prodWithSize[0][size].paypalId}> {sizesToDisplay[l]} : $ {prodWithSize[0][size].price}</option>
                            )
                          }
                        })}
                        }
                      </FormControl>
                    </FormGroup>) : null
                  }
                  <Button onClick={() => handleLargeImage(product)}>Enlarge</Button>
                  <Button onClick={() => handleProductChoice(product)}>Choose</Button>
                </Thumbnail>
              </React.Fragment>
            </Col>
          )}
        })
      }
      </Row>
    </Grid>
  );
}
