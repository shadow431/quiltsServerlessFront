import React, { useState } from "react";
import { Thumbnail, Button } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function EmbroideryHome (props) {
  const [ prod, setProd ] = useState("");
  function handleProductType (e) {
    e.preventDefault();
    setProd(imgBreakDown.typeOutline.BPB.prodType);
    props.history.push("/embroidery/prodoptions");
    console.log(prod);
  }
  return (
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
  )
}