import React from "react";
import { Button, FormGroup, ControlLabel, FormControl, Thumbnail } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import RenderProducts from "../components/RenderProducts";
import RenderGraphics from "../components/RenderGraphics";
import PayPalButton from "../components/PaypalButton"
import RenderLetterGraphics from "../components/RenderLetterGraphics";

// EMBpub1076 needs to be added eventually CrossStitch

export default function EmbroideryHome(props) {
  const typeToRender = "EMB";

  const {
    embroideryGraphicCategories,
    designs,
    isLoading,
    products,
    handleGraphicView,
    handleLargeImage,
    handleGraphicChoice,
    handleProductChoice,
    colorChoice,
    colorChosen,
    setColorChosen,
    setColorChoice,
    graphicChoice,
    setGraphicChoice,
    graphicChosen,
    handleColorChoice,
    setGraphicChosen,
    productTypeChosen,
    setProductChosen,
    productChosen,
    productChoice,
    setProductChoice,
    isLargeImage,
    LargerImage,
    renderSizes,
    setRenderSizes,
    graphicView,
    setGraphicView,
    sizeChoice,
    setSizeChoice,
    price,
    setPrice,
    purchasePrice,
    setPurchasePrice,
    showByLetter,
    letterView
  } = props;

  const graphics = designs;
  const graphicCategories = embroideryGraphicCategories;

  return (
    <div className="embroideryHome container">
      {!productChosen ? (
        <React.Fragment>
          <div className="EmbroideryHomeHeader" style={{ paddingLeft: "20px" }}>
            <h3>Welcome to the Embroidery Items!!!</h3>
            <p>Feel free to pick out the design you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
            <p>Simply click on the product you want to continue!!</p>
            <span className="freeShip">FREE SHIPPING ON ORDERS $60.00 AND OVER.</span><br />
          </div>
        </React.Fragment>
      ) : null
      }
      {productChosen || graphicChosen ? <Button className="buttonToggle" onClick={() => { setProductChosen(false); setProductChoice([]); setGraphicChosen(false); setGraphicChoice([]); setGraphicView("all"); setColorChoice(""); setColorChosen(false); }}>Start Over</Button> : null}
      {productChosen ? <Button className="buttonToggle" onClick={() => { setProductChosen(false); setProductChoice([]); setColorChoice(""); setColorChosen(false); }}>Change Product</Button> : null}
      {graphicChosen ? <Button onClick={() => { setGraphicChosen(false); setGraphicChoice([]) }}>Change Fabric</Button> : null}
      {!graphicChosen || !productChosen ? (
        <FormGroup controlId="formControlsSelect" className="categorySelector">
          <ControlLabel>Choose a design family from this drop-down or select a shown product to continue.</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={handleGraphicView}>
            <option value="select">Select</option>
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
        <RenderProducts productProps={{sizeChoice, setSizeChoice, products, handleProductChoice, typeToRender, isLargeImage, renderSizes, setRenderSizes, handleLargeImage, handleColorChoice }} /> : null
      }
      {graphicChosen && !productChosen ? (
        <React.Fragment>
          <h3>Current Design Choice</h3>
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
            {colorChosen && <h5>{colorChoice}</h5>}
          </Thumbnail>
        </React.Fragment>
        ) : null
      }
      {!graphicChosen && !isLoading && !showByLetter ?
        (<React.Fragment>
          <h3>Design Options, Click one to choose!!</h3>
          <RenderGraphics graphicProps = {{handleGraphicChoice, graphicView, graphicCategories, graphics, isLargeImage, handleLargeImage, showByLetter, letterView }} />
        </React.Fragment>
        ) : null
      }
      {showByLetter ? <RenderLetterGraphics letterProps={{letterView, graphicCategories, graphics, handleGraphicChoice, handleLargeImage}} /> : null}
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
              {colorChosen && <h5>{colorChoice}</h5>}
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
          <PayPalButton paypalId={productChoice.paypalId} color={colorChoice} colorChosen={colorChosen} price={purchasePrice} fabric={graphicChoice.name} productName={productChoice.name} productType={productTypeChosen} />
        </React.Fragment>
        ) : null
      }
    </div>
  )
}
