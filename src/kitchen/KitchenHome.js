import React, { useState, useEffect } from "react";
import { Button, Col, Grid, Row, Thumbnail, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import { API } from "aws-amplify";
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

  const [ products, setProducts] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const s3imgUrl = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";

  useEffect(() => {

    onLoad();
  }, []);

  async function onLoad() {
    try {
      const products = await API.get("quilts", "/products");
      setProducts(products);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
  }

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
    return products.map((product, i) => {
      return (
        <Col key={i} xs={12} sm={5} md={3}>
          <Thumbnail style={{overflow:"auto"}} key={i} src={product.imgUrl} alt="Well, something didn't work...">
            <h3>{product.imgName}</h3>
            {/* <h3>${product.price}</h3> */}
            <form onSubmit={handleFabricChoice}>
              <Button type="submit" onClick={() => {setFabricChoice(product); setFabricChosen(true)}} style={{backgroundColor:"#5b5f97", color:"white"}}>
                Choose This Fabric!
              </Button>
            </form>
          </Thumbnail>
        </Col>
      )
    })
  }

  function renderProducts() {
    return (
      <div>
        <Grid fluid>
          <Row>
            {renderProductsList(products)}
          </Row>
        </Grid>
      </div>
    );
  }

  return (
    <div className="KitchenHome container">
      {!fabricChosen ? (
        <React.Fragment>
          <div className="KitchenHomeHeader" style={{paddingLeft: "20px"}}>
            <h3>Welcome to the Kitchen Items!!!</h3>
            <p>Feel free to pick out the Fabric you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
          </div>
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
              <Thumbnail key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
                <h3>Fabric Chosen</h3>
                <h3>{fabricChoice.imgName}</h3>
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
          <Thumbnail key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
            <h3>Fabric Chosen</h3>
            <h3>{fabricChoice.imgName}</h3>
          </Thumbnail>
          <Thumbnail key={imgBreakDown.typeOutline[prodTypeChosen].prodType} src={`${s3imgUrl}${imgBreakDown.typeOutline[prodTypeChosen].prodImgLocation}`} alt="Well, something didn't work...">
            <h3>Product Chosen</h3>
            <h3>{imgBreakDown.typeOutline[prodTypeChosen].prodType}</h3>
          </Thumbnail>
        </React.Fragment>
      ): null
      }
    </div>
  );
}