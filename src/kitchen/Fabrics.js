import React, { useState } from "react";
import RenderGraphics from "../components/RenderGraphics";
import { Grid, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function Fabrics (props) {
  const { fabrics, graphicView, setGraphicView, isLargeImage, LargerImage, handleGraphicView, handleLargeImage, handleGraphicChoice } = props;
  const graphicCategories = ["bir", "bug", "cad", "fdk", "flr", "frm", "hol", "mil", "mis", "nat", "wdl"];
  const graphics = fabrics;

  setGraphicView("all");

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
      {isLargeImage ? <LargerImage /> : null}
      <RenderGraphics graphicProps={{ graphicCategories, graphicView, graphics, handleLargeImage, handleGraphicChoice }} />
    </Grid>
  )
}