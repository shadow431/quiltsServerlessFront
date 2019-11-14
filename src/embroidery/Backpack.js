import React, { useState } from "react";
import { Button, } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

function Backpack (props) {
  const [prod, setProd] = useState("");
  function handleProductType(e) {
    e.preventDefault();
    setProd(imgBreakDown.typeOutline.BPB.prodType);
    props.history.push("/embroidery/colors");
    console.log(prod);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleProductType}>
        <Button
          type="submit"
          bsStyle="primary"
        >
          Choose Your Color
        </Button>
      </form>
    </React.Fragment>
  )
}

export default Backpack;