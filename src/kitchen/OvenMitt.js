import React, { useState } from "react";
import { Button, Thumbnail } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import renderHTML from "react-render-html";

export default function OvenMitt (props) {
  const [ prod, setProd ] = useState("");
  function handleFabricStage(e) {
    e.preventDefault();
    setProd(props.products[3]);
    props.history.push("/ovenmitt/fabric");
    console.log("current prod to work with: " + prod);
  }
  return (
    <div>
      <Thumbnail key={prod._id} src={prod.imgUrl} alt="Well, something didn't work...">
        <div>{imgBreakDown.typeOutline.OVM.prodType}</div>
        {renderHTML(imgBreakDown.typeOutline.OVM.prodDesc)}
        <form onSubmit={handleFabricStage}>
          <Button
            type="submit"
            bsStyle="primary"
          >
            Choose Your Fabric
          </Button>
        </form>
      </Thumbnail>
    </div>
  )
}