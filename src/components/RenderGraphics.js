import React from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import imgBreakDown from "./ImgBreakDown";

export default function renderGraphic(graphicProps) {
  return (
    <Grid fluid>
      <Row>
        <Col className="graphicHeader" xs={12} sm={5} md={4} lg={4}>
          <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphicProps.graphicView]}</strong></h2>
        </Col>
      </Row>
      <Row>
        {graphicProps.graphics.map((graphic, i) => {
          if (graphicProps.graphicView === "all") {
            return (
              <Col key={i} xs={12} sm={5} md={3}>
                <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => graphicProps.handleGraphicChoice(graphic)} alt="Image to be added soon....">
                  <h3>{graphic.name}</h3>
                </Thumbnail>
              </Col>
            )
          } else if(graphic.subCat === graphicProps.graphicView){
            return (
              <Col key={i} xs={12} sm={5} md={4} lg={4}>
                <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => graphicProps.handleGraphicChoice(graphic)} alt="Image to be added soon....">
                  <h3>{graphic.name}</h3>
                </Thumbnail>
              </Col>
            )
          }
        })
        }
      </Row>
    </Grid>
  );
}