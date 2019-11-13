import React, { useState } from "react";
import { Button, FormControl, Thumbnail } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function OvenMitt (props) {
  const products = props.props.props.props;
  const [ prod, setProd ] = useState("");
  function handleFabricStage(e) {
    e.preventDefault();
    setProd(props.products[3].prodType);
    props.history.push("/ovenmitt/fabric");
    console.log("current prod to work with: " + prod);
  }
  return (
    <div>
      <Thumbnail key={products[3]._id} src={products[3].imgUrl} alt="Well, something didn't work...">
        <div>{imgBreakDown.typeOutline.OVM.prodType}</div>
        <h4>{imgBreakDown.typeOutline.OVM.prodDesc}</h4>
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