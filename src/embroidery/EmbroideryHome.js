import React, { useState } from "react";
import { Thumbnail, Button, Col, Grid, Row } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

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
      <Grid>
        <Row>
          {populateProducts()}
        </Row>
      </Grid>
    </React.Fragment>
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
