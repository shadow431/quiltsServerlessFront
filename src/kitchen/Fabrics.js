import React, { useState } from "react";
import RenderGraphics from "../components/RenderGraphics";
import { Grid, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function Fabrics (props) {
  const { fabrics } = props;
  const graphicCategories = ["bir", "bug", "cad", "fdk", "flr", "frm", "hol", "mil", "mis", "nat", "wdl"];
  const graphics = fabrics;
  const [graphicView, setGraphicView] = useState("all");

  function handleGraphicView(e) {
    setGraphicView(e.target.value);
  }

  return (
    <Grid fluid >
      <Row >
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>TO CHOOSE THESE FABRICS FOR YOUR KITCHEN PRODUCTS, PLEASE GO TO THE "KITCHEN ITEMS" PAGE.</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={handleGraphicView}>
            <option value="select">Fabric Choice</option>
            <option value="all">All Fabrics</option>
            {graphicCategories.map((subcat, i) => {
              return (
                <option key={i} value={subcat}>{imgBreakDown.subCat[subcat]}</option>
              )
            })}
          </FormControl>
        </FormGroup>
      </Row>
      <RenderGraphics graphicProps={{ graphicCategories, graphicView, graphics }} />
    </Grid>
  )
}