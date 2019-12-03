import React from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import imgBreakDown from "./ImgBreakDown";

export default function renderGraphic(graphicProps) {

  async function loadGraphic() {
    try {
      const fabrics = await API.get("quilts", "/fabric");
      setGraphics(fabrics);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadGraphic();
        // return <ToastDemo />;
      }
    }
  }

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
            return (
              <Row>
                <Col>
                  <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphicView]}</strong></h2>
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
          } else {
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