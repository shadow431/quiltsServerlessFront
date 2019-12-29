import React from "react";
import RenderGraphics from "../components/RenderGraphics";
import { Grid, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function Fabrics (props) {
  const { fabrics, graphicView, setGraphicView, isLargeImage, LargerImage, handleGraphicView, handleLargeImage, handleGraphicChoice } = props;
  const graphicCategories = ["bir", "bug", "cad", "fdk", "flr", "frm", "hol", "mil", "mis", "nat", "wdl"];
  const graphics = fabrics;

  return (
    <Grid fluid >
      <Row >
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Feel free to browse through the Fabric Designs and choose what meets your fancy!!</ControlLabel>
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