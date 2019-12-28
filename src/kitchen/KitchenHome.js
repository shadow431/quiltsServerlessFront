import React from "react";
import { Button, Thumbnail, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import PayPalButton from "../components/PaypalButton";
import RenderProducts from "../components/RenderProducts";
import "../containers/globalCSS.js";
// import { ToastDemo } from "../components/ToastDemo";
import RenderGraphics from "../components/RenderGraphics";

export default function KitchenHome(props) {
  const {
    fabrics,
    LargerImage,
    currentGraphic,
    setCurrentGraphic,
    isLoading,
    products,
    handleGraphicView,
    handleLargeImage,
    handleGraphicChoice,
    handleProductChoice,
    graphicChoice,
    setGraphicChoice,
    graphicChosen,
    setGraphicChosen,
    productTypeChosen,
    setProductChosen,
    productChosen,
    productChoice,
    setProductChoice,
    isLargeImage,
    setCurrentLargeImg,
    currentLargeImg,
    graphicView,
    setGraphicView,
    price,
    setPrice,
    purchasePrice,
    setPurchasePrice
  } = props;
  // const [graphicChoice, setGraphicChoice] = useState([]);
  // const [graphicChosen, setGraphicChosen] = useState(false);
  // const [productChoice, setProductChoice] = useState([]);
  // const [productChosen, setProductChosen] = useState(false);
  // const [productTypeChosen, setProductTypeChosen] = useState("");
  // const [graphicView, setGraphicView] = useState("select");
  // const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [purchasePrice, setPurchasePrice] = useState("");
  // const [isLargeImage, setIsLargeImage] = useState(false);
  const typeToRender = "KIT";
  const graphicCategories = ["bir", "bug", "cad", "fdk", "flr", "frm", "hol", "mil", "mis", "nat", "wdl"];
  const graphics = fabrics;

  // function handleGraphicView(e) {
  //   setGraphicView(e.target.value);
  // }

  // function handleLargeImage(product) {
  //   setIsLargeImage(!isLargeImage ? true : false);
  // }

  // function handleProductChoice(product) {
  //   setProductChoice(product);
  //   setProductTypeChosen(product.subCat.toUpperCase());
  //   setProductChosen(true);
  //   setPrice(product.price);
  //   setPurchasePrice(Number(product.price));
  //   setIsLargeImage(false);
  //   // setQuantity(1);
  // }

  // function handleGraphicChoice(graphic) {
  //   setGraphicChoice(graphic);
  //   setGraphicChosen(true);
  //   setIsLargeImage(false);
  // }

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
        </React.Fragment>
      ) : null
      }
      {productChosen || graphicChosen ? <Button className="buttonToggle" onClick={() => { setProductChosen(false); setProductChoice([]); setGraphicChosen(false); setGraphicChoice([]); setGraphicView("all")}}>Start Over</Button> : null}
      {productChosen ? <Button className="buttonToggle" onClick={() => { setProductChosen(false); setProductChoice([]); }}>Change Product</Button> : null}
      {graphicChosen ? <Button onClick={() => { setGraphicChosen(false); setGraphicChoice([]) }}>Change Fabric</Button> : null}
      {!graphicChosen || !productChosen ? (
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Choose a fabric family from this drop-down or select a shown product to continue.</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={handleGraphicView}>
            <option value="select">Fabric Choice</option>
            <option value="all">All Fabrics</option>
            {graphicCategories.map((subcat, i) => {
              return (
                <option key={i} value={subcat}>{imgBreakDown.subCat[subcat]}</option>
              )
            })}
          </FormControl>
        </FormGroup>
        ) : null
      }
      {isLargeImage ? <LargerImage /> : null}
      {!productChosen && !isLoading ?
        <RenderProducts productProps={{products, handleProductChoice, typeToRender, handleLargeImage, isLargeImage, setCurrentLargeImg }} /> : null
      }
      {graphicChosen && !productChosen ? (
        <React.Fragment>
          <h3>Current Fabric Choice</h3>
          <Thumbnail className="renderThumb" key={graphicChoice._id} src={graphicChoice.imgUrl} alt="Image to be added soon....">
            <h3>{graphicChoice.name}</h3>
          </Thumbnail>
        </React.Fragment>
        ) : null
      }
      {productChosen && !graphicChosen ? (
        <React.Fragment>
          <Thumbnail className="renderThumb" key={productChoice._id} src={productChoice.imgUrl} alt="Image to be added soon....">
            <h5>{productChoice.name}</h5>
            <h5>{productChoice.desc}</h5>
          </Thumbnail>
        </React.Fragment>
        ) : null
      }
      {graphicView !== "select" && !graphicChosen ?
        (<React.Fragment>
          <h3>Design Options, Click one to choose!!</h3>
          <RenderGraphics graphicProps = {{handleGraphicChoice, graphicView, graphicCategories, graphics, isLargeImage, handleLargeImage, currentGraphic, setCurrentGraphic, setCurrentLargeImg }} />
        </React.Fragment>
        ) : null
      }
      {productChosen && graphicChosen ? (
        <React.Fragment>
          <h2>The product you have put together today is: </h2>
          <div style={{ display: "flex" }}>
            <Thumbnail className="renderThumb" key={graphicChoice._id} src={graphicChoice.imgUrl} alt="Image to be added soon....">
              <h5>Fabric Chosen</h5>
              <h3>{graphicChoice.name}</h3>
            </Thumbnail>
            <Thumbnail className="renderThumb" key={imgBreakDown.typeOutline[productTypeChosen].type} src={productChoice.imgUrl} alt="Image to be added soon....">
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
          <PayPalButton paypalId={productChoice.paypalId} price={purchasePrice} fabric={graphicChoice.name} productName={productChoice.name} productType={productTypeChosen} />
        </React.Fragment>
        ) : null
      }
    </div>
  )
}
