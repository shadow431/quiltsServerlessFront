import React, { useState } from "react";
import RenderGraphics from "../components/RenderGraphics";
import { FormControl, FormGroup, ControlLabel, Grid, Row } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function Designs (props) {
  const { designs, handleGraphicView, handleLargeImage, graphicView, setGraphicView, LargerImage, isLargeImage, handleGraphicChoice } = props;
  const graphicCategories = ["afg", "air", "aki", "abd", "esk", "asc", "aus", "atr", "baj", "bas", "bea", "brd", "bed", "bls", "bel", "ber", "bic", "btc", "bch", "bld", "brc", "bod", "bor", "bos", "bov", "box", "blt", "brr", "brt", "bru", "can", "cah", "kcs", "che", "chi", "chc", "cho", "clb", "cos", "col", "cor", "cot", "dox", "dal", "ddt", "dob", "bul", "eng", "spr", "flt", "fox", "fbl", "she", "grs", "gol", "gor", "grd", "grp", "gsm", "gry", "hav", "pul", "hus", "ice", "irh", "irw", "iwh", "itg", "jrt", "jpc", "kes", "ker", "lad", "lab", "lag", "lak", "lgm", "leo", "lhp", "mal", "mas", "min", "mor", "new", "nor", "nov", "egs", "pap", "pek", "pic", "pit", "plh", "pom", "pod", "por", "pug", "rat", "rod", "rot", "sal", "sam", "sci", "sch", "sco", "sha", "shl", "shb", "shi", "sil", "smc", "stb", "stf", "tib", "tre", "vis", "wei", "wss", "whi", "wht", "wip", "wfx", "yor"];
  const graphics = designs;

  return (
    <Grid fluid>
      <Row>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Welcome to Embroidery!!  Feel free to browse through and choose a design.</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={handleGraphicView}>
            <option value="select">Design Choice</option>
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
      <RenderGraphics graphicProps={{ graphicCategories, graphicView, graphics, handleLargeImage, handleGraphicChoice }} />
    </Grid>
  )
}