import React from "react";
import { Thumbnail, Button, Col, Grid, Row } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

function FabricChoice (props) {
  function editChoice(e) {
    e.preventDefault();
    alert("You have chosen to edit your selection!");
  }
  function addToCart(e) {
    e.preventDefault();
    alert("You have added your choice to the cart");
  }
  return (
    <Grid>
      <Row>
        <Col md={3}>
          <Thumbnail key={props.products[3]._id} src={props.products[3].imgUrl} alt="Well, something didn't work...">
            <div>{imgBreakDown.typeOutline.OVM.prodType}</div>
          </Thumbnail>
        </Col>
        <Col md={3}>
          <Thumbnail key={props.products[1]._id} src={props.products[1].imgUrl} alt="Well, something didn't work...">
            <div>{imgBreakDown.typeOutline.OVM.prodType}</div>
          </Thumbnail>
          <form onSubmit={editChoice}>
            <Button
              type="submit"
              bsStyle="primary"
            >
              Edit Choice
            </Button>
          </form>
          <form onSubmit={addToCart}>
            <Button
              type="submit"
              bsStyle="primary"
            >
              Add To Cart
            </Button>
          </form>
        </Col>
        <Col md={3}>
          <Thumbnail key={props.products[2]._id} src={props.products[2].imgUrl} alt="Well, something didn't work...">
            <div>{imgBreakDown.typeOutline.OVM.prodType}</div>
          </Thumbnail>
          <form onSubmit={editChoice}>
            <Button
              type="submit"
              bsStyle="primary"
            >
              Edit Choice
            </Button>
          </form>
          <form onSubmit={addToCart}>
            <Button
              type="submit"
              bsStyle="primary"
            >
              Add To Cart
            </Button>
          </form>
        </Col>
      </Row>
    </Grid>

  )
}

export default FabricChoice;