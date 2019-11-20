import React, { useState, useEffect } from "react";
import { Button, Col, Grid, Row, Thumbnail, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import { API } from "aws-amplify";
// import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import imgBreakDown from "../components/ImgBreakDown";
// import ColorPopulater from "../components/ColorPopulater";

export default function KitchenHome (props) {
  const [ fabricChoice, setFabricChoice ] = useState([]);
  const [ fabricChosen, setFabricChosen ] = useState(false);
  const [ productChoice, setProductChoice ] = useState("");
  const [ productChosen, setProductChosen ] = useState(false);
  const [ prodTypeChosen, setProductTypeChosen ] = useState("");
  const [ fabricView, setFabricView ] = useState("");
  // const [ colorChoice, setColorChoice ] = useState("");
  // const [ colorChosen, setColorChosen ] = useState(false);

  const [ fabric, setFabric] = useState([]);
  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const s3imgUrl = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";

  useEffect(() => {

    loadFabric();
  }, []);

  async function loadProducts() {
    try {
      const products = await API.get("quilts", "/products");
      console.log(products);
      setProducts(products);
    }
    catch(e) {
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
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
  }

  function handleFabricView(e) {
    e.preventDefault();
    setFabricView(e.target.value);
  }

  function renderFabricList(fabric) {
    loadFabric();
    if(fabric.fabricType === fabricView) {
      return fabric.map((fabric, i) => {
        return (
          <Col key={i} xs={12} sm={5} md={3}>
            <form>
              <Button type="submit" onClick={() => {setFabricChoice(fabric); setFabricChosen(true)}} style={{backgroundColor:"#5b5f97", color:"white"}}>
                <Thumbnail key={i} src={fabric.fabricImgUrl} alt="Well, something didn't work...">
                  <h3>{fabric.fabricName}</h3>
                </Thumbnail>
              </Button>
            </form>
          </Col>
        )
      })
    }
  }

  function renderFabric() {
    return (
      <div>
        <Grid fluid>
          <Row>
            {renderFabricList}
          </Row>
        </Grid>
      </div>
    );
  }

  const RenderProducts = (products) => {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col>
              {products.map((product, i) => {
                return(
                  <Thumbnail key={product._id} src={product.imgUrl} onClick={() => {setProductChoice(product); setProductChosen(true);}} alt="Well, Something didn't work...">
                    <h2>{product.imgName}</h2>
                    <h4>{product.prodDesc}</h4>
                    <h4>{product.price}</h4>
                  </Thumbnail>
                )
              })}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  return (
    <div className="KitchenHome container">
      {!productChosen ? (
        <React.Fragment>
          <div className="KitchenHomeHeader" style={{paddingLeft: "20px"}}>
            <h3>Welcome to the Kitchen Items!!!</h3>
            <p>Feel free to pick out the Fabric you would like to start with and we will go through the new and improved process of getting you to your desires!!</p>
          </div>
          {RenderProducts}
          {/* <Connect query={graphqlOperation(queries.listProducts)}>
            {({ data: { listProducts }, loading, errors }) => {
              if(errors) return (<h3>Error</h3>);
              if(loading || !listProducts) return (<h3>Loading...</h3>);
              return (<RenderProducts products={listProducts.items} />)
            }}
          </Connect> */}
        </React.Fragment>
        ) : (
          <React.Fragment>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Fabric Category</ControlLabel>
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
            {productChosen ? (
              <React.Fragment>
                <Thumbnail key={productChoice._id} src={productChoice.imgUrl} alt="Well, something didn't work...">
                  <h3>Product Chosen</h3>
                  <h3>{productChoice.imgName}</h3>
                </Thumbnail>
                {renderFabric}
              </React.Fragment>
            ) : null
            }
          </React.Fragment>
        )
      }
      {productChosen && fabricChosen ? (
        <React.Fragment>
          <h2>The product you have put together today is: </h2>
          <div style={{display: "flex"}}>
            <Thumbnail key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
              <h3>Fabric Chosen</h3>
              <h3>{fabricChoice.imgName}</h3>
            </Thumbnail>
            <Thumbnail key={imgBreakDown.typeOutline[prodTypeChosen].prodType} src={`${s3imgUrl}${imgBreakDown.typeOutline[prodTypeChosen].prodImgLocation}`} alt="Well, something didn't work...">
              <h3>Product Chosen</h3>
              <h3>{imgBreakDown.typeOutline[prodTypeChosen].prodType}</h3>
            </Thumbnail>
          </div>
        </React.Fragment>
      ): null
      }
    </div>
  )
}

/*
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="XJV6YRPASBAPG" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" alt="Add to Cart" />
          </form>
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
								<input type="hidden" name="cmd" value="_cart">
								<input type="hidden" name="business" value="UF9VSSKARLZY6">
								<input type="hidden" name="lc" value="US">
								<input type="hidden" name="item_name" value="BWbd143">
								<input type="hidden" name="on1" value="Color">
								<input type="hidden" name="on2" value="Style">
								<input type="hidden" name="on3" value="Where did you hear about us?">
								<input type="hidden" name="button_subtype" value="products">
								<input type="hidden" name="no_note" value="0">
								<input type="hidden" name="cn" value="Add special instructions to the seller">
								<input type="hidden" name="no_shipping" value="2">
								<input type="hidden" name="currency_code" value="USD">
								<input type="hidden" name="weight_unit" value="lbs">
								<input type="hidden" name="add" value="1">
								<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHosted">
								<table>
									<tbody><tr>
										<td>
											<input type="hidden" name="on0" value="BWbd143">BWbd143
										</td>
									</tr>
									<tr>
										<td>
											<select name="os0">
												<option value="Qty 1">Qty 1 $10.00</option>
												<option value="Qty 2">Qty 2 $20.00</option>
												<option value="Qty 3">Qty 3 $30.00</option>
											</select><br><select name="os3"><option>How Did you hear about us?</option><option value="friend_family">Friend/Family</option><option value="craft_show">Craft Show</option><option value="ad">Ad</option><option value="web_search">Web Search</option><option value="other">Other</option></select></td>
									</tr>
								</tbody></table>
								<input type="hidden" name="currency_code" value="USD">
								<input type="hidden" name="option_select0" value="Qty 1">
								<input type="hidden" name="option_amount0" value="10.00">
								<input type="hidden" name="option_select1" value="Qty 2">
								<input type="hidden" name="option_amount1" value="20.00">
								<input type="hidden" name="option_select2" value="Qty 3">
								<input type="hidden" name="option_amount2" value="30.00">
								<input type="hidden" name="option_index" value="0">
								<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" border="0">
								<img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" border="0">
								</form> */