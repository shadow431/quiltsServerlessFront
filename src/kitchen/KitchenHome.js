import React, { useState } from "react";
import { Button, Col, Grid, Row, Thumbnail, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
// import ColorPopulater from "../components/ColorPopulater";

export default function KitchenHome (props) {
  const [ fabricChoice, setFabricChoice ] = useState([]);
  const [ fabricChosen, setFabricChosen ] = useState(false);
  const [ productChoice, setProductChoice ] = useState("");
  const [ productChosen, setProductChosen ] = useState(false);
  const [ prodTypeChosen, setProductTypeChosen ] = useState("");
  // const [ colorChoice, setColorChoice ] = useState("");
  // const [ colorChosen, setColorChosen ] = useState(false);

  function handleFabricChoice (e) {
    e.preventDefault();
    console.log(fabricChoice);
  }

  function handleProductSelection(e) {
    const choice = e.target.value;
    if(choice === "potato"){
      setProductTypeChosen("BPB");
    } else if(choice === "bowl") {
      setProductTypeChosen("BWL");
    } else if(choice === "ovenmitt") {
      setProductTypeChosen("OVM");
    } else if(choice === "plate") {
      setProductTypeChosen("PLT");
    } else if(choice === "tortilla") {
      setProductTypeChosen("TLB");
    }
    setProductChoice(choice);
    setProductChosen(true);
  }

  function renderProductsList(products) {
    return [{}].concat(products).map((product, i) => {
      if(i !== 0) {
        return (
          <Col key={i} xs={12} sm={5} md={3}>
            <Thumbnail style={{overflow:"auto"}} key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
              {/* <h3>{product.imgName}</h3> */}
              <h3>${product.price}</h3>
              <form onSubmit={handleFabricChoice}>
                <Button type="submit" onClick={() => {setFabricChoice(product); setFabricChosen(true)}} style={{backgroundColor:"#5b5f97", color:"white"}}>
                  Choose This Fabric!
                </Button>
              </form>
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
      {!fabricChosen ? (
        <React.Fragment>
          <h3>Welcome to the Kitchen Items!!!</h3>
          <p>Feel free to pick out the Fabric you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
          {renderProducts()}
        </React.Fragment>
        ) : (
          <React.Fragment>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={handleProductSelection}>
                <option value="select">select</option>
                <option value="potato">Baked Potato Bags</option>
                <option value="bowl">Bowl Wraps</option>
                <option value="ovenmitt">Oven Mitts</option>
                <option value="plate">Plate Wraps</option>
                <option value="tortilla">Tortilla Wraps</option>
              </FormControl>
            </FormGroup>
            {!productChosen ? (
              <Thumbnail style={{overflow:"auto"}} key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
                <h3>Fabric Chosen</h3>
              </Thumbnail>
            ) : null
            }
          </React.Fragment>
        )
      }
      {productChosen && fabricChosen ? (
        <React.Fragment>
          {/* <ColorPopulater product={prodTypeChosen} /> */}
          <h2>The product you have put together today is: </h2>
          <Thumbnail style={{overflow:"auto"}} key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
            <h3>Fabric Chosen</h3>
          </Thumbnail>
          <Thumbnail style={{overflow:"auto"}} key={imgBreakDown.typeOutline[prodTypeChosen].prodType} src={imgBreakDown.typeOutline[prodTypeChosen].prodImgLocation} alt="Well, something didn't work...">
            <h3>Product Chosen</h3>
            <h3>{imgBreakDown.typeOutline[prodTypeChosen].prodType}</h3>
          </Thumbnail>
        </React.Fragment>
      ): null
      }
    </div>
  );
}