import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function KitchenNav (props) {
  const { history } = props;

  function handleProductSelection(e) {
    console.log(e.target.value);
    history.push(`/kitchen/${e.target.value}`);
  }

  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange={handleProductSelection}>
        <option value="select">select</option>
        <option value="potato">Baked Potato Bags</option>
        <option value="bowl">Bowl Wraps</option>
        <option value="ovenmitt">Oven Mitts</option>
        <option value="plate">Plate Wraps</option>
        <option value="tortilla">Tortilla Wraps</option>
      </FormControl>
    </FormGroup>
  )
};

export default KitchenNav;
