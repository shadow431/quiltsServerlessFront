import React, { useState, useEffect } from "react";
import { Button, FormGroup, ControlLabel, FormControl, Thumbnail } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import RenderProducts from "../components/RenderProducts";
import { API } from "aws-amplify";
import RenderGraphics from "../components/RenderGraphics";
import PayPalButton from "../components/PaypalButton"

export default function EmbroideryHome(props) {
  // const [graphicChoice, setGraphicChoice] = useState([]);
  // const [graphicChosen, setGraphicChosen] = useState(false);
  const [productChoice, setProductChoice] = useState([]);
  const [productChosen, setProductChosen] = useState(false);
  const [productTypeChosen, setProductTypeChosen] = useState("");
  const [graphicChoice, setGraphicChoice] = useState("");
  const [graphicChosen, setGraphicChosen] = useState(false);
  const [graphicView, setGraphicView] = useState("select");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const typeToRender = "EMB";

  const [graphics, setGraphics] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const graphicCategories = ["afg", "air", "aki", "abd", "esk", "asc", "aus", "atr", "atr", "baj", "bas", "bea", "brd", "bed", "bls", "bel", "ber", "bic", "btc", "bch", "bld", "brc", "bod", "bor", "bos", "bov", "box", "blt", "brr", "brt", "bru", "can", "cah", "kcs", "che", "chi", "chc", "cho", "clb", "cos", "col", "cor", "cot", "dox", "dal", "ddt", "dob", "bul", "eng", "spr", "flt", "fox", "fbl", "she", "grs", "gol", "gor", "grd", "grp", "gsm", "gry", "hav", "pul", "hus", "ice", "irh", "irw", "iwh", "itg", "jrt", "jpc", "kes", "ker", "lad", "lab", "lag", "lak", "lgm", "leo", "lhp", "mal", "mas", "min", "mor", "new", "nor", "nov", "egs", "pap", "pek", "pic", "pit", "plh", "pom", "pod", "por", "pug", "rat", "rod", "rot", "sal", "sam", "sci", "sch", "sco", "sha", "shl", "shb", "shi", "sil", "smc", "stb", "stf", "tib", "tre", "vis", "wei", "wss", "whi", "wht", "wip", "wfx", "yor"];

  // const [ prod, setProd ] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  function handleProductChoice(product) {
    setProductChoice(product);
    setProductTypeChosen(product.subCat.toUpperCase());
    setProductChosen(true);
    setPrice(product.price);
    setPurchasePrice(Number(product.price));
    // setQuantity(1);
  }

  function handleGraphicChoice(graphic) {
    setGraphicChoice(graphic);
    setGraphicChosen(true);
  }

  function handleGraphicView(e) {
    setGraphicView(e.target.value);
  }

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
  }

  async function loadGraphic() {
    try {
      const designs = await API.get("quilts", "/design");
      setGraphics(designs);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadGraphic();
        // return <ToastDemo />;
      }
    }
    setIsLoading(false);
  }

  // function handleProductType (e) {
  //   e.preventDefault();
  //   setProd(imgBreakDown.typeOutline.BPB.type);

  // }

  return (
    <div className="embroideryHome container">
      {!productChosen ? (
        <React.Fragment>
          <div className="EmbroideryHomeHeader" style={{ paddingLeft: "20px" }}>
            <h3>Welcome to the Embroidery Items!!!</h3>
            <p>Feel free to pick out the Design you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
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
            <option value="select">Design Choice</option>
            <option value="all">All Designs</option>
            {graphicCategories.map((subcat, i) => {
              return (
                <option key={i} value={subcat}>{imgBreakDown.subCat[subcat]}</option>
              )
            })}
          </FormControl>
        </FormGroup>
        ) : null
      }
      {isLoading ?
        <h4>Loading products, please be patient... </h4> : null
      }
      {!productChosen && !isLoading ?
        <RenderProducts productProps={{products, handleProductChoice, typeToRender}} /> : null
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
      {graphicView !== "select" && !graphicChosen && !isLoading ?
        (<React.Fragment>
          <h3>Fabric Options, Click one to choose!!</h3>
          <RenderGraphics graphicProps = {{handleGraphicChoice, graphicView, graphicCategories, graphics}} />
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
          <PayPalButton paypalId={productChoice.paypalId} quantity={quantity} price={purchasePrice} fabric={graphicChoice.name} productName={productChoice.name} productType={productTypeChosen} />
        </React.Fragment>
        ) : null
      }
    </div>
  )
}

// {colorChosen ? (
//   <React.Fragment>
//     {/* <h3>{colorChoice}</h3> */}
//     <Thumbnail style={{overflow:"auto"}} key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
//       <h3>Fabric Chosen</h3>
//     </Thumbnail>
//     <Thumbnail style={{overflow:"auto"}} key={imgBreakDown.typeOutline[prodTypeChosen].prodType} src={imgBreakDown.typeOutline[prodTypeChosen].prodImgLocation} alt="Well, something didn't work...">
//       <h3>Product Chosen</h3>
//       <h3>{imgBreakDown.typeOutline[prodTypeChosen].prodType}</h3>
//     </Thumbnail>
//   </React.Fragment>
//   ) : null
// }
