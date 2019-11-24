import React, { useState, useEffect } from "react";
import { Button, Col, Grid, Row, Thumbnail, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import { API } from "aws-amplify";
import imgBreakDown from "../components/ImgBreakDown";
import PayPalButton from "../components/PaypalButton";
import "./KitchenHome.css";
// import ColorPopulater from "../components/ColorPopulater";

export default function KitchenHome(props) {
  const [fabricChoice, setFabricChoice] = useState([]);
  const [fabricChosen, setFabricChosen] = useState(false);
  const [productChoice, setProductChoice] = useState([]);
  const [productChosen, setProductChosen] = useState(false);
  const [productTypeChosen, setProductTypeChosen] = useState("");
  const [fabricView, setFabricView] = useState("");
  // const [ colorChoice, setColorChoice ] = useState("");
  // const [ colorChosen, setColorChosen ] = useState(false);

  const [fabric, setFabric] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const s3imgUrl = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const products = await API.get("quilts", "/products");
      setProducts(products);
      loadFabric();
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
  }

  async function loadFabric() {
    try {
      const fabric = await API.get("quilts", "/fabric");
      setFabric(fabric);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  }

  function handleFabricView(e) {
    setFabricView(e.target.value);
  }

  function renderFabric() {
    return (
      <Grid fluid>
        <Row>
          <Col className="fabricHeader" xs={12} sm={5} md={3}>
            <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.imgSubCat[fabricView]}</strong></h2>
          </Col>
        </Row>
        <Row>
          {fabric.map((fabric, i) => {
            if (fabric.fabricSubCat === fabricView) {
              return (
                <Col key={i} xs={12} sm={5} md={3}>
                  <Thumbnail id="FabricBackground" key={i} src={fabric.fabricImgUrl} onClick={() => {setFabricChoice(fabric); setFabricChosen(true); }} style={{ backgroundColor: "#5b5f97", color: "white" }} alt="Well, something didn't work...">
                    <h3>{fabric.fabricName}</h3>
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

  function renderProducts() {
    return (
      <div>
        <Grid fluid>
          <Row>
            {products.map((product, i) => {
              if (product.prodType === "PRO") {
                return (
                  <Col key={i} xs={12} sm={5} md={3}>
                    <Thumbnail id="ProductBackground" key={product._id} src={product.prodImgUrl} onClick={() => { setProductChoice(product); setProductTypeChosen(product.prodSubCat); setProductChosen(true); }} alt="Well, Something didn't work...">
                      <h2>{product.prodName}</h2>
                      <h4>{`$${product.price}`}</h4>
                    </Thumbnail>
                  </Col>
                )
              }
            })}
          </Row>
        </Grid>
      </div>
    );
  }

  return (
    <div className="KitchenHome container">
      {!productChosen ? (
        <React.Fragment>
          <div className="KitchenHomeHeader" style={{ paddingLeft: "20px" }}>
            <h3>Welcome to the Kitchen Items!!!</h3>
            <p>Feel free to pick out the Fabric you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
            <p>Simply click on the product you want to continue!!</p>
          </div>
          {isLoading ? (
            <h4>Loading, please be patient... If network error, please refresh.</h4>
            ) : null
          }
          {renderProducts()}
        </React.Fragment>
      ) : (
          <React.Fragment>
            <Button onClick={() => {setProductChosen(false); setProductChoice([])}}>Change Product</Button>
            {!fabricChosen ? (
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Choose a fabric family from this drop-down and click one from below the shown product to continue.</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={handleFabricView}>
                  <option value="select">select</option>
                  <option value="bir">Birds</option>
                  <option value="bug">Bugs and Frogs</option>
                  <option value="cdo">Cats and Dogs</option>
                  <option value="fdk">Food</option>
                  <option value="flr">Flowers</option>
                  <option value="frm">Farm</option>
                  <option value="hol">Holidays</option>
                  <option value="mil">Military</option>
                  <option value="mis">Miscelanneous</option>
                  <option value="nat">Nautical</option>
                  <option value="wdl">Wild Animals</option>
                </FormControl>
              </FormGroup>
              ) : (<Button onClick={() => {setFabricChosen(false); setFabricChoice([])}}>Change Fabric</Button>)
            }
            {productChosen && !fabricChosen ? (
              <React.Fragment>
                <Thumbnail key={productChoice._id} src={productChoice.prodImgUrl} alt="Well, something didn't work...">
                  <h3>Product Chosen</h3>
                  <h3>{productChoice.prodDesc}</h3>
                </Thumbnail>
                {renderFabric()}
              </React.Fragment>
            ) : null
            }
          </React.Fragment>
        )
      }
      {productChosen && fabricChosen ? (
        <React.Fragment>
          <h2>The product you have put together today is: </h2>
          <div style={{ display: "flex" }}>
            <Thumbnail key={fabricChoice._id} src={fabricChoice.fabricImgUrl} alt="Well, something didn't work...">
              <h3>Fabric Chosen</h3>
              <h3>{fabricChoice.fabricName}</h3>
            </Thumbnail>
            <Thumbnail key={imgBreakDown.typeOutline[productTypeChosen].prodType} src={`${s3imgUrl}${imgBreakDown.typeOutline[productTypeChosen].prodImgLocation}`} alt="Well, something didn't work...">
              <h3>Product Chosen</h3>
              <h3>{imgBreakDown.typeOutline[productTypeChosen].prodType}</h3>
            </Thumbnail>
            <PayPalButton />
          </div>
        </React.Fragment>
      ) : null
      }
    </div>
  )
}
