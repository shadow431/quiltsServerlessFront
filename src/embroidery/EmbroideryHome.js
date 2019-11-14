import React, { useState } from "react";
import { Thumbnail, Button, Col, Grid, Row } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import EmbroideryNav from "../components/EmbroideryNav";

export default function EmbroideryHome (props) {
  console.log("props at embroidery: ", props)
  const [ prod, setProd ] = useState("");

  function handleProductType (e) {
    e.preventDefault();
    setProd(imgBreakDown.typeOutline.BPB.prodType);
    props.history.push("/embroidery/prodoptions");

  }

  function populateProducts () {
    return props.products.map((product, i) => {
      if(i !== 0) {
        return(
          <Col key={i} xs={12} sm={4} md={3}>
            <Thumbnail key={props.products[0]._id} src={props.products[0].imgUrl} alt="Well, something didn't work...">
              <div>{imgBreakDown.typeOutline.FAB.prodType}</div>
              <h4>{imgBreakDown.imgSubCat.abd}</h4>
              <form onSubmit={handleProductType}>
                <Button
                  type="submit"
                  bsStyle="primary"
                >
                  Choose Your Design
                </Button>
              </form>
            </Thumbnail>
          </Col>
        )
      }
    })
  }

  return (
    <React.Fragment>
      <EmbroideryNav />
      <Grid>
        <Row>
          {populateProducts()}
        </Row>
      </Grid>
    </React.Fragment>
  )
}
