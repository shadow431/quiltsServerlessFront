import React from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import imgBreakDown from "./ImgBreakDown";

export default function renderGraphic(graphicProps) {
  return (
    <Grid fluid>
      {!graphicProps.graphicView === "all" ? (
        <Row>
          <Col className="graphicHeader" xs={12} sm={5} md={4} lg={4}>
            <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphicProps.graphicView]}</strong></h2>
          </Col>
        </Row>
      ): null
      }
      {graphicProps.graphics.map((graphic, i) => {
        if (graphicProps.graphicView === "all") {
          for (let i = 0; i < graphicProps.graphics.length;) {
            let currSubCat = graphicProps.graphics.filter(function(subGraphic) {
              return (subGraphic.subCat === graphic.subCat)
            });
            i = i + currSubCat.length;
            return (
              <Row>
                <Col>
                  <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[currSubCat[0].type]}</strong></h2>
                </Col>
                {currSubCat.map(currGraphic => {
                  return (
                    <Col key={i} xs={12} sm={5} md={3}>
                      <Thumbnail className="renderThumb" key={i} src={currGraphic.imgUrl} onClick={() => graphicProps.handleGraphicChoice(graphic)} alt="Image to be added soon....">
                        <h3>{currGraphic.name}</h3>
                      </Thumbnail>
                    </Col>
                  )
                })}
              </Row>
            )
          }
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
    </Grid>
  );
}