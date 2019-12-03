import React, { useState } from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import { API } from "aws-amplify";
import imgBreakDown from "./ImgBreakDown";

export default function renderGraphic(graphicProps) {
  const { graphicView } = graphicProps;
  console.log("graphicView: ",graphicView)
  const graphics = [];

  async function loadCategoryGraphic() {
    console.log("inside cat fab");
    try {
      const categoryGraphics = await API.get("quilts", `/fabric/type/${graphicView}`);
      console.log("Graph Cat: ",categoryGraphics);
      graphics.push(categoryGraphics);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadCategoryGraphic();
        // return <ToastDemo />;
      }
    }
  }

  async function loadAllGraphics() {
    console.log("inside all fab");
    try {
      const allGraphics = await API.get("quilts", "/fabric");
      graphics.push(allGraphics);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadAllGraphics();
        // return <ToastDemo />;
      }
    }
  }

  if (graphicView === undefined || graphicView === null || graphicView === []) {
    return;
  } else if (!graphicProps.graphicView === "all") {
    loadCategoryGraphic();
  } else {
    loadAllGraphics();
  }
  console.log(graphics);

  function renderCategoryGraphics () {
    return (
      graphics.map((graphic, i) => {
        return (
          <React.Fragment>
            <Row>
              <Col className="graphicHeader" xs={12} sm={5} md={4} lg={4}>
                <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphic.subCat]}</strong></h2>
              </Col>
            </Row>
            <Row>
              {graphics.map((graphic, i) => {
                return (
                  <Col key={i} xs={12} sm={5} md={3}>
                    <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => graphicProps.handleGraphicChoice(graphic)} alt="Image to be added soon....">
                      <h3>{graphic.name}</h3>
                    </Thumbnail>
                  </Col>
                )
              })}
            </Row>
          </React.Fragment>
        )
      })
    )
  }

  function renderAllGraphics () {
    return (
      graphics.map((graphic, i) => {
        return (
          <Row>
            <Col key={i} xs={12} sm={5} md={4} lg={4}>
              <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => graphicProps.handleGraphicChoice(graphic)} alt="Image to be added soon....">
                <h3>{graphic.name}</h3>
              </Thumbnail>
            </Col>
          </Row>
        )
      })
    )
  }
  return (
    <Grid fluid>
      {graphics && !graphicProps.graphicView === "all" ? (
        renderCategoryGraphics()
      ) : (
        renderAllGraphics()
      )
      }
    </Grid>
  );
}