import React, { useState } from "react";
import RenderGraphics from "../components/RenderGraphics";
import { FormControl, FormGroup, ControlLabel, Grid, Row } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import RenderLetterGraphics from "../components/RenderLetterGraphics";

export default function Designs (props) {
  const {
    designs,
    handleGraphicView,
    handleLargeImage,
    graphicView,
    setGraphicView,
    LargerImage,
    isLargeImage,
    handleGraphicChoice,
    embroideryGraphicCategories,
    letterView,
    showByLetter
  } = props;
  const graphicCategories = embroideryGraphicCategories;
  const graphics = designs;

  return (
    <React.Fragment>
      <Grid fluid>
        <Row>
          <FormGroup controlId="formControlsSelect" className="categorySelector">
            <ControlLabel>Welcome to Embroidery!!  Feel free to browse through and choose a design.</ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={handleGraphicView}>
              <option value="all">All Designs</option>
              {graphicCategories.map((subcat, i) => {
                return (
                  <option key={i} value={subcat}>{imgBreakDown.subCat[subcat]}</option>
                )
              })}
            </FormControl>
          </FormGroup>
        </Row>
        {isLargeImage ? <LargerImage /> : null}
        {showByLetter ?
          <RenderLetterGraphics letterProps={{letterView, graphicCategories, graphics, handleGraphicChoice, handleLargeImage}} />
        :
          <RenderGraphics graphicProps={{ graphicCategories, graphicView, graphics, handleLargeImage, handleGraphicChoice }} />
        }

      </Grid>
    </React.Fragment>
  )
}