import React, { useState } from "react";
import { Thumbnail, Button, Col } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import EmbroideryNav from "../containers/EmbroideryNav";
import MainNav from "../components/MainNav";

export default function EmbroideryHome (props) {
  console.log("props at embroideryhome: ", props);
  const [ prod, setProd ] = useState("");
  const products = props.props.props;
  function handleProductType (e) {
    e.preventDefault();
    setProd(imgBreakDown.typeOutline.BPB.prodType);
    props.history.push("/embroidery/prodoptions");

  }
    return products.map((product, i) => {
      if(i !== 0) {
        return(
          <Col xs={12} sm={4} md={3}>
            <Thumbnail key={products[0]._id} src={products[0].imgUrl} alt="Well, something didn't work...">
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