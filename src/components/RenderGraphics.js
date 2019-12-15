import React, { useState, useEffect } from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import { API } from "aws-amplify";
import imgBreakDown from "./ImgBreakDown";

export default function RenderGraphics(props) {
  const { graphicView, handleGraphicChoice, graphicCategories, graphics } = props.graphicProps;


  function renderCategoryGraphics () {
    return (
      <React.Fragment>
        <Row>
          <Col className="graphicHeader" xs={12} sm={5} md={4} lg={4}>
            <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphicView]}</strong></h2>
          </Col>
        </Row>
        <Row>
          {graphics.map((graphic, i) => {
            if(graphic.subCat === graphicView) {
              return (
                <Col key={i} xs={12} sm={5} md={3} lg={4}>
                  <Thumbnail className="renderThumb" key={graphic._id} src={graphic.imgUrl} onClick={() => handleGraphicChoice(graphic)} alt="Image to be added soon....">
                    <h3>{graphic.name}</h3>
                  </Thumbnail>
                </Col>
              )
            }
          })}
        </Row>
      </React.Fragment>
    )
  }

  function renderAllGraphics () {
    return (
      <React.Fragment>
        {graphicCategories.map((category) => {
          return (
            <React.Fragment>
              <Row key={category}>
                <h2 style={{textDecoration: "underline"}}><strong>{imgBreakDown.subCat[category]}</strong></h2>
              </Row>
              <Row>
                {graphics.map((graphic, i) => {
                  if(graphic.subCat === category){
                    console.log(graphic.subCat)
                    return (
                      <Col key={i} xs={12} sm={5} md={4} lg={4}>
                        <Thumbnail className="renderThumb" key={graphic._id} src={graphic.imgUrl} onClick={() => handleGraphicChoice(graphic)} alt="Image to be added soon....">
                          <h3>{graphic.name}</h3>
                        </Thumbnail>
                      </Col>
                    )
                  }
                })}
              </Row>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }

  return (
    <Grid fluid>
      {graphicView === "select" ? <h2>Please choose from the dropdown above!!</h2> : null}
      {graphicView === "all" ? renderAllGraphics() : null}
      {graphicView !== "all" && graphicView !== "select" ? renderCategoryGraphics() : null}
    </Grid>
  );
}