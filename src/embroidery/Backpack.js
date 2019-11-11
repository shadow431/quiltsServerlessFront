import React, { useState } from "react";
import { Button, Thumbnail } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import EmbroideryNav from "./EmbroideryNav";

function Backpack (props) {
  const [prod, setProd] = useState("");
  function handleProductType(e) {
    e.preventDefault();
    setProd(imgBreakDown.typeOutline.BPB.prodType);
    props.history.push("/embroidery/colors");
    console.log(prod);
  }
  return (
    <form onSubmit={handleProductType}>
      <Button
        type="submit"
        bsStyle="primary"
      >
        Choose Your Color
      </Button>
    </form>
  )
}

export default Backpack;