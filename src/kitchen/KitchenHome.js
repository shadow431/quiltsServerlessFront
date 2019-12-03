import React, { useState, useEffect } from "react";
import { Button, Col, Grid, Row, Thumbnail, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import { API } from "aws-amplify";
import imgBreakDown from "../components/ImgBreakDown";
import PayPalButton from "../components/PaypalButton";
import RenderProducts from "../components/RenderProducts";
import "../containers/globalCSS.js";
import { ToastDemo } from "../components/ToastDemo";
import RenderGraphics from "../components/RenderGraphics";
// import ColorPopulater from "../components/ColorPopulater";

export default function KitchenHome(props) {
  const [graphicChoice, setGraphicChoice] = useState([]);
  const [graphicChosen, setGraphicChosen] = useState(false);
  const [productChoice, setProductChoice] = useState([]);
  const [productChosen, setProductChosen] = useState(false);
  const [productTypeChosen, setProductTypeChosen] = useState("");
  const [graphicView, setGraphicView] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const [graphics, setGraphics] = useState([]);
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
      loadGraphic();
    }
    catch (e) {
      if (e !== 'No current user') {
        loadProducts();
        // return <ToastDemo />;
      }
    }
    setIsLoading(false);
  }

  async function loadGraphic() {
    try {
      const fabrics = await API.get("quilts", "/fabric");
      setGraphics(fabrics);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadGraphic();
        // return <ToastDemo />;
      }
    }
  }

  function handleGraphicView(e) {
    setGraphicView(e.target.value);
  }

  function handleProductChoice(product) {
    setProductChoice(product);
    setProductTypeChosen(product.subCat);
    setProductChosen(true);
    setPrice(product.price);
    setPurchasePrice(Number(product.price));
    // setQuantity(1);
  }

  function handleGraphicChoice(graphic) {
    setGraphicChoice(graphic);
    setGraphicChosen(true);
  }

  return (
    <div className="KitchenHome container">
      {!productChosen ? (
        <React.Fragment>
          <div className="KitchenHomeHeader" style={{ paddingLeft: "20px" }}>
            <h3>Welcome to the Kitchen Items!!!</h3>
            <p>Feel free to pick out the Fabric you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
            <p>Simply click on the product you want to continue!!</p>
            <span className="freeShip">FREE SHIPPING ON ORDERS $60.00 AND OVER.</span><br />
          </div>
          {isLoading ? (
            <React.Fragment>
              <h4>Loading, please be patient... </h4>
            </React.Fragment>
          ) : <RenderProducts products={products} handleProductChoice={handleProductChoice} />
          }
        </React.Fragment>
      ) : (
          <React.Fragment>
            <Button className="buttonToggle" onClick={() => { setProductChosen(false); setProductChoice([]); }}>Start Over</Button>
            <Button className="buttonToggle" onClick={() => { setProductChosen(false); setProductChoice([]); }}>Change Product</Button>
            {!graphicChosen ? (
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Choose a fabric family from this drop-down and click one from below the shown product to continue.</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={handleGraphicView}>
                  <option value="select">Fabric Choice</option>
                  <option value="all">All Fabrics</option>
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
            ) :
              (
                <React.Fragment>
                  <Button onClick={() => { setGraphicChosen(false); setGraphicChoice([]) }}>Change Fabric</Button>
                </React.Fragment>
              )
            }
            {productChosen && !graphicChosen ? (
              <React.Fragment>
                <Thumbnail className="renderThumb" key={productChoice._id} src={productChoice.imgUrl} alt="Image to be added soon....">
                  <h5>{productChoice.name}</h5>
                  <h5>{productChoice.desc}</h5>
                </Thumbnail>
                <RenderGraphics graphics={graphics} handleGraphicChoice={handleGraphicChoice} graphicView={graphicView} />
              </React.Fragment>
            ) : null
            }
          </React.Fragment>
        )
      }
      {productChosen && graphicChosen ? (
        <React.Fragment>
          <h2>The product you have put together today is: </h2>
          <div style={{ display: "flex" }}>
            <Thumbnail className="renderThumb" key={graphicChoice._id} src={graphicChoice.imgUrl} alt="Image to be added soon....">
              <h5>Fabric Chosen</h5>
              <h3>{graphicChoice.name}</h3>
            </Thumbnail>
            <Thumbnail className="renderThumb" key={imgBreakDown.typeOutline[productTypeChosen].type} src={`${s3imgUrl}${imgBreakDown.typeOutline[productTypeChosen].imgLocation}`} alt="Image to be added soon....">
              <h5>{productChoice.name}</h5>
              <h3>{`$${productChoice.price}`}</h3>
            </Thumbnail>
          </div>
          {/* <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={(e) => {setQuantity(e.target.value); setPurchasePrice(price * e.target.value);}}>
              <option value="select">Choose Quantity</option>
              <option value="1">{`1 = $${price * 1}`}</option>
              <option value="2">{`2 = $${price * 2}`}</option>
              <option value="3">{`3 = $${price * 3}`}</option>
              <option value="4">{`4 = $${price * 4}`}</option>
              <option value="5">{`5 = $${price * 5}`}</option>
            </FormControl>
          </FormGroup> */}
          <PayPalButton paypalId={productChoice.paypalId} quantity={quantity} price={purchasePrice} fabric={graphicChoice.name} productName={productChoice.name} productType={productTypeChosen} />
        </React.Fragment>
      ) : null
      }
    </div>
  )
}
